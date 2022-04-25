/** @type {import('next').NextConfig} */

const ghPagesSettings =
  process.env.GH_PAGES === 'true'
    ? {
        basePath: '/camp-flam',
        assetPrefix: '/camp-flam/',
      }
    : {}

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['no'],
    defaultLocale: 'no',
  },
  ...ghPagesSettings,
}
