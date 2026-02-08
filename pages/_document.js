import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sentient Digital Twin - A dynamic, AI-driven portfolio experience" />
        <meta name="theme-color" content="#0a0d14" />
        
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicon */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%2339ff14'>◆</text></svg>" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Sentient Digital Twin" />
        <meta property="og:description" content="A dynamic, AI-driven portfolio experience" />
        <meta property="og:type" content="website" />
      </Head>
      <body className="mesh-gradient">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
