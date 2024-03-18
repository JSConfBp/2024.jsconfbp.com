import SocialShare from "../ui/social-share";
import cookiePolicy from "./cookie-policy.json";

function CookiePolicy() {
  return (
    <div>
      <SocialShare title="Cookie Policy" />
      <>
        <div dangerouslySetInnerHTML={{ __html: cookiePolicy.content }}></div>
      </>
    </div>
  );
}

export default CookiePolicy;
