import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { InViewProvider } from '../hooks/currentPage'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <InViewProvider>
      <Component {...pageProps} />
    </InViewProvider>
  )
}

export default MyApp
