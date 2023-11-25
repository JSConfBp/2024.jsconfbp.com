import React from 'react';

import styles from './header.module.scss'

import TicketBanner from "../ui/ticket-banner"
import HeaderBackground from './header-background';
import CfpButton from './cfp-button';
import Link from 'next/link';

function Header() {
  return (
    <div className={styles.main}>
      <Link href={typeof window !== 'undefined' ? window.location.href : "/"}>
        <HeaderBackground />
      </Link>
      {false && <CfpButton />}
    </div >
  )
}

export default Header
