import React from 'react';
import classes from './SectionTitle.module.scss';

interface SectionTitleProps {
  /**
   * SectionTitle contents
   */
  title: string;

  description: string;
}

/**
 * Primary UI component for user interaction
 */
export const SectionTitle = ({
  title,
  description,
}: SectionTitleProps) => {
  return (
    <div className={classes.sectionTitle}>
      <h2>{title}</h2>
      <hr />
      <p>{description}</p>
    </div>
  );
};
