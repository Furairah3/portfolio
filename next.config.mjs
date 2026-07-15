/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'opengraph.githubassets.com' },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
  },
};

export default nextConfig;
