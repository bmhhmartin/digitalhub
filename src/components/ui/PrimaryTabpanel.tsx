"use client";

import type { PrimaryTabpanel as PrimaryTabpanelStoryblok } from "@/.storyblok/types/287474179047807/storyblok-components";
import type { SbBlokData } from "@storyblok/react/rsc";
import dynamic from 'next/dynamic';
import { useState } from "react";

const DynamicStoryblokServerComponent = dynamic(
    () => import('@storyblok/react/rsc').then(mod => mod.StoryblokServerComponent), 
    { ssr: false } 
);

interface TabContentBlock extends SbBlokData {
    tab_title_input?: string;
}

export default function PrimaryTabpanel({ blok }: { blok: PrimaryTabpanelStoryblok }) {
    const tabData: TabContentBlock[] = (blok.primary_tabpanel || []) as TabContentBlock[];
    const [activeTabUid, setActiveTabUid] = useState(tabData[0]?._uid || null);

    const activeTabData = tabData.find(step => step._uid === activeTabUid);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

            <div className="flex flex-col lg:flex-row gap-5">
                
                {/* Left Sidebar Navigation (Menu) */}
                <div className="lg:w-1/5 shrink-0 border-r border-gray-200 lg:pr-2">
                    {tabData.map((step) => {
                        const tabMenuTitle = 
                            step.tab_title_input || "Tab Item Title Missing"; 

                        const isActive = step._uid === activeTabUid;

                        return (
                            <button
                                key={step._uid}
                                onClick={() => setActiveTabUid(step._uid)}
                                className={`
                                    block text-left py-2 mb-2 text-lg font-semibold transition-colors duration-200 cursor-pointer
                                    ${isActive
                                        ? "text-[#2c72db]"
                                        : "text-gray-500 hover:text-gray-800"
                                    }
                                `}
                            >
                                {tabMenuTitle}
                            </button>
                        );
                    })}
                </div>

                {/* Right Content Area (Renders the active TabPanelStep) */}
                <div className="lg:w-4/5 flex-grow">
                    {activeTabData && (
                        <DynamicStoryblokServerComponent blok={activeTabData} key={activeTabData._uid} />
                    )}
                </div>
            </div>
        </div>
    );
}