import { StoryblokServerComponent } from "@storyblok/react/rsc";
import type { Grid as GridStoryblok } from "@/.storyblok/types/287474179047807/storyblok-components";

export default function Grid({ blok }: { blok: GridStoryblok }) {
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pb-16">
				{blok.columns?.map((column) => (
					<StoryblokServerComponent blok={column} key={column._uid} />
				))}
			</div>
		</div>
	);
}
