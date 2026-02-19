import { pageTitles } from "@/utils/Maps";
import { titleGenerator } from "@/utils/functions";

export const metadata = {
	title: titleGenerator(pageTitles["/"]),
}

export default function Index() {
	return (
		<>
			<h2>About this Website</h2>
			<p>
				This website serves as a portfolio to showcase my web development skills using Next.JS and CSS modules. It is essentially an informal resume.
			</p>
			<p>
				You can click the other links in the navigation bar to see the other pages.
				Feel free to look around. 😉
			</p>
		</>
	);
}