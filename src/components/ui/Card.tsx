import type { SbBlokData } from "@storyblok/react/rsc";
import Image from "next/image";

interface CardStoryblok extends SbBlokData {
	card_image?: { filename?: string; alt?: string };
	card_title?: string;
	card_description?: string;
	card_btn_url?: { url?: string };
	card_btn?: string;
}

export default function Card({ blok }: { blok: CardStoryblok }) {
	return (
		<div className="bg-white rounded-lg p-6 shadow-md max-w-2xl border border-gray-200">
			<div className="flex gap-6">
				{/* Image */}
				<div className="shrink-0">
					{blok.card_image?.filename && (
						<Image
							src={blok.card_image.filename}
							width={64}
							height={64}
							alt={blok.card_title || "Card Image"}
						/>
					)}
				</div>

				{/* Content */}
				<div className="flex-1 flex flex-col">
					{/* Title */}
					<h3 className="text-xl font-bold text-[#1a1a2e] mb-4 leading-tight">
						{blok.card_title}
					</h3>

					{/* Description */}
					<p className="text-[#6b7280] text-sm leading-relaxed mb-6 flex-1">
						{blok.card_description}
					</p>

					{/* Button */}
					{blok.card_btn && (
						<div className="flex justify-end">
							<a
								href={blok.card_btn_url?.url || "#"}
								className="text-[#1a1a2e] font-bold text-sm hover:underline"
							>
								{blok.card_btn}
							</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
