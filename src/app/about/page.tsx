import { titleGenerator } from "@/utils/functions";
import { pageTitles } from "@/utils/Maps";
import Link from "next/link";

import styles from "./about.module.css";

export const metadata = {
	title: titleGenerator(pageTitles["/about"]),
}

export default function About() {
	return (
		<>
			<h2>About Me</h2>
			<p className={styles.bio}>
				I am a software engineer with 2 years of experience who is currently interested in web
				development. My interests include tech news, cats, music, drawing, and gaming. I like looking into the
				details
				of things
				and daydreaming.
			</p>

			Here are some of my interests in more detail:
			<ul>
				<li><em>Music:</em> 90&apos;s Techno, Classic Rock, Daft Punk, and Jungle Bass</li>
				<li><em>Games:</em> Half Life, Minecraft, Doom, 2D Sonic, and Metal Gear Solid</li>
			</ul>

			<p>I also raised four kittens over at my family&apos;s house. They seem to be born in March 2021. One of them has
				since been adopted, but the other three remain at my family&apos;s house. You can click on the images to enlarge them.</p>

			<ul className={styles.cat_ul}>
				<li className={styles.cat_li}><Link href="/about/tabby"><img className={styles.cat} src="/cats/tabby.jpeg"
						alt="Picture of Tabby the cat" /></Link><em>Tabby:</em> Yes, that is his name.
					Tabby is a vocal
					male cat. He used to be one of the more active
					kittens, but nowadays just demands cuddles. He does not like it when humans aren&apos;t around him for
					too long and will insist on cuddling. However, he is also not too friendly to cats he&apos;s not familiar
					with. He also likes being picked up and held by the shoulder. Be careful though, sometimes he might
					pounce on you just for fun!</li>

				<li className={styles.cat_li}><Link href="/about/alex"><img className={styles.cat} src="/cats/alex.jpeg"
						alt="Picture of Alex the cat" /></Link><em>Alex:</em> Alex is an orange
					tabby cat. He is also
					pretty vocal, more than Tabby in fact. He is a bit of a troublemaker sometimes, but his face will
					make you forget what he did. He loves cuddles and playtime (especially straws) but don&apos;t indulge him
					too much, or he will start
					suckling on his own fur (this is something that can happen to orphaned kittens). He is much more
					friendly towards other cats too, and loves wrestling with them.</li>

				<li className={styles.cat_li}><Link href="/about/sad_eyes"><img className={styles.cat} src="/cats/sad_eyes.jpeg"
						alt="Picture of Sad Eyes the cat" /></Link><em>Sad Eyes:</em> Sad Eyes is yet
					another tabby cat who looks like Tabby, but is slightly skinnier and obviously has sad looking eyes.
					Sad eyes loves sitting on your lap and is the biggest troublemaker out of the three. He likes
					hanging out with Alex more than Tabby, and sometimes they can be seen grooming each other. Sad Eyes
					prefers cuddling and exploring over playtime.</li>
			</ul>
		</>
	);
}