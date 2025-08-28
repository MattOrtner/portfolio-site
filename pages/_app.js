import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio | Software Engineer &amp; Full-Stack Developer</title>
        <meta
          name="description"
          content="Full-stack developer specializing in MVPs, web development, and software engineering."
        />
        <meta
          name="keywords"
          content="software development, software engineer, MVP, full-stack developer, web development, React, Next.js, Tailwind CSS, portfolio, postgres, postgreSQL"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Portfolio | Software Engineer &amp; Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Full-stack developer specializing in MVPs, web development, and software engineering."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mattheworter.com" />
        <meta property="og:image" content="/PortfolioPhoto.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Portfolio | Software Engineer &amp; Full-Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Full-stack developer specializing in MVPs, web development, and software engineering."
        />
        <meta name="twitter:image" content="/PortfolioPhoto.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
