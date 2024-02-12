/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "tailwindui.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
            },
        ],
    },
    async redirects() {
        return [
            // {
            //     source: "/:path*",
            //     destination: "/",
            //     permanent: true,
            // },
        ];
    },
};

export default nextConfig;
