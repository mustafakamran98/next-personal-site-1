"use client";

import { titleGenerator } from "@/utils/functions";
import { usePathname } from "next/navigation";
import { pageTitles } from "@/utils/Maps";

export default function Title() {
	const pathname = usePathname();

	const segments = pathname.split("/").filter(Boolean); // Remove empty segments
  	const titlePart = segments.length > 0 ? `/${segments[0]}` : "/"; 
	
	const title = titleGenerator(pageTitles[titlePart] || "Default Title");
	
	return <h1>{title}</h1>;
}