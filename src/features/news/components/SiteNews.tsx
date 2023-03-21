import React from 'react';
import useSyncSiteNewsList from '@/features/news/api/useSyncSiteNewsList';
import { isErrorModalObj, swrErrorHandlingInComponent } from '@/utils/error';
import { Content } from '@/features/news/types/content';
import { CardList } from '@/components/elements/CardList/CardList';
import Pagination from '@mui/material/Pagination';
import classes from './SiteNews.module.scss'

interface SiteNewsProps {
  limit?: number;
  noPagination?: boolean;
}

export const SiteNews = ({
  limit,
  noPagination,
}: SiteNewsProps) => {
  // 現在のページ
  const [page, setPage] = React.useState(1)

  // ページネーション変更イベント
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  // データの最大表示数 (取得件数)
  const dataLimit = limit ?? 10

  // データ何件目から取得するかの指定
  let dataOffset = (page - 1) * dataLimit
  // noPagination が true なら 0
  if (noPagination) {
    dataOffset = 0
  }

  // ユーザー別の称号一覧を API から購読
  const { data, error, isLoading } = useSyncSiteNewsList(dataLimit, dataOffset)
  const errorHandling = swrErrorHandlingInComponent(error);
  if (errorHandling !== null && !isErrorModalObj(errorHandling)) return errorHandling;

  // ページネーションを表示するか否か
  let showPagination = noPagination ?? false
  if (data) {
    showPagination = !noPagination && data.totalCount > data.limit
  }

  // ページ総数
  let pageCount = showPagination ?
    Math.floor(
      (data?.totalCount as number) / (data?.limit as number)
    ) + ((data?.totalCount as number) % (data?.limit as number) > 0 ? 1 : 0) : 0

  return (
    <>
      <div>
        {/* お知らせ・イベント一覧 */}
        {(() => {
          if (typeof data?.contents !== 'undefined' && typeof error === 'undefined') {
            return (<CardList contents={data.contents as Content[]} offset={data.offset} />)
          }
        })()}
        {/* ページネーション */}
        {(() => {
          if (showPagination) {
            return (
              <Pagination
                page={page}
                count={pageCount}
                color="primary"
                className={classes.customPagination}
                onChange={handleChange}
              />
            )
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
function useState(arg0: number): [any, any] {
  throw new Error('Function not implemented.');
}

