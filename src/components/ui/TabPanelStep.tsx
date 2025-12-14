"use client"; 

import type { SbBlokData } from "@storyblok/react/rsc";
import dynamic from 'next/dynamic';

const DynamicStoryblokServerComponent = dynamic(
    () => import('@storyblok/react/rsc').then((mod) => mod.StoryblokServerComponent), 
    { ssr: false } 
);

interface TabPanelStepStoryblok extends SbBlokData {
    content_blocks?: SbBlokData[];
}

export default function TabPanelStep({ blok }: { blok: TabPanelStepStoryblok }) {
    if (!blok) {
        return null;
    }

    // DEBUGGING MESSAGE: This will disappear when data is present
    if (!blok.content_blocks || blok.content_blocks.length === 0) {
        return <p className="text-red-500">No content blocks found for this tab. Please check 'content_blocks' field in Storyblok.</p>;
    }


    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blok.content_blocks.map((contentBlok) => (
                    <DynamicStoryblokServerComponent 
                        blok={contentBlok} 
                        key={contentBlok._uid} 
                    />
                ))}
            </div>
        </div>
    );
}