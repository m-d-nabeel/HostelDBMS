import React from "react";

function MyComponent() {
	const handleLinkClick = (event) => {
		// prevent the default behavior of the link, i.e., navigating to a new page
		event.preventDefault();
		// remove the active class from all links
		let count = 0;
		document.querySelectorAll(".link1").forEach((link) => {
			count += 1;
			link.classList.remove("active");
		});
		// add the active class to the clicked link
		event.target.classList.add("active");
		if (event.target.classList.contains("mon")) count = 1;
		if (event.target.classList.contains("tue")) count = 2;
		if (event.target.classList.contains("wed")) count = 3;
		if (event.target.classList.contains("thurs")) count = 4;
		if (event.target.classList.contains("fri")) count = 5;
		if (event.target.classList.contains("sat")) count = 6;
		if (event.target.classList.contains("sun")) count = 7;
		document.querySelectorAll(".mess-menu-items").forEach((link) => {
			count -= 1;
			link.classList.add("d-none");
			if (count === 0) {
				link.classList.remove("d-none");
			}
		});
	};
	const checkList = () => {
		let classItems = document.querySelectorAll(".link1");
		console.log(classItems);
	};

	return (
		<div className="row text-center">
			<div className="col-0 col-lg-2"></div>
			<div className="col p-0 mb-3">
				<a className="link1 active mon" href="/" onClick={handleLinkClick}>
					Monday
				</a>
			</div>
			<div className="col p-0 mb-3">
				<a className="link1 tue" href="/" onClick={handleLinkClick}>
					Tuesday
				</a>
			</div>
			<div className="col p-0 mb-3">
				<a className="link1 wed" href="/" onClick={handleLinkClick}>
					Wednesday
				</a>
			</div>
			<div className="col p-0 mb-3">
				<a className="link1 thurs" href="/" onClick={handleLinkClick}>
					Thursday
				</a>
			</div>
			<div className="col p-0 mb-3">
				<a className="link1 fri" href="/" onClick={handleLinkClick}>
					Friday
				</a>
			</div>
			<div className="col p-0 mb-3">
				<a className="link1 sat" href="/" onClick={handleLinkClick}>
					Saturday
				</a>
			</div>
			<div className="col p-0 mb-3">
				<a className="link1 sun" href="/" onClick={handleLinkClick}>
					Sunday
				</a>
			</div>
			<div className="col-0 col-lg-2"></div>
		</div>
	);
}

export default MyComponent;
