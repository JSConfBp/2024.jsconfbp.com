import "../global.scss";

import { JetBrains_Mono, Shrikhand } from "next/font/google";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin-ext"],
  fallback: "monospace",
  variable: "--font-jetbrains-mono",
});

const shrikhand = Shrikhand({
  subsets: ["latin-ext"],
  weight: "400",
  variable: "--font-shrikhand",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${jetbrains_mono.variable} ${shrikhand.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
