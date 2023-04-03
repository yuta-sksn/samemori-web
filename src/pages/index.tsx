import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { Button } from '@/components/elements/Button/Button'
import { Calendar } from '@/components/elements/Calendar/Calendar'
import { Footer } from '@/components/layouts/Footer/Footer'
import { Header } from '@/components/layouts/Header/Header'
import { MainVisual } from '@/components/elements/MainVisual/MainVisual'
import { PageSection } from '@/components/layouts/PageSection/PageSection'
import { useState, useEffect } from 'react'
import { AdobeFontScript } from '@/features/adobefont/components/AdobeFontScript'
import { SiteNews } from '@/features/news/components/SiteNews'
import { useRouter } from 'next/router'
import { useClassName } from '@/utils/component-helper'
import { motion } from 'framer-motion'

export default function Home() {
  
  const [isHeaderBlue, setIsHeaderBlue] = useState(false)

  const toggleHeaderBlue = () => {
    window.scrollY > Math.round(window.innerHeight)
      ? setIsHeaderBlue(true)
      : setIsHeaderBlue(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleHeaderBlue)
    return () => window.removeEventListener('scroll', toggleHeaderBlue)
  }, [])

  const router = useRouter()

  const onClickGotoAbout = (e: any) => {
    e.preventDefault()
    router.push('/about', undefined, { scroll: false })
  }

  const onClickGotoNews = (e: any) => {
    e.preventDefault()
    router.push('/news', undefined, { scroll: false })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }}    // アンマウント時
    >
      <Head>
        <title>TOP | 勝手に鮫町盛り上げ隊</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <AdobeFontScript />
      </Head>
      <Header variant={isHeaderBlue ? 'blue' : 'white'} />
      <main className={styles.main}>
        <MainVisual />
        {/*　勝手に鮫町盛り上げ隊について */}
        <PageSection>
          <h2 className={useClassName(['fs-32px', styles.indexAboutUsCatch])}>鮫町の魅力を活かし、盛り上げる</h2>
          <p className={useClassName(['fs-18px', 'mb-1em', styles.indexAboutUsDescription])}>
            青森県八戸市の鮫町には、そこに住む人たちでもまだ知らない「ワクワク」がいっぱいあります。<br />勝手に鮫町盛り上げ隊は鮫町の「ワクワク」な魅力を「活かし」、皆が自分のできることで勝手に鮫町を盛り上げていくチームです。
          </p>
          <Button label="もっと詳しく！" onClick={onClickGotoAbout} />
        </PageSection>
        {/* お知らせ・イベント */}
        <PageSection
          bgColor="aliceblue"
          sectionTitle="お知らせ・イベント"
          sectionTitleDescription="News & Events"
        >
          <SiteNews limit={3} noPagination={true} />
          <Button label="お知らせ・イベント一覧" onClick={onClickGotoNews} />
        </PageSection>
        {/* イベントカレンダー */}
        <PageSection
          sectionTitle="イベントカレンダー"
          sectionTitleDescription="Events Calendar"
        >
          <Calendar />
        </PageSection>
      </main>
      <Footer />
    </motion.div>
  )
}
