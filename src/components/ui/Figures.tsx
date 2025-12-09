import type { SbBlokData } from "@storyblok/react/rsc";

interface FiguresStoryblok extends SbBlokData {
	figure_number?: string;
	figure_details?: string;
}

export default function Figures({ blok }: { blok: FiguresStoryblok }) {
	return (
		<div className="bg-white rounded-lg p-6 shadow-md max-w-2xl border border-gray-200">
			<div className="flex gap-6">
				{/* Content */}
				<div className="flex-1 flex flex-col">
					{/* Title */}
					<h3 className="text-xl font-bold text-[#1a1a2e] mb-4 leading-tight">
						{blok.figure_number}
					</h3>

					{/* Description */}
					<p className="text-[#6b7280] text-sm leading-relaxed mb-6 flex-1">
						{blok.figure_details}
					</p>
				</div>
			</div>
		</div>
	);
}
