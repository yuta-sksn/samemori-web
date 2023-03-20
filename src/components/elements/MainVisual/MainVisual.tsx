import React from 'react';
import classes from './MainVisual.module.scss';
import Image from 'next/image';

interface MainVisualProps {}

export const MainVisual = ({}: MainVisualProps) => {
  return (
    <div className={classes.mainVisual}>
      <div className={classes.mainVisualImgCover} />
      <div className={classes.mainVisualContents}>
        {/* キャッチコピー */}
        <h2 className={classes.mainVisualCatch}>
          <span>あのね！</span><br />
          <span>鮫町はワクワクが</span><br />
          <span>いっぱいだよ！</span>
        </h2>
        <div className={classes.mainVisualLogo}>
          <Image
            src="/images/logo-icon-color.png"
            alt="勝手に鮫町盛り上げ隊"
            width={300}
            height={300}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  );
};
