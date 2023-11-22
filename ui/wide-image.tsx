import React from 'react'
import styles from './wide-image.module.scss'
import Image from 'next/image'

const WideImage = ({ src, alt = '' }) => (
  <div className={styles.wideimage}>
    <Image
      fill
      src={src}
      alt={alt}
      className={styles.image}
    />
  </div>
)

export default WideImage
