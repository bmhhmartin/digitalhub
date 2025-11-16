import { getStoryblokApi } from "@/lib/storyblok";
import { draftMode } from "next/headers";
import { i18n, type Locale } from "../../i18n/i18n-config";

export async function fetchSBData(
	envPrefix: "dev" | "stage" | "prod",
	slug: string,
	lang: Locale = i18n.defaultLocale as Locale,
) {
	try {
		const { isEnabled } = await draftMode();
		const storyblokApi = getStoryblokApi();

		if (!storyblokApi) {
			console.error("Storyblok API not initialized");
			return undefined;
		}

		const route = `${envPrefix}/${slug}`;

		const response = await storyblokApi.getStory(
			route,
			{
				version:
					process.env.NODE_ENV === "development" || isEnabled
						? "draft"
						: "published",
				language: lang?.toLowerCase(),
			},
			{
				next: {
					revalidate: 300, // Cache for 5 minutes
					tags: [`story-${route}-lang-${lang}`], // Cache tags for invalidation
				},
			},
		);

		return response?.data?.story || undefined;
	} catch (error: unknown) {
		// Handle 404 and other API errors gracefully
		if (error && typeof error === "object" && "response" in error) {
			const apiError = error as { response?: { status?: number } };
			if (apiError.response?.status === 404) {
				console.warn(`Story not found: ${envPrefix}/${slug} (lang: ${lang})`);
				return undefined;
			}
		}
		// Re-throw non-404 errors so they can be handled by the caller
		console.error(`Error fetching story ${envPrefix}/${slug}:`, error);
		throw error;
	}
}

export const getStory = fetchSBData;
