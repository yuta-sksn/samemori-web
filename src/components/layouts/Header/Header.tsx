import React from 'react';
import classes from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  variant?: 'white' | 'blue';
}

export const Header = ({
  variant,
}: HeaderProps) => {
  const componentVariant = variant ?? 'white'

  return (
    <header className={classes.header}>
      <h1 className={classes.headerLogo}>
        <Link href="/" scroll={false}>
          <Image
            src={`/images/logo-landscape-${componentVariant}.png`}
            alt="勝手に鮫町盛り上げ隊"
            width={400}
            height={62.25}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Link>
      </h1>
    </header>
  );
};
