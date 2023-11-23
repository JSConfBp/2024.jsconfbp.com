import React, { useState, useEffect } from 'react';
import Link from 'next/link'

import styles from './header.module.scss'

import Logo from './logo'
import Polygon from './polygon'
import TicketBanner from "../ui/ticket-banner"

function DesktopHeader() {
  return (
    <header className={styles.desktop_header}>
      <Polygon type="header-left" className={styles.left_polygon} />
      <Link href="/" className={styles.logo}>
        <Logo />
      </Link>
      <Polygon type="header-right" className={styles.right_polygon} />
    </header>
  )
}

function MobileHeader() {
  return (
    <header className={styles.mobile_header}>
      <Polygon type="mobile-header" className={styles.mobile_polygon} />
    </header>
  )
}

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update state based on screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check and set on mount (and if window is available)
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.main}>
      {/* {isMobile ? <MobileHeader /> : <DesktopHeader />} */}
      <MobileHeader />
      <TicketBanner />
      asdf
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
