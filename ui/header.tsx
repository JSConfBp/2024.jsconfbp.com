import React, { useState, useEffect } from 'react';

import styles from './header.module.scss'
import Polygons from './polygons';

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
      <Polygons type={`header-background-${isMobile ? "mobile" : "desktop"}`} />
    </header>
  );
}

export default Header
