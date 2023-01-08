import { ReactElement, ReactNode } from 'react'
import { Layout } from '../components/Layout'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
