// import React from "react";
// import "./Navbar.css";

// const Navbar = () => {
// 	return (
// 		<div>
// 			<nav className="navbar navbar-expand-lg  my-nav " data-bs-theme="dark">
// 				<div className="container-fluid">
// 					{/* <a className="navbar-brand" href="#"></a> */}
// 					<button
// 						className="navbar-toggler"
// 						type="button"
// 						data-bs-toggle="collapse"
// 						data-bs-target="#navbarSupportedContent"
// 						aria-controls="navbarSupportedContent"
// 						aria-expanded="false"
// 						aria-label="Toggle navigation"
// 					>
// 						<span className="navbar-toggler-icon"></span>
// 					</button>
// 					<div
// 						className="collapse navbar-collapse "
// 						id="navbarSupportedContent"
// 					>
// 						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
// 							<li className="nav-item">
// 								<a
// 									className="nav-link active manual-flex"
// 									aria-current="page"
// 									href="/"
// 									rel="noopener"
// 								>
// 									<div>Home</div>
// 								</a>
// 							</li>
// 							<li className="nav-item">
// 								<a className="nav-link " href="/About">
// 									About
// 								</a>
// 							</li>
// 							<li className="nav-item">
// 								<a className="nav-link" href="/SeatAlloc">
// 									Seat Allocation
// 								</a>
// 							</li>
// 							<li className="nav-item">
// 								<a className="nav-link" href="/Rules">
// 									Rules & Regulation
// 								</a>
// 							</li>
// 							<li className="nav-item">
// 								<a className="nav-link" href="/Fee">
// 									Fee Structure
// 								</a>
// 							</li>
// 							<li className="nav-item">
// 								<a className="nav-link" href="/Faq">
// 									FAQ's
// 								</a>
// 							</li>
// 							<li className="nav-item">
// 								<a className="nav-link" href="/Contact">
// 									Contact Us
// 								</a>
// 							</li>
// 						</ul>
// 						<a href="/Login" target="_blank">
// 							<button className="btn btn-outline-secondary login" type="submit">
// 								<div className="login-button">Admin Login</div>
// 							</button>
// 						</a>
// 					</div>
// 				</div>
// 			</nav>
// 		</div>
// 	);
// };

// export default Navbar;

import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
	componentDidMount() {
		// Get the current page URL
		const url = window.location.href;

		// Remove the active class from all links
		const links = document.querySelectorAll(".nav-item a");
		links.forEach((link) => {
			link.classList.remove("active");
		});
		document.querySelector(`a[href="/"]`).classList.add("active");

		// Add the active class to the current link
		const parts = url.split("/");
		const pageName = parts[parts.length - 1];
		const currentLink = document.querySelector(
			`.nav-item a[href="/${pageName}"]`
		);
		console.log(document.querySelector(`a[href="/${pageName}"]`));
		if (currentLink) {
			currentLink.classList.add("active");
		}
	}

	render() {
		return (
			<>
				<nav className="navbar navbar-expand-lg  my-nav " data-bs-theme="dark">
					<div className="container-fluid">
						{/* <a className="navbar-brand" href="#"></a> */}
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse "
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a
										className="nav-link active manual-flex"
										aria-current="page"
										href="/"
									>
										<div>
											{/* <b>Home</b> */}
											{/* <u>Home</u> */}
											<i>Home</i>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link " href="/About">
										About
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/SeatAlloc">
										Seat Allocation
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/Rules">
										Rules & Regulation
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/Fee">
										Fee Structure
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/Faq">
										FAQ's
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/Contact">
										Contact Us
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/Payment">
										Fee Payment
									</a>
								</li>
							</ul>
							<a href="/Login" target="_blank">
								<button
									className="btn btn-outline-secondary login"
									type="submit"
								>
									<div className="login-button">Admin Login</div>
								</button>
							</a>
						</div>
					</div>
				</nav>
			</>
		);
	}
}

export default Navbar;
