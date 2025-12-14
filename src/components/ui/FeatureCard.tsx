// NO 'use client'; directive here

import type { SbBlokData } from "@storyblok/react/rsc";
import Image from "next/image";

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
            
            {blok.icon_image?.filename && (
                <div className="mb-4">
                    <Image
                        src={blok.icon_image.filename}
                        width={48} 
                        height={48}
                        alt={blok.icon_image.alt || blok.card_title || "Feature Icon"}
                        className="object-contain"
                    />
                </div>
            )}

            {blok.card_title && (
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3 leading-snug">
                    {blok.card_title}
                </h3>
            )}

            {blok.card_details && (
                <div className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                    {blok.card_details}
                </div>
            )}

            {(blok.link_url || blok.link_text) && (
                <a
                    href={blok.link_url || "#"}
                    className="text-[#007bff] font-semibold flex items-center mt-auto hover:text-[#0056b3] transition-colors"
                >
                    {linkText}
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            )}
        </div>
    );
}