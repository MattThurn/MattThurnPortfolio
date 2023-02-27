import React from "react";
import IconBar from "../IconBar";
import "../styles/About.css";
import placeholderImg from "../../assets/images/about_me_photo.png";

function About() {
	return (
		<div className="container">
			<div className="about">
				<h1 className="about-text">About</h1>
				<div className="about-container">
					<img alt="A picture of Matt Thurn" className="about-image" src={placeholderImg} />
					<p className="text-container">
						I am Matt Thurn, a web developer! Hard work and efficiency are my
						main values when creating a well designed website. I have a passion
						for learning new things and programming is just the right thing to
						quench that. Outside of coding I enjoy video games and reading.
					</p>
				</div>
			</div>
			<IconBar />
		</div>
	);
}

export default About;
