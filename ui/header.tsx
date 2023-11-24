import React from 'react';

import styles from './header.module.scss'

import TicketBanner from "../ui/ticket-banner"
import HeaderBackground from './header-background';
import CfpButton from './cfp-button';

function Header() {
  return (
    <div className={styles.main}>
      <HeaderBackground />
      <TicketBanner />
      {false && <CfpButton />}
    </div >
  )
}

export default Header
