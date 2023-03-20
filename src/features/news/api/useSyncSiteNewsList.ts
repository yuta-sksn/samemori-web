import useSWR, { SWRResponse } from 'swr';
import fetcher, { FetchRequestError } from '@/utils/fetcher';
import { News, NewsResponse } from "@/features/news/types";

/**
 * サイトのお知らせ・イベントを microCMS から購読する
 * デフォルトで contents[x].content は取得しない
 *
 * @returns {SWRResponse<News | null | void, FetchRequestError, boolean>}
 */
const useSyncSiteNewsList = (
  limit = 10,
  offset = 0,
  withoutContent = true
): SWRResponse<News | null | void, FetchRequestError, boolean> => {
  return useSWR(
    [
      'api/v1/news',
      'GET',
      {
        limit,
        offset,
        ...(withoutContent ? {
          fields: 'id,createdAt,updatedAt,publishedAt,revisedAt,title,category,description',
        } : {})
      },
    ],
    ([url, method, params]) => fetcher<NewsResponse, News>(url, method, params),
  );
}

export default useSyncSiteNewsList;