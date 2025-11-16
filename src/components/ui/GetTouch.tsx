import type { SbBlokData } from "@storyblok/react/rsc";
import Link from "next/link";

interface GetTouchStoryblok extends SbBlokData {
	get_title?: string;
	get_description?: string;
	get_btn_url?: { url?: string };
	get_btn?: string;
}

export default function GetTouch({ blok }: { blok: GetTouchStoryblok }) {
	return (
		<div className="w-full flex justify-center items-center my-20">
			<div className="w-full max-w-[1200px] rounded-[60px] bg-gradient-to-r from-pink-500 to-purple-800 p-12 text-center py-[100px]">
				<h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
					{blok.get_title}
				</h2>
				<p className="text-lg lg:text-xl text-white max-w-2xl mx-auto placeholder-amber-100 mb-20">
					{blok.get_description}
				</p>
				<Link
					href={blok.get_btn_url?.url || "#"}
					className="bg-white text-blue-600 font-bold uppercase px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
				>
					{blok.get_btn}
				</Link>
			</div>
		</div>
	);
}
