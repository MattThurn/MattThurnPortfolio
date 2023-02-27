import React from "react";
import IconBar from "../IconBar";
import "../styles/Portfolio.css";
import githubPeach from "../../assets/images/github-mark-peach.png";
import placeholder from "../../assets/images/placeholder-150x150.png";
import WikimonDemo from "../../assets/images/wikimondemo_100x100.png";
import ParkHopperDemo from "../../assets/images/parkhopperdemo_100x100.png";

function Portfolio() {
	return (
		<div>
			<div>
				<h1 className="text-title">Portfolio</h1>
			</div>
			<div className="card-container">
				<div className="card">
					<img alt="a picture of the website Wikimon" className="placeholder-img" src={WikimonDemo} />
					<h1>
						<a
							href="https://mattthurn.github.io/Wikimon/"
							target="_blank"
							className="project-title"
						>
							Wikimon
						</a>
					</h1>

					<a href="https://github.com/MattThurn/Wikimon" target="_blank">
						<img className="icon" src={githubPeach} />
					</a>
				</div>
				<div className="card">
					<img alt="a picture of the website Park Hopper" className="placeholder-img" src={ParkHopperDemo} />
					<h1>
						<a
							href="https://park-hopper.herokuapp.com/"
							target="_blank"
							className="project-title"
						>
							Park Hopper
						</a>
					</h1>
					<a href="https://github.com/MattThurn/Park-Hopper" target="_blank">
						<img className="icon" src={githubPeach} />
					</a>
				</div>
				<div className="card">
					<img alt="a placeholder image" className="placeholder-img" src={placeholder} />
					<h1>
						<a href="#" className="project-title">
							Work in Progress
						</a>
					</h1>

					<img className="icon" src={githubPeach} />
				</div>
			</div>
			<div>
				<IconBar />
			</div>
		</div>
	);
}

export default Portfolio;
