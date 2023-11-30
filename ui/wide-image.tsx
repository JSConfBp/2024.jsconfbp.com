import React from 'react'
import styles from './wide-image.module.scss'
import Image from 'next/image'

function WideImage({ src, alt = '', priority = false }) {
  return (
    <div className={styles.wide_image}>
      <Image
        src={src}
        alt={alt}
        sizes='100vw'
        placeholder='blur'
        quality={25}
        fill
        priority={priority}
      />
    </div>
  )
}

export default WideImage
