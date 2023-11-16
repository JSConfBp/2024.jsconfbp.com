import Head from 'next/head'
import styles from './index.module.scss'
import cookiePolicy from './cookie-policy.json'

const CookiePolicy = () => {
  return (
    <div className={styles.text}>
      <Head>
        <title>Cookie Policy - JSConf Budapest 2024</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: cookiePolicy.content }}></div>
    </div>
  )
}

export default CookiePolicy
