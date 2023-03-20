import React from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: (e?: any) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classes.button}
      {...props}
    >
      {label}
    </button>
  );
};
