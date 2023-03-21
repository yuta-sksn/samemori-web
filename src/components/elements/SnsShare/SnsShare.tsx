import React from 'react';
import Image from 'next/image';
import classes from './SnsShare.module.scss';
import { getSnsShareUrl } from '@/utils/sns';

interface SnsShareProps {
  pathname: string;
  shareTitle: string;
}

export const SnsShare = ({
  pathname,
  shareTitle,
}: SnsShareProps) => {
  return (
    <div className={classes.snsShare}>
      <h3>\ この記事をシェアする /</h3>
      <ul>
        {/* LINE */}
        <li>
          <a
            className={classes.snsShareLine}
            href={getSnsShareUrl('line', pathname)}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Image
              src="/images/icon-line-color.svg"
              alt="LINE"
              width={54.19}
              height={55.12}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </a>
        </li>
        {/* Twitter */}
        <li>
          <a
            className={classes.snsShareTwitter}
            href={getSnsShareUrl('twitter', pathname, shareTitle)}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Image
              src="/images/icon-twitter-color.svg"
              alt="Twitter"
              width={54.19}
              height={55.12}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </a>
        </li>
        {/* FaceBook */}
        <li>
          <a
            className={classes.snsShareFb}
            href={getSnsShareUrl('fb', pathname)}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Image
              src="/images/icon-fb-color.svg"
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
      </ul>
    </div>
  );
};
