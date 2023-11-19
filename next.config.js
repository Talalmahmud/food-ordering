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
    ],
  },
  env: {
    MONGO_URL:
      "mongodb+srv://mahmudtalal2:Osthir.2024@cluster0.mhqlp9e.mongodb.net/?retryWrites=true&w=majority",
    NEXTAUTH_URL: "http://localhost:3000/",
    SECRET: "talalmahmud",
    GOOGLE_CLIENT_ID:
      "344803160981-jsltvfrbs7ommpb01ua7mhblgn7q3fvl.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },
};

module.exports = nextConfig;
