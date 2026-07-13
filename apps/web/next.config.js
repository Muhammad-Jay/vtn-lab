/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    transpilePackages: ["@repo/ui", "@repo/tailwind-config"]
};

export default nextConfig;
