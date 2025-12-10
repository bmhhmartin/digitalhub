import type { SbBlokData } from "@storyblok/react/rsc";
import Image from "next/image";

interface PartnerStoryblok extends SbBlokData {
	partner_logo?: { filename?: string; alt?: string };
	partner_title?: string;
	partner_description?: string;
	partner_image?: {
		filename?: string;
		width?: number;
		height?: number;
		alt?: string;
	};
}

export default function Partner({ blok }: { blok?: PartnerStoryblok }) {
	// Default content if no blok is provided
	const logo = blok?.partner_logo?.filename;
	const title = blok?.partner_title || "IG B2B for Insurers + Brokers";
	const description =
		blok?.partner_description ||
		"The association IG B2B for Insurers + Brokers has been committed for many years to advocating the interests of insurers, brokers, and service providers in the digital design of business processes. IG B2B plays a key role in developing industry-wide standards for electronic data exchange. As a neutral and non-profit organisation, IG B2B holds a 30% stake and is one of the main shareholders of EcoHub AG.";
	const partnerImage = blok?.partner_image?.filename;

	return (
		<section className="w-full bg-white">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Section - Text Content */}
					<div className="space-y-6">
						{/* Logo */}
						{logo && (
							<div className="mb-6">
								<Image
									src={logo}
									alt={blok?.partner_logo?.alt || "IG B2B Logo"}
									width={100}
									height={100}
									className="object-contain"
								/>
							</div>
						)}

						{/* Title */}
						<h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
							{title}
						</h2>

						{/* Description */}
						<p className="text-base lg:text-lg text-black leading-relaxed max-w-2xl">
							{description}
						</p>
					</div>

					{/* Right Section - Partners Image */}
					{partnerImage && (
						<div className="flex items-center justify-center lg:justify-end">
							<div className="relative w-full max-w-2xl">
								<Image
									src={partnerImage}
									width={blok?.partner_image?.width || 800}
									height={blok?.partner_image?.height || 600}
									alt={blok?.partner_image?.alt || "Partner Companies"}
									className="object-contain"
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
