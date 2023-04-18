import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			speed: 2000,
			autoplaySpeed: 2000,
			cssEase: "linear",
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		};
		return (
			<div>
				<div className="heading">Student Team</div>
				<br />
				<br />
				<Slider {...settings}>
					<div class="mx-5">
						<div class="profile-card my-5">
							<div
								class="profile-image"
								style={{ height: "300px", width: "300px" }}
							>
								<img
									src="https://source.unsplash.com/random?male&&profile"
									alt=""
									class="profile-img-blur h-100"
								/>
								<img
									src="https://source.unsplash.com/random?male&&profile"
									alt=""
									class="profile-img-main h-100"
								/>
								<div class="profile-info px-3 py-3 text-left">
									<div class="profile-name">Md Nabeel Ashar</div>
									<div class="profile-designation">House Secretary</div>
									<div class="social-icons">
										<a
											class="social-icon"
											href="https://source.unsplash.com/random?male&&profile"
											target="blank"
										>
											<i class="fa fa-linkedin" aria-hidden="true"></i>
										</a>
										<a
											class="social-icon"
											href="mailto:yashasvighadale@gmail.com"
										>
											<i class="fa fa-envelope" aria-hidden="true"></i>
										</a>
										<a class="social-icon" href="tel:+918770332029">
											<i class="fa fa-phone-alt" aria-hidden="true"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="mx-5">
						<div class="profile-card my-5">
							<div
								class="profile-image"
								style={{ height: "300px", width: "300px" }}
							>
								<img
									src="https://source.unsplash.com/random?male&&profile"
									alt=""
									class="profile-img-blur h-100"
								/>
								<img
									src="https://source.unsplash.com/random?male&&profile"
									alt=""
									class="profile-img-main h-100"
								/>
								<div class="profile-info px-3 py-3 text-left">
									<div class="profile-name">Rumman Ahmad</div>
									<div class="profile-designation">House Secretary</div>
									<div class="social-icons">
										<a
											class="social-icon"
											href="https://source.unsplash.com/random?male&&profile"
											target="blank"
										>
											<i class="fa fa-linkedin" aria-hidden="true"></i>
										</a>
										<a
											class="social-icon"
											href="mailto:yashasvighadale@gmail.com"
										>
											<i class="fa fa-envelope" aria-hidden="true"></i>
										</a>
										<a class="social-icon" href="tel:+918770332029">
											<i class="fa fa-phone-alt" aria-hidden="true"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="mx-5">
						<div class="profile-card my-5">
							<div
								class="profile-image"
								style={{ height: "300px", width: "300px" }}
							>
								<img
									src="https://source.unsplash.com/random?male&&profile"
									alt=""
									class="profile-img-blur h-100"
								/>
								<img
									src="https://source.unsplash.com/random?male&&profile"
									alt=""
									class="profile-img-main h-100"
								/>
								<div class="profile-info px-3 py-3 text-left">
									<div class="profile-name">Md Hammad Akram</div>
									<div class="profile-designation">House Secretary</div>
									<div class="social-icons">
										<a
											class="social-icon"
											href="https://source.unsplash.com/random?male&&profile"
											target="blank"
										>
											<i class="fa fa-linkedin" aria-hidden="true"></i>
										</a>
										<a
											class="social-icon"
											href="mailto:yashasvighadale@gmail.com"
										>
											<i class="fa fa-envelope" aria-hidden="true"></i>
										</a>
										<a class="social-icon" href="tel:+918770332029">
											<i class="fa fa-phone-alt" aria-hidden="true"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div></div>
					</div>
					<div class="mx-5">
						<div class="profile-card my-5">
							<div
								class="profile-image"
								style={{ height: "300px", width: "300px" }}
							>
								<img
									src="https://source.unsplash.com/random?male&&profile"
									alt=""
									class="profile-img-blur h-100"
								/>
								<img
									src="https://source.unsplash.com/random?male&&profile"
									alt=""
									class="profile-img-main h-100"
								/>
								<div class="profile-info px-3 py-3 text-left">
									<div class="profile-name">Ayush Gupta</div>
									<div class="profile-designation">House Secretary</div>
									<div class="social-icons">
										<a
											class="social-icon"
											href="https://source.unsplash.com/random?male&&profile"
											target="blank"
										>
											<i class="fa fa-linkedin" aria-hidden="true"></i>
										</a>
										<a
											class="social-icon"
											href="mailto:yashasvighadale@gmail.com"
										>
											<i class="fa fa-envelope" aria-hidden="true"></i>
										</a>
										<a class="social-icon" href="tel:+918770332029">
											<i class="fa fa-phone-alt" aria-hidden="true"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="mx-5">
						<div class="profile-card my-5">
							<div
								class="profile-image"
								style={{ height: "300px", width: "300px" }}
							>
								<img
									src="https://source.unsplash.com/random?male&&profile"
									alt=""
									class="profile-img-blur h-100"
								/>
								<img
									src="https://source.unsplash.com/random?male&&profile"
									alt=""
									class="profile-img-main h-100"
								/>
								<div class="profile-info px-3 py-3 text-left">
									<div class="profile-name">Saud Anwar</div>
									<div class="profile-designation">House Secretary</div>
									<div class="social-icons">
										<a
											class="social-icon"
											href="https://source.unsplash.com/random?male&&profile"
											target="blank"
										>
											<i class="fa fa-linkedin" aria-hidden="true"></i>
										</a>
										<a
											class="social-icon"
											href="mailto:yashasvighadale@gmail.com"
										>
											<i class="fa fa-envelope" aria-hidden="true"></i>
										</a>
										<a class="social-icon" href="tel:+918770332029">
											<i class="fa fa-phone-alt" aria-hidden="true"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="mx-5">
						<div class="profile-card my-5">
							<div
								class="profile-image"
								style={{ height: "300px", width: "300px" }}
							>
								<img
									src="https://source.unsplash.com/random?male&&profile"
									alt=""
									class="profile-img-blur h-100"
								/>
								<img
									src="https://source.unsplash.com/random?male&&profile"
									alt=""
									class="profile-img-main h-100"
								/>
								<div class="profile-info px-3 py-3 text-left">
									<div class="profile-name">Mohd Noman Khan</div>
									<div class="profile-designation">House Secretary</div>
									<div class="social-icons">
										<a
											class="social-icon"
											href="https://source.unsplash.com/random?male&&profile"
											target="blank"
										>
											<i class="fa fa-linkedin" aria-hidden="true"></i>
										</a>
										<a
											class="social-icon"
											href="mailto:yashasvighadale@gmail.com"
										>
											<i class="fa fa-envelope" aria-hidden="true"></i>
										</a>
										<a class="social-icon" href="tel:+918770332029">
											<i class="fa fa-phone-alt" aria-hidden="true"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="mx-5">
						<div class="profile-card my-5">
							<div
								class="profile-image"
								style={{ height: "300px", width: "300px" }}
							>
								<img
									src="https://source.unsplash.com/random?male&&profile"
									alt=""
									class="profile-img-blur h-100"
								/>
								<img
									src="https://source.unsplash.com/random?male&&profile"
									alt=""
									class="profile-img-main h-100"
								/>
								<div class="profile-info px-3 py-3 text-left">
									<div class="profile-name">Mohd Azim</div>
									<div class="profile-designation">House Secretary</div>
									<div class="social-icons">
										<a
											class="social-icon"
											href="https://source.unsplash.com/random?male&&profile"
											target="blank"
										>
											<i class="fa fa-linkedin" aria-hidden="true"></i>
										</a>
										<a
											class="social-icon"
											href="mailto:yashasvighadale@gmail.com"
										>
											<i class="fa fa-envelope" aria-hidden="true"></i>
										</a>
										<a class="social-icon" href="tel:+918770332029">
											<i class="fa fa-phone-alt" aria-hidden="true"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="mx-5">
						<div class="profile-card my-5">
							<div
								class="profile-image"
								style={{ height: "300px", width: "300px" }}
							>
								<img
									src="https://source.unsplash.com/random?male&&profile"
									alt=""
									class="profile-img-blur h-100"
								/>
								<img
									src="https://source.unsplash.com/random?male&&profile"
									alt=""
									class="profile-img-main h-100"
								/>
								<div class="profile-info px-3 py-3 text-left">
									<div class="profile-name">Aliza</div>
									<div class="profile-designation">House Secretary</div>
									<div class="social-icons">
										<a
											class="social-icon"
											href="https://source.unsplash.com/random?male&&profile"
											target="blank"
										>
											<i class="fa fa-linkedin" aria-hidden="true"></i>
										</a>
										<a
											class="social-icon"
											href="mailto:yashasvighadale@gmail.com"
										>
											<i class="fa fa-envelope" aria-hidden="true"></i>
										</a>
										<a class="social-icon" href="tel:+918770332029">
											<i class="fa fa-phone-alt" aria-hidden="true"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		);
	}
}
