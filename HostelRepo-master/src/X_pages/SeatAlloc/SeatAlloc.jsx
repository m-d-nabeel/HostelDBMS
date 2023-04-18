import React from "react";
import "./SeatAlloc.css";
import Navbar from "../../Components_hub/Navbar/Navbar";
import Footer from "../../Components_hub/Footer/Footer";
import MyApp from "./components/pdfFilePass";
const SeatAlloc = () => {
	return (
		<>
			<Navbar />
			<div className="one-window">
				<div>
					<header>
						<h1>Hostel Seat Allotment</h1>
					</header>
					<br />
					<MyApp />
					<hr />
				</div>
			</div>
			<br />
			<Footer />
		</>
	);
};

export default SeatAlloc;
