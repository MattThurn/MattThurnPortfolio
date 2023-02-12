import React from "react";
import "./styles/NavTabs.css";
import heroImage from "../assets/images/grayBricks.png";

function NavTabs({ currentPage, handlePageChange }) {
	return (
		<div>
			<ul className="navbar">
				<li className="name">Matt Thurn</li>
				<li>
					<a
						href="#about"
						onClick={() => handlePageChange("About")}
						// This is a conditional (ternary) operator that checks to see if the current page is "Home"
						// If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
						className="text-style"
						id="about-hover"
					>
						About
					</a>
				</li>
				<hr className="hrChange" />
				<li>
					<a
						href="#portfolio"
						onClick={() => handlePageChange("Portfolio")}
						// Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
						className="text-style"
						id="portfolio-hover"
					>
						Portfolio
					</a>
				</li>
				<hr className="hrChange" />
				<li>
					<a
						href="#contact"
						onClick={() => handlePageChange("Contact")}
						// Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
						className="text-style"
						id="contact-hover"
					>
						Contact
					</a>
				</li>
				<hr className="hrChange" />
				<li>
					<a
						href="#resume"
						onClick={() => handlePageChange("Resume")}
						// Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
						className="text-style"
						id="resume-hover"
					>
						Resume
					</a>
				</li>
			</ul>
			<div className="hero-container">
				<img className="hero-image" src={heroImage}></img>
				<h1 className="hero-image-overlay">Web Developer</h1>
			</div>
		</div>
	);
}

export default NavTabs;
