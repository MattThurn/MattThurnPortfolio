import React from "react";
import githubPeach from "../assets/images/github-mark-peach.png";
import linkedInPeach from "../assets/images/linkedin-mark-peach.png";
import twitterPeach from "../assets/images/twitter-mark-peach.png";
import "./styles/IconBar.css";

function IconBar() {
	return (
		<div className="icon-bar">
			<a href="https://github.com/MattThurn" target={"_blank"}>
				<img className="iconGithubPeach" src={githubPeach} />
			</a>
			<a href="https://www.linkedin.com/in/matt-thurn/" target={"_blank"}>
				<img className="iconLinkedInPeach" src={linkedInPeach} />
			</a>
			<a href="https://twitter.com/MattThurn" target={"_blank"}>
				<img className="iconTwitterPeach" src={twitterPeach} />
			</a>
		</div>
	);
}

export default IconBar;
