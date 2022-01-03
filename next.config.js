const withImages = require("next-images");

/** @type {import('next').NextConfig} */
module.exports = {
  ...withImages(),
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/install.sh",
        destination:
          "https://raw.githubusercontent.com/three-em/3em/main/tools/release/install.sh"
      },
      {
        source: "/install.ps1",
        destination:
          "https://raw.githubusercontent.com/three-em/3em/main/tools/release/install.ps1"
      }
    ];
  }
};
