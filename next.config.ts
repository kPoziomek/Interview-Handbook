import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};
const withMDX = createMDX({
  extension: /\.mdx?$/,

  options: {
    remarkPlugins: [remarkGfm],
  },
});

export default withMDX(nextConfig);
