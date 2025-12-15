import Blog from "@/components/storyblok/blog";
import Global from "@/components/storyblok/global";
import BlogCard from "@/components/ui/BlogCard";
import Card from "@/components/ui/Card";
import CommonPart from "@/components/ui/CommonPart";
import DataExchange from "@/components/ui/DataExchange";
import FeatureCard from "@/components/ui/FeatureCard";
import Figures from "@/components/ui/Figures";
import GetTouch from "@/components/ui/GetTouch";
import Grid from "@/components/ui/Grid";
import HeroBanner from "@/components/ui/HeroBanner";
import Partner from "@/components/ui/Partner";
import PrimaryTabpanel from "@/components/ui/PrimaryTabpanel";
import Process from "@/components/ui/Process";
import TabPanelStep from "@/components/ui/TabPanelStep";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/section/Footer"), {
	ssr: true,
});

const FooterItem = dynamic(
	() => import("@/components/storyblok/footer/footerItem"),
	{
		ssr: true,
	},
);
const Section = dynamic(() => import("@/components/storyblok/section"), {
	ssr: true,
});
const Hero = dynamic(() => import("@/components/storyblok/hero"), {
	ssr: true,
});

const Links = dynamic(() => import("@/components/storyblok/links"), {
	ssr: true,
});

const SBMenu = dynamic(() => import("@/components/storyblok/menu"), {
	ssr: true,
});
const SBMenuItem = dynamic(() => import("@/components/storyblok/menu_item"), {
	ssr: true,
});
const pageContent = dynamic(
	() => import("@/components/storyblok/pageContent"),
	{
		ssr: true,
	},
);

const components = {
	hero: Hero,
	footer: Footer,
	footer_item: FooterItem,
	links: Links,
	menu: SBMenu,
	menu_item: SBMenuItem,
	page: pageContent,
	Section: Section,
	blog: Blog,
	global: Global,
	hero_banner: HeroBanner,
	card: Card,
	common_part: CommonPart,
	grid: Grid,
	process: Process,
	gettouch: GetTouch,
	partner: Partner,
    figures: Figures,
    blogcard: BlogCard,
    dataexchange: DataExchange,
    primary_tabpanel: PrimaryTabpanel,
    tabpanel_step: TabPanelStep,
    feature_card: FeatureCard,
};

export const getStoryblokApi = storyblokInit({
	accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
	use: [apiPlugin],
	components,
	enableFallbackComponent: true,
});
