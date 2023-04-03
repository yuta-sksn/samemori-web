import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import { AdobeFontScript } from '@/features/adobefont/components/AdobeFontScript'
import { Header } from '@/components/layouts/Header/Header'
import { Footer } from '@/components/layouts/Footer/Footer'
import { PageSection } from '@/components/layouts/PageSection/PageSection'
import { motion } from 'framer-motion'
import { useClassName } from '@/utils/component-helper'
import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isPc, setIsPc] = useState<boolean>(false)
  useEffect(() => {
    setIsPc(!isMobile)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }}    // アンマウント時
    >
      <Head>
        <title>勝手に鮫町盛り上げ隊について | 勝手に鮫町盛り上げ隊</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <AdobeFontScript />
      </Head>
      <Header variant="blue" />
      <main className={[styles.main, styles.about].join(' ')}>
      <PageSection
        bgColor="aliceblue"
        sectionTitle="勝手に鮫町盛り上げ隊について"
        sectionTitleDescription="About"
      >
        {/* キャッチコピー等 */}
        <h3 className={useClassName(['fs-32px', 'mb-1em', styles.aboutUsCatch])}>
          <span>あのね！</span><br />
          <span>鮫町はワクワクが</span><br />
          <span>いっぱいだよ！</span><br /><br />
          <span>そんなワクワクいっぱいな鮫町の</span><br />
          <span>魅力を「活かし」盛り上げたい！</span>
        </h3>
        {/* 説明 */}
        <p
          className={useClassName(['fs-18px', 'mb-1em', styles.aboutDescription])}
          style={{
            marginBottom: 0,
          }}
        >
          青森県八戸市の鮫町には、そこに住む人たちでもまだ知らない「ワクワク」がいっぱいあります。<br />勝手に鮫町盛り上げ隊は鮫町の「ワクワク」な魅力を「活かし」、皆が自分のできることで勝手に盛り上げていくチームです。
        </p>
        <h4
          className={[styles.aboutSubheading, isPc ? styles.isPc : ''].join(' ')}
        >
          町の魅力を活かす「まち活かし」
        </h4>
        <p
          className={useClassName(['fs-18px', 'mb-1em', styles.aboutDescription])}
          style={{
            marginBottom: 0,
          }}
        >
          勝手に鮫町盛り上げ隊は「まちおこし」や「まちづくり」とはちょっと違う、「まち活かし」で鮫町を盛り上げます！<br />
          鮫町は住んでいる地元の人たちですら知らない魅力がたくさんあります。広大な土地と自然はもちろん、素敵なお店やイベント、昔から続く海と山の文化、そして消えつつある文化も…。<br />
          それらの「ワクワク」を自分たちで足元から再発見し、触れ、そして活かし発信する、そういった「まち活かし」を行なっていきます。<br />
          そして、ゆくゆくは鮫町の魅力に触れた人たちが、新たに「まちおこし」や「まちづくり」を展開していく流れを作っていければと思っています！
        </p>
        <h4
          className={[styles.aboutSubheading, isPc ? styles.isPc : ''].join(' ')}
        >
          鮫町のこんな「ワクワク」を活かしたい！
        </h4>
        <p
          className={useClassName(['fs-18px', 'mb-1em', styles.aboutDescription])}
          style={{
            marginBottom: 0,
          }}
        >
          ただいま、準備中です！
        </p>
      </PageSection>
      </main>
      <Footer />
    </motion.div>
  )
}
