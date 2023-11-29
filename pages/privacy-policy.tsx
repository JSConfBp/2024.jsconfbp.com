import SocialShare from '../ui/social-share'
import privacyPolicy from './privacy-policy.json'

function PrivacyPolicy() {
  return (
    <div>
      <SocialShare
        title="Privacy Policy"
      />
      <>
        <div dangerouslySetInnerHTML={{ __html: privacyPolicy.content }}></div>
      </>
    </div>
  )
}

export default PrivacyPolicy
