// NO 'use client'; directive here

import type { SbBlokData } from "@storyblok/react/rsc";
import Image from "next/image";
import Link from "next/link";

interface FeatureCardStoryblok extends SbBlokData {
    icon_image?: { filename?: string; alt?: string }; 
    card_title?: string;
    card_details?: string;
    link_text?: string;
    link_url?: string;
}

export default function FeatureCard({ blok }: { blok: FeatureCardStoryblok }) {
    if (!blok) {
        return null;
    }

    const linkText = blok.link_text || "View Details";

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col transition duration-300 hover:shadow-xl">
            
            <div className="flex gap-5">
                <div className="min-w-[72px] min-h-[72px]">
                    {blok.icon_image?.filename && (
                        <div className="mb-4">
                            <Image
                                src={blok.icon_image.filename}
                                width={72} 
                                height={72}
                                alt={blok.icon_image.alt || blok.card_title || "Feature Icon"}
                                className="object-contain"
                            />
                        </div>
                    )}
                </div>

                <div>
                    {blok.card_title && (
                        <h3 className="text-[18px] leading-5 font-bold text-[#1a1a2e] mb-3" style={{ fontFamily: 'Proxima Nova' }}>
                            {blok.card_title}
                        </h3>
                    )}

                    {blok.card_details && (
                        <div className="text-[#73759b] text-[16px] leading-5 mb-6 flex-grow" style={{ fontFamily: 'Proxima Nova' }}>
                            {blok.card_details}
                        </div>
                    )}
                    {(blok.link_url || blok.link_text) && (
                        <Link
                            href={blok.link_url || "#"}
                            className="text-[#151958] font-semibold flex items-center justify-end mt-auto hover:text-[#151958] transition-colors text-[16px]"
                        >
                            {linkText}
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}