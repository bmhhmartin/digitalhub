"use client"; 

import type { SbBlokData } from "@storyblok/react/rsc";
import dynamic from 'next/dynamic';

const DynamicStoryblokServerComponent = dynamic(
    () => import('@storyblok/react/rsc').then((mod) => mod.StoryblokServerComponent), 
    { ssr: false } 
);

interface TabPanelStepStoryblok extends SbBlokData {
    // Corrected interface field name: The blocks array is named 'tab_step'
    tab_step?: SbBlokData[]; 
    tab_title_input?: string; 
}

export default function TabPanelStep({ blok }: { blok: TabPanelStepStoryblok }) {
    if (!blok) {
        return null;
    }

    // Accessing the content from the correct 'tab_step' field
    const contentBlocks = blok.tab_step; 

    // Diagnostic check: This will disappear when data is present
    if (!contentBlocks || contentBlocks.length === 0) {
        return (
            <p className="text-red-500">
                No content blocks found for this tab. Please check the **'tab_step'** field in Storyblok and ensure it contains your FeatureCard components.
            </p>
        );
    }

    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Rendering the content found in the tab_step array */}
                {contentBlocks.map((contentBlok) => (
                    <DynamicStoryblokServerComponent 
                        blok={contentBlok} 
                        key={contentBlok._uid} 
                    />
                ))}
            </div>
        </div>
    );
}