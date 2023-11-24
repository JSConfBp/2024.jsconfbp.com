import privacyPolicy from './privacy-policy.json'
import Layout from '../ui/layout'

const PrivacyPolicy = () => {
  return (
    <div>
      <Layout title="Privacy Policy - JSConf Budapest 2024" pathName="/privacy-policy">
        <div dangerouslySetInnerHTML={{ __html: privacyPolicy.content }}></div>
      </Layout>
    </div>
  )
}

export default PrivacyPolicy
