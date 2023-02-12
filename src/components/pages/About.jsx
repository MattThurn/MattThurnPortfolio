import React from "react";
import IconBar from "../IconBar";
import "../styles/About.css";
import placeholderImg from "../../assets/images/placeholder-256x256.png";

function About() {
	return (
		<div className="container">
			<div className="about">
				<h1 className="about-text">About</h1>
				<div className="about-container">
					<img className="about-image" src={placeholderImg} />
					<p className="text-container">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
						aperiam quam laboriosam nemo repudiandae ratione consequuntur? Nemo
						inventore tempora, nulla nisi necessitatibus, omnis saepe sed eum,
						eos adipisci similique unde. Lorem ipsum dolor sit, amet consectetur
						adipisicing elit. Dolorum ratione error maxime rem ullam dolor
						beatae totam corrupti quaerat aspernatur, eos inventore explicabo
						molestiae, possimus quisquam a! Libero, cumque incidunt!
					</p>
				</div>
			</div>
			<IconBar />
		</div>
	);
}

export default About;
