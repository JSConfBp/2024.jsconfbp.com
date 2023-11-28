import Head from 'next/head'
import { JetBrains_Mono, Shrikhand } from "next/font/google";

import { CSSProperties } from "react";
import "../global.scss";

import Header from '../ui/header'
import { Footer } from '../ui/footer'


const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin-ext"],
  fallback: ["monospace"],
  variable: "--font-jetbrains-mono",
});

const shrikhand = Shrikhand({
  subsets: ["latin-ext"],
  weight: "400",
  variable: "--font-shrikhand",
});

export const CSSVariableColors = {
  "--primary": "#07bdbd",
  "--primary-dark": "#05747b",
  "--secondary": "#9e19ef",
  "--secondary-dark": "#6a0ca4",
  "--text-color": "#000",
  "--background": "#fff",
  "--light-section": "#f2f2f2",
  "--border-color": "#878787",
} as const;

export type OmitFirstTwoChars<S extends string> = S extends `${infer _}${infer _}${infer Rest}` ? Rest : S;

export type ColorNames = OmitFirstTwoChars<keyof typeof CSSVariableColors>;

export default function App({ Component, pageProps }) {
  const currentPageTitle = typeof window !== "undefined" ?
    window.location.pathname.substring(1)  // Removing the leading '/'
      .split('-')  // Splitting by dashes
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalizing the first letter of each word
      .join(' ')
    : "";
  const titleSuffix = "26-28 June, JSConfBP 2024"
  const title = currentPageTitle ? `${currentPageTitle} | ${titleSuffix}` : titleSuffix;

  const url = `https://jsconfbp.com${typeof window !== "undefined" ? window.location.pathname : "/"}`;
  const description = 'JSConf Budapest 2024, June 26-28, Budapest, Hungary. Tickets from €450, including free workshops, inclusive catering and barista coffee!';
  const socialImgAbsoluteUrl = 'https://jsconfbp.com/social-share.png';

  return (
    <div className={`${jetbrains_mono.variable} ${shrikhand.variable} layout`} style={CSSVariableColors as CSSProperties}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="description" />
        <meta name="theme-color" content="#07bdbd" key="theme-color" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:description" content={description} key="og:description" />
        <meta property="og:url" content={url} key="og:url" />
        <meta property="og:image" content={socialImgAbsoluteUrl} key="og:image" />
        <meta property="og:image:alt" content="JSConf Budapest June 26-28, 2024 logo" key="og:image:alt" />
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:site" content="@jsconfbp" key="twitter:site" />
        <meta name="twitter:creator" content="@_gregnagy" key="twitter:creator" />
        <meta name="twitter:title" content={title} key="twitter:title" />
        <meta name="twitter:description" content={description} key="twitter:description" />
        <meta name="twitter:image" content={socialImgAbsoluteUrl} key="twitter:image" />
        <meta property="twitter:image:alt" content="JSConf Budapest June 26-28, 2024 logo" key="twitter:image:alt" />
      </Head>

      <Header />

      <main className="main">
        <Component {...pageProps} />
      </main>

      <Footer />

    </div>
  );
}