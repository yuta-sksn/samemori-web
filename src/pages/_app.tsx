import '@/styles/globals.scss'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'

import 'modern-css-reset/dist/reset.min.css'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => window.scrollTo({
        top: 0,
        // @ts-ignore
        behavior: 'instant',
      })}
    >
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
  )
}
