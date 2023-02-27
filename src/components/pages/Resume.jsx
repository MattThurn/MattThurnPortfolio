import React from "react";
import "../styles/Resume.css";
import IconBar from "../IconBar";


function Resume() {
	return (
		<div>
			<h1 className="page-title">Resume</h1>
			<div className="container">
				<h2 className="list-title">Front End:</h2>
				<ul className="list">
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>JQuery</li>
					<li>React</li>
				</ul>
				<h2 className="list-title">Back End:</h2>
				<ul className="list">
					<li>APIs</li>
					<li>Node</li>
					<li>Express</li>
					<li>MySQL, Sequelize</li>
					<li>MongoDB, Mongoose</li>
					<li>REST</li>
					<li>GraphQL</li>
				</ul>
			</div>
			<div>
				<IconBar />
			</div>
		</div>
	);
}

export default Resume;
