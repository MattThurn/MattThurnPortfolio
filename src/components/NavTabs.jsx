import React from "react";
import "./styles/NavTabs.css";

const styles = {
	a: {
		textDecoration: "none",
		fontSize: "25px",
		padding: "15px",
		color: "#b4786b",
	},
};
function NavTabs({ currentPage, handlePageChange }) {
	return (
		<div>
			<ul className="navbar">
				<li className="name">Matt Thurn</li>
				<li>
					<a
						style={styles.a}
						href="#about"
						onClick={() => handlePageChange("About")}
						// This is a conditional (ternary) operator that checks to see if the current page is "Home"
						// If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
						className={currentPage === "About" ? "nav-link active" : "nav-link"}
					>
						About
					</a>
				</li>
				<hr className="hrChange" />
				<li>
					<a
						style={styles.a}
						href="#portfolio"
						onClick={() => handlePageChange("Portfolio")}
						// Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
						className={
							currentPage === "Portfolio" ? "nav-link active" : "nav-link"
						}
					>
						Portfolio
					</a>
				</li>
				<hr className="hrChange" />
				<li>
					<a
						style={styles.a}
						href="#contact"
						onClick={() => handlePageChange("Contact")}
						// Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
						className={
							currentPage === "Contact" ? "nav-link active" : "nav-link"
						}
					>
						Contact
					</a>
				</li>
				<hr className="hrChange" />
				<li>
					<a
						style={styles.a}
						href="#resume"
						onClick={() => handlePageChange("Resume")}
						// Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
						className={
							currentPage === "Resume" ? "nav-link active" : "nav-link"
						}
					>
						Resume
					</a>
				</li>
			</ul>
		</div>
	);
}

export default NavTabs;
