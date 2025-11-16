module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/error.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/[lang]/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/metadata.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateStoryblokMetadata",
    ()=>generateStoryblokMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetchers$2f$storyblok$2d$fetcher$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetchers/storyblok-fetcher.ts [app-rsc] (ecmascript)");
;
async function generateStoryblokMetadata({ slug, lang }) {
    const envPrefix = process.env.CURRENT_ENV || "dev";
    const story = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetchers$2f$storyblok$2d$fetcher$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStory"])(envPrefix, slug, lang);
    if (!story?.content) {
        // Return default metadata if story not found
        return {
            title: "DigitalHub",
            description: ""
        };
    }
    const seoData = story.content.seo_metadata;
    const robots = story?.content?.robots?.[0];
    const isProdDomain = process.env.ENV === "PRODUCTION" || process.env.NEXT_PUBLIC_ENV === "PRODUCTION";
    const baseMetadata = {
        title: seoData?.title ?? "DigitalHub",
        description: seoData?.description ?? "",
        openGraph: {
            title: seoData?.og_title ?? "",
            description: seoData?.og_description ?? "",
            images: seoData?.og_image ? [
                seoData.og_image
            ] : []
        },
        twitter: {
            title: seoData?.twitter_title ?? "",
            description: seoData?.twitter_description ?? "",
            images: seoData?.twitter_image ? [
                seoData.twitter_image
            ] : []
        },
        robots: {
            index: robots?.index ?? false,
            follow: robots?.follow ?? false
        }
    };
    // Add alternates for production domain
    if (isProdDomain) {
        baseMetadata.alternates = {
            canonical: `https://DigitalHub.ch/${lang}/${slug.toLowerCase()}`,
            languages: {
                en: `https://DigitalHub.ch/en/${slug.toLowerCase()}`,
                de: `https://DigitalHub.ch/de/${slug.toLowerCase()}`
            }
        };
    }
    return baseMetadata;
}
}),
"[project]/src/app/[lang]/[[...slug]]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$storyblok$2b$react$40$4$2e$7$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$re_3f007cae82df8cb4280f1ccf611aa4d3$2f$node_modules$2f40$storyblok$2f$react$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@storyblok+react@4.7.0_next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__re_3f007cae82df8cb4280f1ccf611aa4d3/node_modules/@storyblok/react/dist/rsc.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$storyblok$2b$react$40$4$2e$7$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$re_3f007cae82df8cb4280f1ccf611aa4d3$2f$node_modules$2f40$storyblok$2f$react$2f$dist$2f$story$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__StoryblokStory$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@storyblok+react@4.7.0_next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__re_3f007cae82df8cb4280f1ccf611aa4d3/node_modules/@storyblok/react/dist/story.mjs [app-rsc] (ecmascript) <export default as StoryblokStory>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$_c2efd69d64dc8ff914a47db05e67ae8c$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$RequestLocaleCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__setCachedRequestLocale__as__setRequestLocale$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.1_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19._c2efd69d64dc8ff914a47db05e67ae8c/node_modules/next-intl/dist/esm/development/server/react-server/RequestLocaleCache.js [app-rsc] (ecmascript) <export setCachedRequestLocale as setRequestLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetchers$2f$storyblok$2d$fetcher$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetchers/storyblok-fetcher.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/metadata.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function generateMetadata({ params }) {
    const { lang, slug } = await params;
    const finalSlug = slug ? slug?.join("/").toString() : "start"; //here "start" is the root slug
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateStoryblokMetadata"])({
        slug: finalSlug,
        lang
    });
}
async function Page({ params }) {
    const { lang, slug } = await params;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$_c2efd69d64dc8ff914a47db05e67ae8c$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$RequestLocaleCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__setCachedRequestLocale__as__setRequestLocale$3e$__["setRequestLocale"])(lang);
    //Preparing Slug to match storyblok slug
    const finalSlug = slug ? slug?.join("/").toString() : "start"; //here "start" is the root slug
    const envPrefix = process.env.CURRENT_ENV || "dev";
    const story = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetchers$2f$storyblok$2d$fetcher$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStory"])(envPrefix, finalSlug, lang);
    if (!story) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$storyblok$2b$react$40$4$2e$7$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$re_3f007cae82df8cb4280f1ccf611aa4d3$2f$node_modules$2f40$storyblok$2f$react$2f$dist$2f$story$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__StoryblokStory$3e$__["StoryblokStory"], {
        story: story
    }, void 0, false, {
        fileName: "[project]/src/app/[lang]/[[...slug]]/page.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/[lang]/[[...slug]]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/[[...slug]]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__922f4426._.js.map