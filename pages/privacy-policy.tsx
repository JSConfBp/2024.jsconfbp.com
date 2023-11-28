import privacyPolicy from './privacy-policy.json'

function PrivacyPolicy() {
  return (
    <div>
      <>
        <div dangerouslySetInnerHTML={{ __html: privacyPolicy.content }}></div>
      </>
    </div>
  )
}

export default PrivacyPolicy
