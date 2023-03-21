import React from 'react';
import classes from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useClassName } from '@/utils/component-helper';

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContentsContainer}>
        {/* ロゴ & 団体名 */}
        <div className={classes.footerLogo}>
          <Image
            src="/images/logo-landscape-white.png"
            alt="勝手に鮫町盛り上げ隊"
            width={1645}
            height={255}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        {/* リンク */}
        <div className={useClassName(['fs-18px', classes.footerLinks])}>
            {/* 内部・外部リンク */}
            <ul className={classes.footerLinksList}>
              <li><Link href="/about" scroll={false}>勝手に鮫町盛り上げ隊について</Link></li>
              <li><Link href="/news" scroll={false}>お知らせ・イベント</Link></li>
              <li><a href="">お問い合わせ</a></li> 
            </ul>
            <hr />
            {/* SNS リンク */}
            <div className={classes.footerLinksSns}>
              <p>SNS</p>
              <ul className={classes.footerLinksSnsList}>
                {/* FB */}
                <li>
                  <a className={classes.footerLinksSnsFb} href="">
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
                  <a className={classes.footerLinksSnsInsta} href="">
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
            </div>
        </div>
      </div>
      {/* Copyright */}
      <p className={useClassName(['fs-14px', classes.footerCopyright])}>©︎ 2023 勝手に鮫町盛り上げ隊</p>
    </footer>
  );
};
