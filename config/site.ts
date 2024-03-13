export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Stephen's Tools",
	description: "Stephen's Tools.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Todo List",
      href: "/todo",
    },
	{
	  label: "Redirections",
	  href: "/redirects",
	},
    
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Todo list",
			href: "/todo",
		},
		{
			label: "Redirects",
			href: "/redirects",
		},
	],
	links: {
		github: "https://github.com/thestephenevans",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
