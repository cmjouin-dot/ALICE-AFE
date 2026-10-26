import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/convictions",
        destination: "/notre-groupe",
        permanent: true,
      },
      {
        source: "/engagements",
        destination: "/notre-groupe",
        permanent: true,
      },
      {
        source: "/qui-sommes-nous",
        destination: "/notre-groupe",
        permanent: true,
      },
      {
        source: "/elus",
        destination: "/representants",
        permanent: true,
      },
      {
        source: "/elus/:slug",
        destination: "/representants/:slug",
        permanent: true,
      },
      {
        source: "/actions",
        destination: "/priorites",
        permanent: true,
      },
      {
        source: "/actualites",
        destination: "/",
        permanent: true,
      },
      {
        source: "/actualites/:slug",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
