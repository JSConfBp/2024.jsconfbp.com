import cookiePolicy from './cookie-policy.json'

function CookiePolicy() {
  return (
    <div>
      <>
        <div dangerouslySetInnerHTML={{ __html: cookiePolicy.content }}></div>
      </>
    </div>
  )
}

export default CookiePolicy
