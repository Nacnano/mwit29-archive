import { AppProps } from 'next/app'
import Footer from './Footer'
import Header from './Header'
import React, { ReactNode } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main> {children}</main>
      <Footer />
    </>
  )
}
