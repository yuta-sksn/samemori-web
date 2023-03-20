import React from 'react';
import classes from './Card.module.scss';
import Image from 'next/image';
import { Category } from '@/features/news/types/category';
import { convertPeriodSeparateDate } from '@/utils/date';
import Link from 'next/link';

interface CardProps {
  id: string;
  thumbnailUrl?: string;
  title: string;
  description: string;
  publishedAt: string;
  isLatest?: boolean;
  category?: Category;
}

export const Card = ({
  thumbnailUrl,
  id,
  title,
  description,
  publishedAt,
  isLatest,
  category,
}: CardProps) => {
  const imageSrc = thumbnailUrl ?? '/images/news-noimage.png'
  const dataEmoji = thumbnailUrl ? '' : (['🦈', '❤️', '💡', '❗️', '✨'])[Math.floor(Math.random() * 5)]

  const isLatestNews = isLatest ?? false

  const categoryId = category?.id ?? 'news'
  let categoryType = 'お知らせ'
  switch (categoryId) {
    case 'news':
      categoryType = 'お知らせ'
      break
    case 'event':
      categoryType = 'イベント'
      break
  }

  return (
    <Link className={classes.card} href={`/news/${id}`}>
      <div className={classes.cardThumbnail} data-emoji={dataEmoji}>
        <Image
          src={imageSrc}
          alt="勝手に鮫町盛り上げ隊"
          width={290}
          height={176}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className={classes.cardTexts}>
        <p className={classes.cardTitleBefore}>
          <span className={classes.cardTitleBeforeDate}>{convertPeriodSeparateDate(publishedAt)}</span>
          {(() => {
            if (isLatestNews) {
              return (<span className={classes.cardTitleBeforeNew}>NEW!</span>)
            }
          })()}
          <span className={[classes.cardTitleBeforeType, classes[categoryId]].join(' ')}>{categoryType}</span>
        </p>
        <h3 className={classes.cardTitle}>{title}</h3>
        <p className={classes.cardDescription}>{description}</p>
      </div>
    </Link>
  );
};
