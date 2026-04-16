import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc', // Autorizamos Postimages
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com', // Por si alguna vez usás Drive
      },
      {
        protocol:'https',
        hostname:'placehold.co'
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.hola.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pedix.app',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cepadevinos.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cloudfront-us-east-1.images.arcpublishing.com',
        port: '',
      },{
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
      },
     
    ],
  },
};

export default nextConfig;