import Head from "next/head"

import { useRouter } from 'next/router'


type SocialShareProps = {
  title?: string;
  description?: string;
  socialShareImage?: string;
}

function SocialShare({
  title,
  description,
  socialShareImage
}: SocialShareProps) {

  const router = useRouter()
  const metaDescription = description ?? 'JSConf Budapest 2024, June 26-28, Budapest, Hungary. Tickets from €450, including free workshops, inclusive catering and barista coffee!';
  const socialImgAbsoluteUrl = `https://jsconfbp.com/${ socialShareImage ?? 'social-share.png' }`
  const titleSuffix = "26-28 June, JSConfBP 2024"
  const currentPageTitle = title ? `${title} | ${titleSuffix}` : titleSuffix;
  const url = `https://jsconfbp.com${router.asPath}`;

  return (
    <Head>
      <title>{currentPageTitle}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={metaDescription} key="description" />
      <meta property="og:title" content={currentPageTitle} key="og:title" />
      <meta property="og:description" content={metaDescription} key="og:description" />
      <meta property="og:image" content={socialImgAbsoluteUrl} key="og:image" />
      <meta property="og:image:alt" content="JSConf Budapest June 26-28, 2024 logo" key="og:image:alt" />
      <meta property="og:url" content={url} key="og:url" />
      <meta name="twitter:title" content={currentPageTitle} key="twitter:title" />
      <meta name="twitter:description" content={metaDescription} key="twitter:description" />
      <meta name="twitter:image" content={socialImgAbsoluteUrl} key="twitter:image" />
      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta name="twitter:site" content="@jsconfbp" key="twitter:site" />
      <meta name="twitter:creator" content="@_gregnagy" key="twitter:creator" />
      <meta property="twitter:image:alt" content="JSConf Budapest June 26-28, 2024 logo" key="twitter:image:alt" />
    </Head>
  )
}

export default SocialShare
