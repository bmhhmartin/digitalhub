import { type SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import type { MenuItem } from "@/.storyblok/types/287474179047807/storyblok-components";
import { Link } from "@/i18n/navigation";

const SBMenuItem = ({ blok }: { blok: MenuItem }) => {
	return (
		<div
			{...storyblokEditable(blok as SbBlokData)}
			className="flex flex-col lg:flex-row lg:items-center w-full lg:w-auto"
		>
			<div className="w-full lg:w-auto">
				{blok?.link?.url ? (
					<Link
						tabIndex={0}
						href={blok?.link?.url}
						target={blok.link?.target ?? "_self"}
						className="no-underline block py-2 px-3 lg:py-1 lg:px-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-sm lg:text-base font-medium"
					>
						{blok?.title}
					</Link>
				) : (
					<button
						tabIndex={-1}
						type="button"
						className="block py-2 px-3 lg:py-1 lg:px-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-sm lg:text-base font-medium text-left w-full lg:w-auto"
					>
						{blok?.title}
					</button>
				)}
			</div>

			{/* SubItems */}
			{blok?.SubItems && blok.SubItems.length > 0 && (
				<div className="flex flex-col lg:flex-row lg:ml-2 pl-3 lg:pl-0 border-l lg:border-l-0 border-accent lg:border-none">
					{blok.SubItems.map((subitem) => (
						<Link
							href={subitem.link?.url ?? "#"}
							target={subitem.link?.target ?? "_self"}
							key={subitem._uid}
							className="py-1 px-3 lg:py-1 lg:px-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-xs lg:text-sm text-muted-foreground lg:text-foreground"
						>
							{subitem.title}
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default SBMenuItem;
