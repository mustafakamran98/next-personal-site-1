import { titleGenerator } from "@/utils/functions";
import { pageTitles } from "@/utils/Maps";

import styles from "./contact.module.css";

export const metadata = {
	title: titleGenerator(pageTitles["/contact"]),
}

export default function Contact() {
	return (
		<>
			<h2>Links</h2>

			<ul className={styles.contact_li}>
				<li><a href="https://www.github.com/mustafakamran98"><img className={styles.contact_logo}
					src="/logos/GitHub-Mark-32px.png" alt="GitHub Logo" /> GitHub</a></li>
				<li><a href="https://www.linkedin.com/in/mustafak98/"><img className={styles.contact_logo}
					src="/logos/LI-In-Bug.png" alt="LinkedIn Logo" /> LinkedIn</a></li>
			</ul>
		</>
	);
}