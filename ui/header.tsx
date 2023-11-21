import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import Link from 'next/link'

import styles from './header.module.scss'
import Logo from './logo'

const Header = ({ pathName }) => {
  const [isHomePage, setIsHomePage] = useState(pathName === '/')

  useEffect(() => {
    const onHomePage = pathName === '/'

    setIsHomePage(onHomePage)
  }, [pathName])

  return (
    <header className={classnames(styles.header, !isHomePage && styles.subpage)}>
      <div className={styles.inner}>
        <div className={styles.title}>
          <Link href={'/'}>
            <Logo className={styles.logoSvg} polygonClassName={styles.polygons} />
          </Link>

          <h1 className={styles.jsconfBp}>
            <Link href={'/'}>
              <span className={styles.jsconf}>
                <span className={styles.logo}>JS</span>
                <span className={styles.conf}>Conf</span>
              </span>
              <span className={styles.budapest}>Budapest</span>
            </Link>
          </h1>

          <div className={styles.date}>
            27-28 June
            <span className={styles.year}>2024</span>
          </div>
        </div>

        <div className={styles.hero}>
          <div className={styles.cta}>
            <span className={styles.button}>
              Coming soon!
              <small>See you in person!</small>
            </span>
          </div>

          <div className={styles.mask}>
            <div className={styles.content}>
              <div className={styles.shadow}></div>
            </div>
          </div>
        </div>

        <input
          id="MobileMenuTrigger"
          type="checkbox"
          className={styles.triggerCheckbox}
          aria-hidden="true"
        />
        {/* <nav className={css.navigation}>
          <ul className={css.menu}>
            <li>
              <Link href={'/#Speakers'}>Speakers</Link>
            </li>
            <li>
              <Link href={'/updates/schedule'}>Schedule</Link>
            </li>
            <li>
              <Link href={'/scholarships'}>Scholarships</Link>
            </li>
            <li>
              <Link href={'/workshops'}>Workshops</Link>
            </li>
            <li>
              <Link href={"/"}>Scholarship</Link>
            </li>
            <li>
              <Link href={'/code-of-conduct'}>Code of Conduct</Link>
            </li>
          </ul>
        </nav> */}
        <label
          htmlFor="MobileMenuTrigger"
          className={styles.mobileMenuTrigger}
          aria-hidden="true"
        >
          <span>Open Menu</span>
        </label>
      </div>
    </header>
  )
}

export default Header
