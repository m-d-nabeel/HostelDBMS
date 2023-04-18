import { useEffect, useState } from "react";
import "./NotFound.css";

function NotFound() {
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		setAnimate(true);
	}, []);

	return (
		<div
			className={`not-found-container ${animate ? "animate__fadeInUp" : ""}`}
		>
			<h1 className="not-found-title">404 Not Found</h1>
			<p className="not-found-message">
				The page you requested could not be found.
			</p>
			<a href="/">
				<button className="not-found-button">Go back to homepage</button>
			</a>
		</div>
	);
}

export default NotFound;
