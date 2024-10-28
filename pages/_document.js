import { Html, Head, Main, NextScript } from "next/document";
// import { } from "../pages/assets/images/curriculum.png";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* favicon.ico
        <link
          rel="shortcut icon"
          href="../pages/assets/images/curriculum.png"
        /> */}
        {/* <link rel="shortcut icon" href="/curriculum.png" /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
