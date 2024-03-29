import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import { JetBrains_Mono, Shrikhand } from "next/font/google";

import { CSSProperties } from "react";
import "../global.scss";

import Header from "../ui/header";
import { Footer } from "../ui/footer";

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
  "--secondary": "#9e19ef",
  "--text-color": "#000",
  "--light-text": "#686868",
  "--background": "#fff",
  "--light-section": "#f2f2f2",
  "--rounded-box-border-color": "#878787",
  "--table-border": "2px solid #eaeaea",
  "--table-light-bg": "#f2f2f2",
  "--table-bg": "#eaeaea",
  "--table-dark-bg": "#e3e3e3",
  "--table-darkest-bg": "#dddddd",
  "--partner-logo-light": "#fff",
  "--partner-logo-dark": "#000",
} as const;

export type OmitFirstTwoChars<S extends string> =
  S extends `${infer _}${infer _}${infer Rest}` ? Rest : S;

export type ColorNames = OmitFirstTwoChars<keyof typeof CSSVariableColors>;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="jsconf, javascript, jsconfbp, conference, web conference, js conference, budapest, jsconf budapest, diversity, inclusivity, community"
          key="keywords"
        />
        <meta name="theme-color" content="#07bdbd" key="theme-color" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <link
          rel="shortcut icon"
          href="/favicon.ico"
          type="image/x-icon"
        ></link>
      </Head>
      <div
        className={`${jetbrains_mono.variable} ${shrikhand.variable} layout responsive_text`}
        style={CSSVariableColors as CSSProperties}
      >
        <Header />
        <main className="x-container">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
      <GoogleTagManager gtmId="GTM-PHXX3PH5" />
    </>
  );
}
