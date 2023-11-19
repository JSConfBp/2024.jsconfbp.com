import React from 'react'

import styles from './layout.module.scss'

import Header from './header'
// TODO: reafctor meta from gatsby
// import Meta from './meta'
import Footer from './footer'

const Layout = ({
  pathName,
  title = '',
  description = '',
  image,
  mainClassName = '',
  footerClassName = '',
  headerClassName = '',
  skipHeader = false,
  children,
}) => (
  <div className={styles.layout}>
    {!skipHeader && <Header className={headerClassName} pathName={pathName} />}
    {/* <Meta
      title={title}
      description={description}
      pathName={pathName}
      image={image}
    /> */}

    <main className={[mainClassName, styles.main].join(' ')}>{children}</main>

    <Footer className={footerClassName} />
  </div>
)

export default Layout
