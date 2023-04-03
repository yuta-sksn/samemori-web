import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import classes from './Button.module.scss';

interface ButtonProps {
  label: string;
  onClick?: (e?: any) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  ...props
}: ButtonProps) => {
  const [isPc, setIsPc] = useState<boolean>(false)
  useEffect(() => {
    setIsPc(!isMobile)
  }, [])

  return (
    <button
      type="button"
      className={[classes.button, isPc ? classes.isPc : ''].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
