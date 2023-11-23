import React from 'react'
import Link from 'next/link'

import styles from './header.module.scss'

import Logo from './logo'
import Polygon from './polygon'
import TicketBanner from "../ui/ticket-banner"

function DesktopHeader() {
  return (
    <div className={styles.main}>
      <header className={styles.header_container}>
        <Polygon type="header-left" className={styles.left_polygon} />
        <Link href="/" className={styles.logo}>
          <Logo />
        </Link>
        <Polygon type="header-right" className={styles.right_polygon} />
      </header>
      <TicketBanner />
      {false && <div className={styles.cfp_container}>
        <Link href="/" >
          Call for Papers
        </Link>
      </div>
      }
    </div>
  )
}

export default Header
