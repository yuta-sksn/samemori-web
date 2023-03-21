import { useClassName } from '@/utils/component-helper';
import React, { useContext, useEffect, useState } from 'react';
import classes from './SectionTitle.module.scss';

interface SectionTitleProps {
  title: string;
  description: string;
}

export const SectionTitle = ({
  title,
  description,
}: SectionTitleProps) => {
  return (
    <div className={useClassName(['fs-32px', classes.sectionTitle])}>
      <h2>{title}</h2>
      <hr />
      <p className={useClassName(['fs-16px'])}>{description}</p>
    </div>
  );
};
