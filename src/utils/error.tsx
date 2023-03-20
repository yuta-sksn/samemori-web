import DefaultErrorPage from 'next/error';
import { FetchRequestError } from "./fetcher";

type ErrorModalObj = {
  errorCode: number;
  errorMessage: string;
}

/**
 * swr を使用した際のエラーに対応したエラーハンドリング内容を返却する
 *
 * @param {FetchRequestError | undefined} error 
 * @returns {null | JSX.Element | ErrorModalObj}
 */
export const swrErrorHandlingInComponent = (
  error: FetchRequestError | undefined
): null | JSX.Element | ErrorModalObj => {
  if (error === undefined) return null;

  switch (error.response.status) {
    // 404 Not Found or 500 Internal Server Error
    case 404:
    case 500:
      return <DefaultErrorPage statusCode={error.response.status} />;
    // @todo: それ以外は意味のあるエラーとし、エラーモーダルを表示する
    default:
      return {} as ErrorModalObj;
  }
}

/**
 * 引数の型がErrorModalObj か否か？
 *
 * @param {unknown} arg 
 * @returns {boolean}
 */
export const isErrorModalObj = (arg: unknown): arg is ErrorModalObj => {
  const errorModalObj = arg as ErrorModalObj;

  return (
    typeof errorModalObj?.errorCode === 'number' &&
    typeof errorModalObj?.errorMessage === 'string'
  );
};
