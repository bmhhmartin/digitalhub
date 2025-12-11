import type { SbBlokData } from "@storyblok/react/rsc";

interface CommonPartStoryblok extends SbBlokData {
	common_title?: string;
	common_details?: string;
    common_id?: string;
}

export default function CommonPart({ blok }: { blok: CommonPartStoryblok }) {
	return (
		<div id={blok.common_id} className="max-w-[800px] mx-auto pt-20">
			<div className="w-full px-4 sm:px-6 lg:px-8 my-10 text-center">
				<h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-6" style={{ fontFamily: 'Geograph Test' }}>
					{blok.common_title}
				</h2>
				<p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-normal" style={{ fontFamily: 'Proxima Nova' }}>
					{blok.common_details}
				</p>
			</div>
		</div>
	);
}
