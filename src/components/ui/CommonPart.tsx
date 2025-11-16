import type { SbBlokData } from "@storyblok/react/rsc";

interface CommonPartStoryblok extends SbBlokData {
	common_title?: string;
	common_details?: string;
}

export default function CommonPart({ blok }: { blok: CommonPartStoryblok }) {
	return (
		<div className="max-w-[800px] mx-auto">
			<div className="w-full px-4 sm:px-6 lg:px-8 my-10 text-center">
				<h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
					{blok.common_title}
				</h2>
				<p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
					{blok.common_details}
				</p>
			</div>
		</div>
	);
}
