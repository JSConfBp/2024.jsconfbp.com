import Head from 'next/head'
import styles from './index.module.scss'



const Home = () => {
  return (
    <div className={styles.hello}>
      <Head>
        <title>JSConf Budapest 2024</title>
      </Head>
      <h1>JSConf Budapest <br/> 2024</h1>

      <p>June 27-28 2024, Budapest, Hungary</p>
    </div>
  )
}

export default Home
