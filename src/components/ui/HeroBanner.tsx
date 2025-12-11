import type { SbBlokData } from "@storyblok/react/rsc";
import Image from "next/image";
import Link from "next/link";

interface HeroBannerStoryblok extends SbBlokData {
	hero_title?: string;
	hero_details?: string;
	hero_image?: { filename?: string; alt?: string };
}

export default function HeroBanner({ blok }: { blok: HeroBannerStoryblok }) {
	return (
		<section className="hero-banner bg-[#151958] relative min-h-screen flex items-center overflow-hidden">
			{/* Circuit Board Background Pattern */}
			<div className="absolute inset-0 circuit-pattern opacity-20"></div>

			{/* Main Content Container */}
			<div className="container mx-auto px-4 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Section - Text Content */}
					<div className="text-left">
                        <h1
                            className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white"
                            style={{ fontFamily: 'Geograph Test' }}
                            >
							<span className="text-pink-500">{blok.hero_title} </span>
						</h1>
						<p className="text-lg lg:text-xl text-white leading-relaxed max-w-2xl font-normal" style={{ fontFamily: 'Proxima Nova' }}>
							{blok.hero_details}
						</p>
                        <div className="pt-10 flex items-center gap-4">
                            <Link href="#offers" className="text-white text-[16px] font-bold flex flex-col justify-center text-center">
                                <span className="text-[16px] font-semibold" style={{ fontFamily: 'Geograph Test' }}>
                                    Why Ecohub Offer
                                </span>
                                <span className="text-lg sm:text-xl font-bold">
                                    ⌄
                                </span>
                            </Link>
                            <Link href="#whyEcohub" className="text-white text-[16px] font-bold flex flex-col justify-center text-center">
                                <span className="text-[16px] font-semibold" style={{ fontFamily: 'Geograph Test' }}>
                                    Why EcoHub
                                </span>
                                <span className="text-lg sm:text-xl font-bold">
                                    ⌄
                                </span>
                            </Link>
                            <Link href="#behindEcohub" className="text-white text-[16px] font-bold flex flex-col justify-center text-center">
                                <span className="text-[16px] font-semibold" style={{ fontFamily: 'Geograph Test' }}>
                                    Who's Behind EcoHub
                                </span>
                                <span className="text-lg sm:text-xl font-bold">
                                    ⌄
                                </span>
                            </Link>
                        </div>
					</div>

					{/* Right Section - 3D Network Graphic */}
					<div className="flex justify-center lg:justify-end">
						<div className="relative w-full max-w-lg">
							{blok.hero_image?.filename && (
								<Image
									src={blok.hero_image.filename}
									alt={blok.hero_image.alt || "Hero image"}
									width={600}
									height={400}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
