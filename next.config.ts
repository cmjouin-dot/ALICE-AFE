import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=86400",
  },
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'none'",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
];

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
        source: "/representants/stephanie-le-vailant-vignancour",
        destination: "/representants/stephanie-le-vaillant-vignancour",
        permanent: true,
      },
      {
        source: "/representants/geoffroy-bunelet",
        destination: "/representants/geoffroy-bunetel",
        permanent: true,
      },
      {
        source: "/representants/frederic-shauli",
        destination: "/representants/frederic-schauli",
        permanent: true,
      },
      {
        source: "/elus/stephanie-le-vailant-vignancour",
        destination: "/representants/stephanie-le-vaillant-vignancour",
        permanent: true,
      },
      {
        source: "/elus/geoffroy-bunelet",
        destination: "/representants/geoffroy-bunetel",
        permanent: true,
      },
      {
        source: "/elus/frederic-shauli",
        destination: "/representants/frederic-schauli",
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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
