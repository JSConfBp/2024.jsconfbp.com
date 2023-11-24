import cookiePolicy from './cookie-policy.json'
import Layout from '../ui/layout'

const CookiePolicy = () => {
  return (
    <div>
      <Layout title="Cookie Policy - JSConf Budapest 2024" pathName="/cookie-policy">
        <div dangerouslySetInnerHTML={{ __html: cookiePolicy.content }}></div>
      </Layout>
    </div>
  )
}

export default CookiePolicy
