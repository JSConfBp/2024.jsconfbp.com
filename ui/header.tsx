import React, { useState, useEffect, useRef } from 'react';

import styles from './header.module.scss'
import Polygons from './polygons';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';

function MenuItems({ onClick = () => undefined, className = "", ...props }) {
  const router = useRouter();

  const menuItems = [
    { href: "/scholarship", title: "Scholarship" },
    { href: "/partners", title: "Partners" },
    { href: "https://ti.to/jsconf-bp/jsconf-budapest-2024", title: "Tickets", liClassName: styles.cfp },
    { href: "/about-us", title: "About Us" },
    { href: "/code-of-conduct", title: "Code of Conduct" },
  ]

  return (
    <ul className={classNames(styles.menu_items, className)} {...props}>
      {menuItems.map(({ href, title, liClassName = "" }, idx) => (
        <li className={liClassName} key={idx}>
          <Link className={`${styles.link} ${href === router.asPath ? `${styles.active}` : ""}`}
            onClick={onClick}
            href={href}
          >
            {title}
          </Link>
        </li>))
      }
    </ul>
  )
}

function MobileMenu() {
  const [isChecked, setIsChecked] = useState(false);
  const overlayRef = useRef(null);

  const handleOnClick = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const overlay = overlayRef.current;

    if (isChecked) {
      overlay.style.display = 'block';
    } else if (!isChecked && overlay.style.display === 'block') {
      const handleAnimationEnd = () => {
        overlay.style.display = 'none';
      }

      overlay.addEventListener('animationend', handleAnimationEnd, { once: true });
    }

  }, [isChecked]);

  return (
    <div className={styles.mobile_menu}>
      <input type="checkbox"
        id="toggle"
        checked={isChecked}
        readOnly={true}
        className={styles.input_toggler} />
      <div ref={overlayRef} className={styles.overlay} style={{ display: "none" }}></div>
      <svg className={styles.menu_background} viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M105 0L105 105L7.62939e-06 -4.5897e-06L105 0Z" fill="var(--primary)" />
      </svg>
      <label htmlFor="toggle" onClick={handleOnClick} className={styles.toggler}>
        <span className={styles.toggler_line}></span>
        <span className={styles.toggler_line}></span>
        <span className={styles.toggler_line}></span>
      </label>


      <aside className={styles.topbar}>
        <MenuItems onClick={handleOnClick} />
      </aside>
    </div>
  )
}

function DesktopMenu() {
  return (
    <nav className={styles.desktop_menu}>
      <MenuItems />
    </nav>
  )
}

function Header() {
  // Wanted to use the backgrounds as inline SVGs to be able to animate them
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.main}>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
      <Polygons type={`header-background-${isMobile ? "mobile" : "desktop"}`} />
    </header>
  );
}

export default Header
