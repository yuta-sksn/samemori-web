import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { AdobeFontScript } from '@/features/adobefont/components/AdobeFontScript'
import { Header } from '@/components/layouts/Header/Header'
import { Footer } from '@/components/layouts/Footer/Footer'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { PageSection } from '@/components/layouts/PageSection/PageSection'
import { SiteNewsContent } from '@/features/news/components/SiteNewsContent'
import { useState } from 'react'
import { convertPeriodSeparateDate } from '@/utils/date'
import { SiteNews } from '@/features/news/components/SiteNews'
import { Button } from '@/components/elements/Button/Button'
import { useRouter } from 'next/router'

type NewsDetailPageProps = {
  id: string;
}

export default function Home({
  id,
}: NewsDetailPageProps) {
  // タイトル
  const [title, setTitle] = useState<string>('')
  // 公開日
  const [publishedAt, setPublishedAt] = useState<string>('')

  // Head -> title の文字列
  const headTitle = `${title} | 勝手に鮫町盛り上げ隊`

  // sectionTitleDescription
  const sectionTitleDescription = `${convertPeriodSeparateDate(publishedAt)} 公開`

  const router = useRouter()

  const onClickGotoNews = (e: any) => {
    e.preventDefault()
    router.push('/news')
  }
  
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <AdobeFontScript />
      </Head>
      <Header variant="blue" />
      <main className={[styles.main, styles.newsId].join(' ')}>
        {/* お知らせ・イベント詳細 */}
        <PageSection
          bgColor="aliceblue"
          sectionTitle={title}
          sectionTitleDescription={sectionTitleDescription}
        >
          <SiteNewsContent
            id={id}
            onChangeTitle={setTitle}
            onChangePublishedAt={setPublishedAt}
          />
        </PageSection>
        {/* SNS シェア */}
        <PageSection>
          <h2 className={styles.indexAboutUsCatch}>鮫町の魅力を活かし、盛り上げる</h2>
          <p className={styles.indexAboutUsDescription}>
            勝手に鮫町盛り上げ隊は…テキストテキストテキスト<br />テキストテキスト<br />テキストテキスト、簡単な説明
          </p>
        </PageSection>
        {/* お知らせ・イベント一覧 */}
        <PageSection
          bgColor="aliceblue"
          sectionTitle="お知らせ・イベント"
          sectionTitleDescription="News & Events"
        >
          <SiteNews limit={3} noPagination={true} />
          <Button label="お知らせ・イベント一覧をみる" onClick={onClickGotoNews} />
        </PageSection>
      </main>
      <Footer />
    </>
  )
}

/**
 * サーバサイドで Props を指定する
 *
 * @param {GetServerSidePropsContext} context 
 * @returns {GetServerSidePropsResult<UserAchievementsProps>}
 */
export const getServerSideProps = (
  context: GetServerSidePropsContext
): GetServerSidePropsResult<NewsDetailPageProps> => {
  const id = context.query.newsId as string ?? ''
  return {
    props: {
      id
    }
  }
}
