import React from 'react'
import Head from 'next/head'

import styles from './layout.module.scss'
import Header from './header'
import { Footer } from './footer'

// TODO: reafctor meta from gatsby
// import Meta from './meta'

function Layout({
  pathName,
  title = '',
  children = undefined,
  ...props
}) {
  return (
    <div className={styles.layout} {...props}>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:image" content="/social-share.png" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content="/social-share.png" />

      </Head>
      {/* <Meta
      title={title}
      description={description}
      pathName={pathName}
      image={image}
    /> */}

      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
