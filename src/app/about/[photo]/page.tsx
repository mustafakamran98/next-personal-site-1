import { titleGenerator } from "@/utils/functions";
import { pageTitles, catNames } from "@/utils/Maps";
import styles from "./photo.module.css"

export const metadata = {
	title: titleGenerator(pageTitles["/about"]),
}

export default async function PhotoPage({
	params,
  }: {
	params: Promise<{ photo: string }>;
  }) {
	const { photo } = await params;
	const source = `/cats/${photo}.jpeg`;
	const alt = `Picture of ${catNames[photo]} the cat`;

	return (
		<div className={styles.photo_div}>
			<img
				src={source}
				className={styles.photo}
				alt={alt}
			/>
		</div>
	);
  }