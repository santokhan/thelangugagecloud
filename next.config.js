/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thelanguagecloud-edu.com",
      },
    ],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/contact": { page: "/contact" },
      "/courses": { page: "/courses" },
      "/language-camps": { page: "/language-camps" },
      "/language-clubs": { page: "/language-clubs" },
      "/pricing": { page: "/pricing" },
      "/gallary": { page: "/gallary" },
      "/faq": { page: "/faq" },
    };
  },
};
