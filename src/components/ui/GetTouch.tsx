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
		<div className="w-full flex justify-center items-center my-20 px-4 lg:px-0" >
			<div className="w-full max-w-[1200px] rounded-[60px] p-12 text-center py-[100px] no-repeat bg-cover bg-center" style={{backgroundImage: 'url(/bg.webp)'}}>
				<h2 className="text-4xl lg:text-5xl font-medium text-white mb-6" style={{ fontFamily: 'Geograph Test' }}>
					{blok.get_title}
				</h2>
				<p className="text-lg lg:text-xl text-white max-w-2xl mx-auto placeholder-amber-100 mb-20 font-normal" style={{ fontFamily: 'Proxima Nova' }}>
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
