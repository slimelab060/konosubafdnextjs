/** @type {import('next').NextConfig} */

const withBundleAnalyzer =
  process.env.ANALYZE === 'true' ? require('@next/bundle-analyzer')({ enabled: true }) : (config) => config;

const { withContentlayer } = require('next-contentlayer');

//useEffectが2回実行される場合は、reactStrictModeを無効にしてください。この挙動はReact18の仕様です。
const nextConfig = { reactStrictMode: true, swcMinify: true };

module.exports = withContentlayer(nextConfig);
module.exports = withBundleAnalyzer({});
