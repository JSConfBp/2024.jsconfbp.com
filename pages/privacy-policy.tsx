import Head from 'next/head'
import styles from './index.module.scss'
import privacyPolicy from './privacy-policy.json'

const PrivacyPolicy = () => {
  return (
    <div className={styles.text}>
      <Head>
        <title>Privacy Policy - JSConf Budapest 2024</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: privacyPolicy.content }}></div>
    </div>
  )
}

export default PrivacyPolicy
