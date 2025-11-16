import { StoryblokServerComponent } from "@storyblok/react/rsc";

import type { Menu } from "@/.storyblok/types/287474179047807/storyblok-components";

import LanguageSwitcher from "../ui/language-switcher";

const Header = ({ burger_menu }: { burger_menu?: Menu[] }) => {
	return (
		<header className="bg-[#151958] pt-6">
			<div className="max-w-[1100px] rounded-[30px] bg-white mx-auto px-4 sm:px-6 lg:px-8">
				<nav className="flex h-16 items-center justify-between">
					{/* Logo Section */}
					<div className="flex items-center space-x-3">
						<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-all hover:scale-105 hover:shadow-md">
							<span className="text-xl font-bold">e</span>
						</div>
						<span className="text-xl font-bold text-foreground sm:text-2xl">
							DigitalHub
						</span>
					</div>

					{/* Navigation Menu - Desktop */}
					<div>
						{burger_menu?.[0] && (
							<StoryblokServerComponent blok={burger_menu[0]} />
						)}
					</div>

					{/* Right Section - Language Switcher */}
					<div className="flex items-center space-x-4">
						<LanguageSwitcher className="hidden sm:block" />
					</div>

					{/* Mobile Menu Button - Placeholder for future mobile menu */}
					<div className="flex items-center space-x-2 md:hidden">
						<LanguageSwitcher className="sm:hidden" />
						<button
							type="button"
							className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
							aria-label="Toggle menu"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</button>
					</div>
				</nav>

				{/* Mobile Navigation Menu */}
				{burger_menu?.[0] && (
					<div className="border-t md:hidden">
						<div className="px-2 py-4">
							<StoryblokServerComponent blok={burger_menu[0]} />
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
