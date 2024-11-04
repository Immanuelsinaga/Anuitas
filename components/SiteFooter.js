import { siteConfig } from "@/config/site";
import { Icons } from "./icons";

export function Footer() {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center text-slate-900 dark:text-slate-200">
        <div className="mb-3 flex space-x-4">
          <a target="_blank" rel="noreferrer" href={siteConfig.links.instagram}>
            <span className="sr-only">Instagram</span>
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.twitter}>
            <span className="sr-only">Twitter</span>
            <Icons.twitter className="h-6 w-6" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            <span className="sr-only">GitHub</span>
            <Icons.gitHub className="h-6 w-6" />
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          <a href={siteConfig.links.personalSite} target="_blank">
          © 2024 Reyusin 🚀 All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
}