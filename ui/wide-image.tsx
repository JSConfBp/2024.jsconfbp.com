import React from 'react'
import styles from './wide-image.module.scss'
import Image from 'next/image'

function WideImage({ src, alt = '' }) {
  return (
    <div className={styles.wide_image}>
      <Image
        src={src}
        alt={alt}
        sizes='100vw'
        placeholder='blur'
        quality={25}
        fill
      />
    </div>
  )
}

export default WideImage
