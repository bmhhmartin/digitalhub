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
    tab_menu?: string; 
}

export default function PrimaryTabpanel({ blok }: { blok: PrimaryTabpanelStoryblok }) {
    const tabData: TabContentBlock[] = (blok.primary_tabpanel || []) as TabContentBlock[];
    
    const [activeTabUid, setActiveTabUid] = useState(tabData[0]?._uid || null);
    const activeTabData = tabData.find(step => step._uid === activeTabUid);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            
            <p className="text-xl text-gray-700 mb-8 max-w-4xl">
                Leverage secure, proven digital solutions like IAM, SSO, and our data exchange 
                platform to streamline processes and focus on what truly matters.
            </p>

            <div className="flex flex-col lg:flex-row gap-12">
                
                {/* Left Sidebar Navigation (Menu) */}
                <div className="lg:w-1/4 shrink-0 border-r border-gray-200 lg:pr-8">
                    {tabData.map((step) => {
                        const tabMenuTitle = step.tab_menu || "Tab Item";
                        const isActive = step._uid === activeTabUid;

                        return (
                            <button
                                key={step._uid}
                                onClick={() => setActiveTabUid(step._uid)}
                                className={`
                                    block text-left py-2 mb-2 text-lg font-semibold transition-colors duration-200
                                    ${isActive
                                        ? "text-[#1a1a2e] border-l-4 border-[#1a1a2e] pl-4"
                                        : "text-gray-500 hover:text-gray-800 border-l-4 border-transparent pl-4"
                                    }
                                `}
                            >
                                {tabMenuTitle}
                            </button>
                        );
                    })}
                </div>

                {/* Right Content Area (Renders the active TabPanelStep) */}
                <div className="lg:w-3/4 flex-grow">
                    {activeTabData && (
                        <div className="grid grid-cols-2">
                            <DynamicStoryblokServerComponent blok={activeTabData} key={activeTabData._uid} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}