import { CSSProperties } from "react";
import "../global.scss";

import { JetBrains_Mono, Shrikhand } from "next/font/google";

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
  "--text-color": "#878787",
  "--background": "#fff",
} as const;

export type OmitFirstTwoChars<S extends string> = S extends `${infer _}${infer _}${infer Rest}` ? Rest : S;

export type ColorNames = OmitFirstTwoChars<keyof typeof CSSVariableColors>;

export default function App({ Component, pageProps }) {
  return (
    <main className={`${jetbrains_mono.variable} ${shrikhand.variable}`} style={CSSVariableColors as CSSProperties}>
      <Component {...pageProps} />
    </main>
  );
}