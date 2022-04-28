/** @type {import('next').NextConfig} */

const ghPagesSettings =
  process.env.GH_PAGES === 'true'
    ? {
        basePath: '/camp-flam',
        assetPrefix: '/camp-flam/',
      }
    : {}

const buildTime = new Date().toLocaleString('no', {
    timeZone: 'Europe/Oslo',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
});


module.exports = {
  reactStrictMode: true,
    env: {
      BUILD_TIME: buildTime,
    },
  ...ghPagesSettings,
}
