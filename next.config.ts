import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.(md|mdx)$/,
});

const nextConfig = withMDX({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"],
});

export default nextConfig;
