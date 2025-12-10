import type { Blog as BlogStoryblok } from "@/.storyblok/types/287474179047807/storyblok-components";
import {
    renderRichText,
    type SbBlokData,
    storyblokEditable,
} from "@storyblok/react/rsc";
import parse from "html-react-parser";

const Blog = ({ blok }: { blok: BlogStoryblok }) => {
	return (
		<section className="container mx-auto px-4 lg:px-0 py-20">
            <div
			{...storyblokEditable(blok as SbBlokData)}
			className="flex flex-col items-center justify-center"
            >
                
                <div className="richtext">
                    {parse(renderRichText(blok?.description) ?? "")}
                </div>
                <h1 className="text-4xl font-bold">{blok?.title}</h1>
            </div>
        </section>
	);
};

export default Blog;
