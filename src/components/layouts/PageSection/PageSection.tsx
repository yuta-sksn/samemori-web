import React from 'react';
import classes from './PageSection.module.scss';
import { SectionTitle } from '@/components/elements/SectionTitle/SectionTitle';

interface PageSectionProps {
  bgColor?: 'white' | 'aliceblue';
  sectionTitle?: string;
  sectionTitleDescription?: string;
  children?: string | JSX.Element | JSX.Element[];
}

export const PageSection = ({
  bgColor, 
  sectionTitle,
  sectionTitleDescription,
  children,
}: PageSectionProps) => {
  // 背景色カラー
  const componentBgColor = bgColor ?? 'white'

  return (
    <section className={[classes.pageSection, classes[componentBgColor]].join(' ')}>
      <div className={classes.pageSectionContents}>
        {/* タイトル */}
        {(() => {
          if (sectionTitle !== undefined) {
            return (
              <>
                <SectionTitle
                  title={sectionTitle}
                  description={sectionTitleDescription ?? ''}
                />
              </>
            );
          }
        })()}
        {/* コンポーネント子要素 */}
        {(() => {
          if (children !== undefined) {
            return (
              <>{children}</>
            );
          }
        })()}
      </div>
    </section>
  );
};
