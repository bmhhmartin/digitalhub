import type { Section as SectionStoryblok } from "@/.storyblok/types/287474179047807/storyblok-components";
import {
    renderRichText,
    type SbBlokData,
    storyblokEditable,
} from "@storyblok/react/rsc";
import parse from "html-react-parser";

const Section = ({ blok }: { blok: SectionStoryblok }) => {
	return (
		<section
			{...storyblokEditable(blok as SbBlokData)}
			className="flex flex-col items-center py-20 px-4 lg:px-0"
		>
			<div className="container">
                <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight mb-6">{blok?.title}</h2>
                <div className="w-full">
                    <div className="richtext mt-10">
                        {parse(renderRichText(blok?.description) ?? "")}
                    </div>
                    {blok?.action_btn_link?.url && (
                        <div className="">
                            <a
                                className=""
                                href={blok?.action_btn_link?.url}
                                target={blok?.action_btn_link?.target ?? "_self"}
                            >
                                <span className="">{blok?.action_btn_text}</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
		</section>
	);
};

export default Section;
