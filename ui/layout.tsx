import React from 'react'
import Head from 'next/head'

import styles from './layout.module.scss'
import Header from './header'

// TODO: reafctor meta from gatsby
// import Meta from './meta'

function Layout({
  pathName,
  title = '',
  children = undefined,
}) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {/* <Meta
      title={title}
      description={description}
      pathName={pathName}
      image={image}
    /> */}

      <main className={styles.main}>{children}</main>

    </div>
  )
}

export default Layout
