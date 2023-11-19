import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import Link from 'next/link'

import * as css from './header.module.scss'
import Logo from './logo'


const Header = ({ pathName }) => {
  const [videoSource, setVideoSource] = useState('')
  const [autoPlay, setAutoPlay] = useState('')
  const [isHomePage, setIsHomePage] = useState(pathName === '/')

  const DecorVideoSource = () => (
    <>
      <source src="/video/hero-2.webm" type="video/webm" />
      <source src="/video/hero-2.mp4" type="video/mp4" />
    </>
  )

  useEffect(() => {
    const onHomePage = pathName === '/'

    const connection = navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection || { effectiveType: '4g' }
    const isFastNetwork = !/[23]g/.test(connection.effectiveType)

    const allowMotion = !matchMedia('(prefers-reduced-motion)').matches

    setIsHomePage(onHomePage)
    // not happy, but
    if (window.innerWidth > 480 && isFastNetwork) {
      setVideoSource(<DecorVideoSource />)
      setAutoPlay(onHomePage && allowMotion)
    }
  }, [pathName])

  const DecorVideo = ({ source, autoPlay }) => (
    <video
      autoPlay={autoPlay}
      loop
      muted
      playsInline
      className={css.heroContent}
      poster="/video/hero-poster.jpg"
    >
      {source}
    </video>
  )

  return (
    <header className={classnames(css.header, !isHomePage && css.subpage)}>
      <div className={css.inner}>
        <div className={css.title}>
          <Link href={'/'}>
            <Logo className={css.logoSvg} polygonClassName={css.polygons} />
          </Link>

          <h1 className={css.jsconfBp}>
            <Link href={'/'}>
              <span className={css.jsconf}>
                <span className={css.logo}>JS</span>
                <span className={css.conf}>Conf</span>
              </span>
              <span className={css.budapest}>Budapest</span>
            </Link>
          </h1>

          <div className={css.date}>
            27-28 June
            <span className={css.year}>2024</span>
          </div>
        </div>

        <div className={css.hero}>
          <div className={css.cta}>
            <span className={css.button}>
              Coming soon!
              <small>See you in person!</small>
            </span>
          </div>

          <div className={css.mask}>
            <div className={css.content}>
              <DecorVideo source={videoSource} autoPlay={autoPlay} />
              <div className={css.shadow}></div>
            </div>
          </div>
        </div>

        <input
          id="MobileMenuTrigger"
          type="checkbox"
          className={css.triggerCheckbox}
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
          className={css.mobileMenuTrigger}
          aria-hidden="true"
        >
          <span>Open Menu</span>
        </label>
      </div>
    </header>
  )
}

export default Header
