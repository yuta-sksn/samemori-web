
import { Content } from '@/features/news/types/content';
import React from 'react';
import { Card } from '../Card/Card';
import classes from './CardList.module.scss';

interface CardListProps {
  contents: Content[];
  offset: number;
  style?: React.CSSProperties;
}

export const CardList = ({
  contents,
  offset,
  style,
}: CardListProps) => {
  return (
    <div
      className={classes.cardList}
      style={style}
    >
      {/* リスト */}
      {contents.map((content: Content, index: number) => {
        return (
          <Card
            key={`card-${content.id}`}
            id={content.id}
            title={content.title}
            description={content.description}
            publishedAt={content.publishedAt}
            isLatest={offset === 0 && index === 0}
            category={content.category}
          />
        );
      })}
    </div>
  );
};
