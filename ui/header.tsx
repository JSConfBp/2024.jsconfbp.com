import React from 'react';
import Link from 'next/link'

import styles from './header.module.scss'

import TicketBanner from "../ui/ticket-banner"
import HeaderBackground from './header-background';

function Header() {


  return (
    <div className={styles.main}>
      <HeaderBackground />
      <TicketBanner />
      {
        false && <div className={styles.cfp_container}>
          <Link href="/" >
            Call for Papers
          </Link>
        </div>
      }
    </div >
  )
}

export default Header
