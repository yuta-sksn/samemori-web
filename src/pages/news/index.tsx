import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { AdobeFontScript } from '@/features/adobefont/components/AdobeFontScript'
import { Header } from '@/components/layouts/Header/Header'
import { Footer } from '@/components/layouts/Footer/Footer'
import { PageSection } from '@/components/layouts/PageSection/PageSection'
import { SiteNews } from '@/features/news/components/SiteNews'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }}    // アンマウント時
    >
      <Head>
        <title>お知らせ・イベント | 勝手に鮫町盛り上げ隊</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <AdobeFontScript />
      </Head>
      <Header variant="blue" />
      <main className={[styles.main, styles.news].join(' ')}>
        <PageSection
          bgColor="aliceblue"
          sectionTitle="お知らせ・イベント"
          sectionTitleDescription="News & Events"
        >
          <SiteNews limit={10} />
        </PageSection>
      </main>
      <Footer />
    </motion.div>
  )
}
