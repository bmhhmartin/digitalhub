import type { SbBlokData } from "@storyblok/react/rsc";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import Image from "next/image";

interface ProcessStoryblok extends SbBlokData {
	process_background?: { filename?: string };
	process_title?: string;
	process_details?: string;
	process?: string | SbBlokData[];
	process_section_image?: {
		filename?: string;
		width?: number;
		height?: number;
		alt?: string;
	};
}

export default function Process({ blok }: { blok: ProcessStoryblok }) {
	return (
		<section
			className="group relative w-full bg-[#1caf7c] overflow-hidden"
			style={{
				backgroundImage: blok.process_background?.filename
					? `url(${blok.process_background.filename})`
					: undefined,
				width: "auto",
				height: "auto",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			{/* Green Overlay */}
			<div className="absolute inset-0 bg-[#1caf7c]/90 group-hover:bg-[#151958]/90 z-0 transition-colors duration-300"></div>

			{/* Content Container */}
			<div className="relative z-10 container mx-auto px-4 py-20 lg:py-32" id="whyEcohub">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Side - Text Content */}
					<div className="text-white space-y-8">
						{/* Title */}
						<h2 className="text-5xl lg:text-6xl font-normal leading-tight" style={{ fontFamily: 'Proxima Nova' }}>
							{blok.process_title}
						</h2>

						{/* Main Description */}
						<p className="text-lg lg:text-xl leading-relaxed text-white/95 max-w-2xl font-normal" style={{ fontFamily: 'Proxima Nova' }}>
							{blok.process_details}
						</p>

						{/* Bullet Points */}
						{Array.isArray(blok.process)
							? blok.process.map((item) => (
									<StoryblokServerComponent blok={item} key={item._uid} />
								))
							: blok.process}
					</div>

					{/* Right Side - Logo */}
					{blok.process_section_image?.filename && (
						<div className="flex items-center justify-center lg:justify-end">
							<div className="relative w-full max-w-md lg:max-w-lg">
								<Image
									src={blok.process_section_image.filename}
									width={blok.process_section_image.width || 500}
									height={blok.process_section_image.height || 500}
									alt={
										blok.process_section_image.alt || "Process Section Image"
									}
								></Image>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
