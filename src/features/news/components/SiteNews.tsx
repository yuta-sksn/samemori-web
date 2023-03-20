import React from 'react';
import useSyncSiteNewsList from '@/features/news/api/useSyncSiteNewsList';
import { isErrorModalObj, swrErrorHandlingInComponent } from '@/utils/error';
import { Content } from '@/features/news/types/content';
import { CardList } from '@/components/elements/CardList/CardList';

interface SiteNewsProps {
  limit?: number;
  noPagination?: boolean;
}

export const SiteNews = ({
  limit,
  noPagination,
}: SiteNewsProps) => {
  const dataLimit = limit ?? 10
  let dataOffset = 0 

  if (noPagination) {
    dataOffset = 0
  }

  // ユーザー別の称号一覧を API から購読
  const { data, error, isLoading } = useSyncSiteNewsList(dataLimit, dataOffset)
  const errorHandling = swrErrorHandlingInComponent(error);
  if (errorHandling !== null && !isErrorModalObj(errorHandling)) return errorHandling;

  return (
    <>
      <div>
      {(() => {
        if (typeof data?.contents !== 'undefined' && typeof error === 'undefined') {
          return (<CardList contents={data.contents as Content[]} />)
        }
      })()}
      </div>
      {/* エラーモーダル */}
      {(() => {
        // errorHandling が ErrorModalObj ならエラーモーダルを表示
        if (isErrorModalObj(errorHandling)) {
          return <></>;
        }
      })()}
    </>
  )
};
