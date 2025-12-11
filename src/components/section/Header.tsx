"use client";

import { StoryblokServerComponent } from "@storyblok/react/rsc";
import { useEffect, useState } from "react";

import type { Menu } from "@/.storyblok/types/287474179047807/storyblok-components";

import { usePathname } from "@/i18n/navigation";
import Link from "next/link";
import LanguageSwitcher from "../ui/language-switcher";

const Header = ({ burger_menu }: { burger_menu?: Menu[] }) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	// Close mobile menu when window is resized to desktop size
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsMobileMenuOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Reset scroll state when route changes
	useEffect(() => {
		setIsScrolled(false);
	}, [pathname]);

	// Add blueHeader className when scrolled 800px or more
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY >= 800);
		};

		window.addEventListener("scroll", handleScroll);
		// Check initial scroll position
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);



        const headerClass = pathname === '/start'
        ? (isScrolled ? "blueHeader" : "")
        : (!isScrolled ? "blueHeader" : "blueHeader");

	return (
		<header className={`py-4 sm:pt-6 ${headerClass}`}>
			<div className="headerColor max-w-[1100px] rounded-[20px] sm:rounded-[30px] md:mx-auto px-4 sm:px-6 lg:px-8 mx-5">
				<nav className="flex h-14 sm:h-16 items-center justify-between">
					{/* Logo Section */}
					<div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
						<Link href='/' className="flex items-center gap-2 logo_text">
                            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-[#151958] text-primary-foreground shadow-sm transition-all hover:scale-105 hover:shadow-md">
                                <span className="text-lg sm:text-xl font-bold">D</span>
                            </div>
                            <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                                DigitalHub
                            </span>
                        </Link>
                        
					</div>

					{/* Navigation Menu - Desktop */}
					<div className="hidden lg:flex items-center flex-1 justify-center mx-4">
						{burger_menu?.[0] && (
							<StoryblokServerComponent blok={burger_menu[0]} />
						)}
					</div>

					{/* Right Section - Language Switcher (Desktop) */}
					<div className="hidden lg:flex items-center space-x-4 shrink-0">
						<LanguageSwitcher />
					</div>

					{/* Mobile Menu Button */}
					<div className="flex items-center space-x-2 lg:hidden">
						<LanguageSwitcher />
						<button
							type="button"
							onClick={toggleMobileMenu}
							className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
							aria-label="Toggle menu"
							aria-expanded={isMobileMenuOpen}
						>
							{isMobileMenuOpen ? (
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
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
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
							)}
						</button>
					</div>
				</nav>

				{/* Mobile Navigation Menu */}
				{burger_menu?.[0] && isMobileMenuOpen && (
					<div className="border-t lg:hidden animate-in slide-in-from-top-2 duration-200">
						<div className="px-4 py-4 space-y-2">
							<StoryblokServerComponent blok={burger_menu[0]} />
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
