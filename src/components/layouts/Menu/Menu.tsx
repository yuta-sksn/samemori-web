import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';
import classes from './Menu.module.scss';

interface MenuProps {
  handleChange?: (e?: any, value?: boolean) => void;
}

export const Menu = ({
  handleChange,
}: MenuProps) => {
  const [isPc, setIsPc] = useState<boolean>(false)
  useEffect(() => {
    setIsPc(!isMobile)
  }, [])

  console.log(isPc)

  return (
    <div className={classes.menu}>
      <input
        id="menu-check"
        type="checkbox"
        className={classes.menuCheck}
        onChange={handleChange}
      />
      <label htmlFor="menu-check" className={classes.menuButton}><span></span></label>
      <div className={[classes.menuContent, isPc ? classes.isPc : ''].join(' ')}>
        <ul className={classes.menuContentList}>
          <li><Link href="/about" scroll={false}>勝手に鮫町盛り上げ隊について</Link></li>
          <li><Link href="/news" scroll={false}>お知らせ・イベント</Link></li>
          <li><a href="">お問い合わせ</a></li>
          <hr />
          <li className={classes.menuContentSns}>SNS</li>
          <ul className={classes.menuContentListSnsList}>
            {/* FB */}
            <li>
              <a className={classes.menuContentListSnsFb} href="">
                <Image
                  src="/images/icon-fb.svg"
                  alt="Facebook"
                  width={57.29}
                  height={58.06}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </a>
            </li>
            {/* Instagram */}
            <li>
              <a className={classes.menuContentListSnsInsta} href="">
                <Image
                  src="/images/icon-instagram.svg"
                  alt="Instagram"
                  width={53.33}
                  height={54.19}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};
