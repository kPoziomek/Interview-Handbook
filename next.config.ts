import { withGTConfig } from "gt-next/config";
import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	/* config options here */
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};
const withMDX = createMDX({
	extension: /\.mdx?$/,

	options: {
		remarkPlugins: [remarkGfm],
	},
});

export default withGTConfig(withNextIntl(withMDX(nextConfig)), {});
