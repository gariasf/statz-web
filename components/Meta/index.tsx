import Head from 'next/head'

import config from '../../shared/config'

const Meta = () => (
  <Head>
    <meta name="description" content={config.siteDescription} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={config.siteTitle} />
    <meta name="og:description" property="og:description" content={config.siteDescription} />
    <meta property="og:site_name" content={config.siteTitle} />
    <meta property="og:url" content={config.siteUrl} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={config.siteTitle} />
    <meta name="twitter:description" content={config.siteDescription} />
    <meta name="twitter:site" content={config.siteTwitter} />
    <meta name="twitter:creator" content="@gariasf" />
    <link rel="icon" type="image/png" href="/public/favicon.ico" />
    <link rel="apple-touch-icon" href="/public/favicon.ico" />
  </Head>
)
export default Meta
