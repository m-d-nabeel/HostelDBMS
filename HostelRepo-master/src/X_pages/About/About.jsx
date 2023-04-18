import React from "react";
import "./About.css";
import Footer from "../../Components_hub/Footer/Footer.jsx";
import Navbar from "../../Components_hub/Navbar/Navbar";

const About = () => {
	return (
		<>
			<Navbar />
			<div className="one-window">
				<div>
					<header>
						<h1>About the Hostel Warden</h1>
						<p>Learn more about the person who takes care of our students.</p>
					</header>
				</div>

				<Footer />
			</div>
		</>
	);
};

export default About;
