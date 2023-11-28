/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.freeiconspng.com",
      },
      {
        hostname: "i0.wp.com",
      },
      {
        hostname: "banner2.cleanpng.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
      { hostname: "res.cloudinary.com" },
      { hostname: "placekitten.com" },
    ],
  },
};

module.exports = nextConfig;
