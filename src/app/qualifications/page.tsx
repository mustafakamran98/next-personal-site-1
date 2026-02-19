import { titleGenerator } from "@/utils/functions";
import { pageTitles } from "@/utils/Maps";

export const metadata = {
	title: titleGenerator(pageTitles["/qualifications"]),
}

export default function Qualifications() {
	return (
		<>
			<h2>Projects</h2>

			<ul>
				<li><em>Ensemble Tagger Frontend:</em> Worked on a project that creates a web frontend for a source code tagger using Python Flask and React.JS. <a href="https://github.com/mustafakamran98/ensemble_tagger_frontend">Link to GitHub repository</a>
				</li>

				<li><em>Find My Stream:</em> Worked in a team of 4 using Java and Swing libraries to develop an app that
					searched
					for shows to determine which streaming services they were available in. The project was developed in
					10
					weeks using an Agile-like process</li>

				<li><em>FTP Client Server Programs:</em> Used C to write a POSIX-compliant client and server programs
					that
					were
					capable of 100 connections.</li>

				<li><em>NXP Car Cup:</em> Used C to program a microcontroller to drive a battery powered car using a
					line-scan
					camera to determine direction. <a
						href="https://drive.google.com/open?id=1ugr4yGcAtyxxZFYZpRCZFEYEDtiYP6Ss">Drive link for
						videos</a>
				</li>

				<li><em>Flappy Bird Clone:</em> Used the Gdx library to design a Flappy Bird clone for Android devices.
					Allows
					for
					easy modifying of physics through the source code. <a
						href="https://github.com/mustafakamran98/Modifiable-Flappy-Bird-Android-Clone">Link to GitHub
						repository</a></li>

				<li><em>Android News App:</em> Worked on a News App for Android which displays news headlines and
					takes the user to the article upon clicking a headline. <a
						href="https://github.com/mustafakamran98/News-Android-App">Link to GitHub
						repository</a></li>
			</ul>

			<h2>Skills</h2>

			<h3>Languages</h3>
			<ul>
				<li>C/C++</li>
				<li>Java</li>
				<li>Python</li>
				<li>VHDL</li>
				<li>MATLAB</li>
				<li>HTML</li>
				<li>CSS</li>
				<li>JavaScript</li>
				<li>MySQL</li>
			</ul>


			<h3>Operating Systems</h3>
			<ul>
				<li>Windows Server</li>
				<li>Linux (bash)</li>
				<li>Ubuntu</li>
			</ul>


			<h3>Software &amp; Tools</h3>
			<ul>
				<li>Python Flask</li>
				<li>React.JS</li>
				<li>Visual Studio</li>
				<li>IntelliJ IDEA</li>
				<li>Android Studio</li>
				<li>Xcode</li>
				<li>AWS</li>
				<li>Docker</li>
			</ul>
		</>
	);
}