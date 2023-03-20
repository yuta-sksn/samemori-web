import { assertIsDefined } from '@/utils/assert';

export type FetchRequestError = {
  errObj: string;
  response: {
    status: number;
    error: string;
    exception: string;
  }
}

/**
 * Fetch API を用いてリソース通信を行う fetcher
 *
 * @param {string} url 
 * @param {string} [method='GET']
 * @param {{
 *  [key: string]: string
 * }} [params={}] 
 * @param {{
 *  [key: string]: string
 * }} [headers={'Content-Type': 'application/json'}] 
 * @param {RequestInit} [init={mode: 'cors', method, headers}] 
 * @returns {Promise<U | null>}
 */
const fetcher = async <T, U>(
  url: string,
  method: string = 'GET',
  params: {},
  headers: {
    [key: string]: string;
  } = {
    'Content-Type': 'application/json',
    'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '',
  },
  init: RequestInit = {
    mode: 'cors',
    method,
    headers,
  }
): Promise<U | null | void> => {
  // API Base URL を取得
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  // env に定義されていなければ、ランタイムエラーを発生させる
  assertIsDefined(apiBaseUrl);

  const query = new URLSearchParams(params);
  const requestUrl = method === 'GET' ? `${apiBaseUrl}${url}?${query}` : url;

  // Fetch API でリクエストを送信
  const result = await fetch(requestUrl, init)
    .then(async (res: Response) => {
      // OK 以外なら FetchRequestError Object を throw し .catch のエラーハンドリングに移行
      if (!res.ok) {
        throw {
          errObj: new Error(res.statusText),
          response: await res.json()
        }
      }

      return res.json()
    })
    .then((data: T) => _responseToModelObject(data))
    .catch((err) => {
      // FetchRequestError を catch
      const fetchError = err as FetchRequestError
      // エラー処理 (エラーをログに出力したり、Sentry に通知する)
      console.error(fetchError.errObj);
      // 呼び出し元にエラーレスポンスをスローする
      throw fetchError;
    }) as Promise<U | null | void>;

  return result;
}

/**
 * レスポンスオブジェクトのキーをローワーキャメルに変換する
 *
 * @param {T} response 
 * @returns {U}
 */
const _responseToModelObject = <T, U>(response: T): U => {
  let result: U
  // 配列の場合は Array.prototype.map で Object を抽出して変換
  if (Array.isArray(response)) {
    result = response.map((obj => _convert(obj))) as U
  } else {
    result = _convert(response)
  }
  return result
}

/**
 * オブジェクトのキーをローワーキャメルに変換する
 *
 * @param {T} obj 
 * @returns {U}
 */
const _convert = <T, U>(obj: T): U => {
  return Object.keys(obj as Object).reduce((acc: any, key: string) => {
    // 値が object の場合は再帰的に _responseToModelObject を実行
    if(Object.prototype.toString.call((obj as any)[key]) === '[object Object]') {
      acc[_toCamel(key)] = _responseToModelObject((obj as any)[key]);
      return acc
    }
    acc[_toCamel(key)] = (obj as any)[key];
    return acc
  }, {}) as U;
}

/**
 * スネークケースからローワーキャメルへ変換する
 *
 * @param {string} str 
 * @returns {string}
 */
const _toCamel = (str: string): string => {
  return str.replace(/_(\w)/g, (_match, capture) => {
    return capture.toUpperCase();
  });
}

export default fetcher;