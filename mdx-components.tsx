import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { CodeBlock } from "@/components/mdx/code-block";
import { Solution } from "@/components/mdx/solution";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
			<h1 className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight">
				{props.children}
			</h1>
		),
		h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
			<h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
				{props.children}
			</h2>
		),
		h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
			<h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
				{props.children}
			</h3>
		),
		p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
			<p className="leading-7 [&:not(:first-child)]:mt-6">{props.children}</p>
		),
		ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
			<ul className="my-6 ml-6 list-disc [&>li]:mt-2">{props.children}</ul>
		),
		ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
			<ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{props.children}</ol>
		),
		img: (props) => (
			<Image
				sizes="100vw"
				style={{ width: "100%", height: "auto" }}
				{...(props as ImageProps)}
			/>
		),
		code: (props: React.HTMLAttributes<HTMLElement>) => <CodeBlock {...props} />,
		Solutions: Solution,
		...components,
	};
}
