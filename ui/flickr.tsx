import React from 'react'
import Script from 'next/script'
import classnames from 'classnames'
import css from './flickr.module.scss'

const Flickr = ({ albumId, image, title = '', className = '' }) => (
  <>
    <div className={classnames(css.flickr_embed, className)}>
      <a data-flickr-embed="true" data-header="true" href={`https://www.flickr.com/photos/jsconfbp/albums/${albumId}`} title={title}>
        <img src={'https://flic.kr/p/2q2bGtH'} width="300" height="300" alt={title} />
      </a>
    </div>
    <Script src="//embedr.flickr.com/assets/client-code.js" />
  </>
)

export default Flickr
