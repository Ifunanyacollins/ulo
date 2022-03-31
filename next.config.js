const withAntdLess = require("next-plugin-antd-less");
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

module.exports = withAntdLess({
  lessVarsFilePath: "./styles/variables.less", // optional
  lessVarsFilePathAppendToEndOfContent: false, // optional
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // for Next.js ONLY
  nextjs: {
    localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
  },

  // Other Config Here...

  // Other Config Here...
  ...nextConfig,
  webpack(config) {
    return config;
  },
});
