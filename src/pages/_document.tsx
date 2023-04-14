import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <title>Speedy Tune Ups - Mobile Fleet Services </title>
      <Head>
        <meta
          name="description"
          content="Speedy Tune-ups is your go-to source for fast, reliable, and professional automotive services. We specialize in tune-ups, oil changes, brake services, and more, ensuring your vehicle stays in peak condition. Visit us today for a superior car care experience!"
        />
        <meta
          name="keywords"
          content="speedy tune-ups, automotive services, car maintenance, car repair, tune-ups, oil changes, brake services, vehicle maintenance, auto care"
        />
     <link rel="icon" href="/Svgs/SpeedyIcon.svg" />
   </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
