import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="no">
        <Head>
            <title>Camp Flåm 2022 | Miles</title>
            <meta
                name="description"
                content="Nysgjerrig på hva du skal i helgen? Her finner du hele programmet"
            />
            <link rel="icon" type="image/gif" href={process.env.GH_PAGES === 'true' ? "/camp-flam/favicon.gif" :"/favicon.gif"} sizes="32x32" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
