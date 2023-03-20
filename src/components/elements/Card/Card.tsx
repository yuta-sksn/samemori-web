import React from 'react';
import classes from './Card.module.scss';
import Image from 'next/image';

interface CardProps {
  thumbnailUrl?: string;
  title: string;
  description: string;
}

export const Card = ({
  thumbnailUrl,
  title,
  description,
}: CardProps) => {
  const imageSrc = thumbnailUrl ?? '/images/news-noimage.png'
  const dataEmoji = thumbnailUrl ? '' : (['🦈', '❤️', '💡', '❗️', '✨'])[Math.floor(Math.random() * 5)]

  return (
    <div className={classes.card}>
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
          <span className={classes.cardTitleBeforeDate}>2023.4.1</span>
          <span className={classes.cardTitleBeforeNew}>NEW!</span>
          <span className={classes.cardTitleBeforeType}>お知らせ</span>
        </p>
        <h3 className={classes.cardTitle}>{title}</h3>
        <p className={classes.cardDescription}>{description}</p>
      </div>
    </div>
  );
};
