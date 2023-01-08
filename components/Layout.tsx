import { AppProps } from 'next/app'
import Footer from './Footer'
import Header from './Header'
import { ReactNode } from 'react'

export function Layout(children: ReactNode) {
  return (
    <>
      <Header />
      <main> {children}</main>
      <Footer />
    </>
  )
}
