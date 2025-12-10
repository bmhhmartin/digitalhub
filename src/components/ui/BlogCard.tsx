import type { SbBlokData } from "@storyblok/react/rsc";
import {
    renderRichText
} from "@storyblok/react/rsc";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

interface CardStoryblok extends SbBlokData {
	blog_card_image?: { filename?: string; alt?: string };
	blog_card_title?: string;
	blog_card_url?: { url?: string };
	blog_card_btn_text?: string;
}

export default function Card({ blok }: { blok: CardStoryblok }) {
	return (
		<div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
			{/* Image */}
			{blok.blog_card_image?.filename && (
				<div className="w-full h-48 relative">
					<Image
						src={blok.blog_card_image.filename}
						fill
						className="object-cover"
						alt={blok.blog_card_image.alt || blok.blog_card_title || "Card Image"}
					/>
				</div>
			)}

			{/* Content */}
			<div className="p-6 flex flex-col">
				{/* Title */}
				{blok.blog_card_title && (
					<h3 className="text-xl font-bold text-[#1a1a2e] mb-3 leading-tight">
						{blok.blog_card_title}
					</h3>
				)}

				{/* Description */}
				<div className="prose prose-lg max-w-none">
					<div className="richtext text-[#4b5563] leading-relaxed text-base lg:text-lg">
						{parse(renderRichText(blok?.blog_card_description) ?? "")}
					</div>
				</div>

				{/* Button */}
				{blok.blog_card_btn_text && (
					<Link
						href={`blog/${blok.blog_card_url?.url || ""}`}
						aria-label={`${blok.blog_card_btn_text || "Read More"} ${blok.blog_card_title || ""} - full blog post`}
						className="text-[#1a1a2e] font-bold text-sm hover:underline inline-block"
					>
						{blok.blog_card_btn_text}
					</Link>
				)}
			</div>
		</div>
	);
}
