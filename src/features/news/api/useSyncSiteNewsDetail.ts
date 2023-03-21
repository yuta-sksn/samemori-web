import useSWR, { SWRResponse } from 'swr';
import fetcher, { FetchRequestError } from '@/utils/fetcher';
import { Content, ContentResponse } from "@/features/news/types/content";

/**
 * サイトのお知らせ・イベント詳細を microCMS から購読する
 *
 * @returns {SWRResponse<Content | null | void, FetchRequestError, boolean>}
 */
const useSyncSiteNewsDetail = (id: string): SWRResponse<Content | null | void, FetchRequestError, boolean> => {
  return useSWR(
    `api/v1/news/${id}`,
    fetcher<ContentResponse, Content>,
  );
}

export default useSyncSiteNewsDetail;