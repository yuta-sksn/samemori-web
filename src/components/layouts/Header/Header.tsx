import React from 'react';
import classes from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from '@/components/layouts/Menu/Menu';

interface HeaderProps {
  variant?: 'white' | 'blue';
}

export const Header = ({
  variant,
}: HeaderProps) => {

  const componentVariant = variant ?? 'white'

  // メニューが開いているか否か
  const [isOpenMenu, setIsOpenMenu] = React.useState(false)

  // メニュー開閉変更イベント
  const handleChange = (event: any) => {
    setIsOpenMenu(event.target.checked)
  }

  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.headerLogo}>
          <Link href="/" scroll={false}>
            <Image
              src={`/images/logo-landscape-${isOpenMenu ? 'white' : componentVariant}.png`}
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
      <Menu handleChange={handleChange} />
    </>
  );
};
