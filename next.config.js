 /** @type {import('next').NextConfig} */
 const nextConfig = {
  reactStrictMode: true,
   swcMinify: true,
 }

module.exports = nextConfig



// /** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production";

// module.exports = {
//   /**
//    * Tell Next.js where the `public` folder is.
//    * Replace `nextjs-github-pages` with your Github repo project name.
//    */
//   assetPrefix: isProd ? "/nextjs-github-pages/" : "",
//   /**
//    * Disable server-based image optimization.
//    *
//    * @see https://nextjs.org/blog/next-12-3#disable-image-optimization-stable
//    */
//   images: {
//     unoptimized: true,
//   },
// };

// next.config.js
// const isProd = process.env.NODE_ENV === 'production'

// module.exports = {
//   assetPrefix: isProd ? '/your-github-repo-name/' : '',
//   images: {
//     unoptimized: true,
//   },
// }