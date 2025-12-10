import type { Blog as BlogStoryblok } from "@/.storyblok/types/287474179047807/storyblok-components";
import {
    renderRichText,
    type SbBlokData,
    storyblokEditable,
} from "@storyblok/react/rsc";
import parse from "html-react-parser";

const Blog = ({ blok }: { blok: BlogStoryblok }) => {
	return (
		<section className="container mx-auto px-4 lg:px-0 py-12 lg:py-20">
            <article
				{...storyblokEditable(blok as SbBlokData)}
				className="max-w-4xl mx-auto"
            >
				{/* Header Section */}
				<header className="mb-8 lg:mb-12">
					<h1 className="text-3xl lg:text-5xl font-bold text-[#1a1a2e] mb-4 leading-tight">
						{blok?.title}
					</h1>
					<div className="w-20 h-1 bg-gradient-to-r from-[#227725] to-[#a3f5a6] rounded-full"></div>
				</header>

				{/* Content Section */}
				<div className="prose prose-lg max-w-none">
					<div className="richtext text-[#4b5563] leading-relaxed text-base lg:text-lg">
						{parse(renderRichText(blok?.description) ?? "")}
					</div>
				</div>
            </article>
        </section>
	);
};

export default Blog;
