import React from 'react'

import * as css from './layout.module.scss'

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
  <div className={css.layout}>
    {!skipHeader && <Header className={headerClassName} pathName={pathName} />}
    {/* <Meta
      title={title}
      description={description}
      pathName={pathName}
      image={image}
    /> */}

    <main className={[mainClassName, css.main].join(' ')}>{children}</main>

    <Footer className={footerClassName} />
  </div>
)

export default Layout
