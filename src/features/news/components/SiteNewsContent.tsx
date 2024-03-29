import React, { useEffect, useState } from 'react';
import useSyncSiteNewsDetail from '@/features/news/api/useSyncSiteNewsDetail';
import { isErrorModalObj, swrErrorHandlingInComponent } from '@/utils/error';
import classes from './SiteNewsContent.module.scss'
import parse from 'html-react-parser';
import { isMobile } from 'react-device-detect';

interface SiteNewsContentProps {
  id: string;
  onChangeTitle: (title: string) => void;
  onChangePublishedAt: (publishedAt: string) => void;
}

export const SiteNewsContent = ({
  id,
  onChangeTitle,
  onChangePublishedAt,
}: SiteNewsContentProps) => {
  const [isPc, setIsPc] = useState<boolean>(false)

  // お知らせ・イベント詳細を microCMS から購読
  const { data, error, isLoading } = useSyncSiteNewsDetail(id)

  // データ更新を通知する
  useEffect(() => {
    setIsPc(!isMobile)
  
    if (data) {
      onChangeTitle(data.title)
      onChangePublishedAt(data.publishedAt)
    }
  }, [data, onChangeTitle, onChangePublishedAt])

  // エラーハンドリング
  const errorHandling = swrErrorHandlingInComponent(error);
  if (errorHandling !== null && !isErrorModalObj(errorHandling)) return errorHandling;

  return (
    <>
      <div
        className={[
          classes.siteNewsContent,
          isPc ? classes.isPc : ''
        ].join(' ')}
      >
        {/* お知らせ・イベント詳細 */}
        {(() => {
          if (typeof data !== 'undefined' && typeof error === 'undefined') {
            return (<>{parse(data?.content as string)}</>)
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
