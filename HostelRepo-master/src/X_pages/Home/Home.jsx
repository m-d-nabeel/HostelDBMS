import React from "react";
import "./Home.css";

import Footer from "../../Components_hub/Footer/Footer.jsx";
import MyComponent from "./MyComponents/MessDay";
import AutoPlay from "./MyComponents/StudentTeam";
import Navbar from "../../Components_hub/Navbar/Navbar";

const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container banner ">
				<div className=" px-0 container">
					<div
						id="carouselExampleInterval"
						className="carousel slide "
						data-bs-ride="carousel"
					>
						<div className="carousel-inner dimension ">
							<div className="carousel-item active b1" data-bs-interval="3000">
								<img
									src={require("./Home_images/campusA1.jpg")}
									className="d-block w-100 h-10"
									alt="sdcdcs"
								/>
							</div>
							<div className="carousel-item b1" data-bs-interval="3000">
								<img
									src={require("./Home_images/campusA3.jpg")}
									className="d-block w-100 "
									alt="..."
								/>
							</div>
							<div className="carousel-item b1">
								<img
									src={require("./Home_images/campusA2.jpg")}
									className="d-block w-100 "
									alt="..."
								/>
							</div>
						</div>

						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#carouselExampleInterval"
							data-bs-slide="prev"
						>
							<span
								className="carousel-control-prev-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#carouselExampleInterval"
							data-bs-slide="next"
						>
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>

					<p className="lead mb-0"></p>
				</div>
				<div className="row mb-2" style={{
					marginLeft:"-3%"
				}}>
					<div className="col-md-6">
						<div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
							<div className="col p-4 d-flex flex-column position-static">
								<h1>
									<strong className="d-inline-block mb-2 text-primary">
										Campus-A
									</strong>
								</h1>
								<p className="card-text mb-auto">
									<li>New Boys</li>
									<li>Kelat</li>
									<li>kCW</li>
									<li>Allama Iqbal</li>
								</p>
							</div>
							{/* <div className="col-auto d-none d-lg-block"> */}
							<div className="col-auto d-none d-lg-block img-fluid ">
								<img
									className="responsive"
									src={require("./Home_images/1.jpg")}
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
							<div className="col p-4 d-flex flex-column position-static">
								<h1>
									<strong className="d-inline-block mb-2 text-success">
										Campus-B
									</strong>
								</h1>

								<br />
								<p className="mb-auto">
									<li>FRK</li>
									<li>SRK</li>
									<li>BRA</li>
								</p>
							</div>
							<div className="col-auto d-none d-lg-block img-fluid ">
								<img
									className="responsive"
									src={require("./Home_images/logo.jpg")}
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="hero-card p-4 text-left">
					<div className="mb-4">
						<span className="container">
							<img
								src={require("./Home_images/logoJMI.jpg")}
								alt=""
								className="hostel-logo"
							/>
						</span>
						{/* <span className="hostel-name ml-2">
						<h1>Hostel</h1>
					</span> */}
					</div>
					<div className="container-fluid">
						<div className="row">
							<div className="col mb-3">
								<div className="col-heading mb-2">
									<h3>Social</h3>
								</div>
								<div className="manual-flex">
									<a
										href="https://instagram.com/kailash.iitd?utm_medium=copy_link"
										className="social mr-3"
										target="_blank"
										rel="noreferrer"
									>
										<i
											className="insta fa fa-instagram contact-icon"
											aria-hidden="true"
										></i>
									</a>
									<div className="extra-gap"></div>
									<a
										href="https://www.facebook.com/groups/463858693633547/?ref=share"
										className="social"
										target="_blank"
										rel="noreferrer"
									>
										<i
											className="face fa fa-facebook contact-icon"
											aria-hidden="true"
										></i>
									</a>
								</div>
							</div>
							<div className="col mb-4">
								<div className="col-heading mb-2">
									<h3>Complain</h3>
								</div>
								<button type="button" className="btn complain">
									<a
										href="https://docs.google.com/forms/d/e/1FAIpQLScYMprPlonKV1-aiTVG9hbVGch2qPv03k1wojDiD1jVQtmUtA/viewform?usp=sf_link"
										className="complain_link"
										target="_blank"
										rel="noreferrer"
									>
										Fill Complaint Form
									</a>
								</button>
							</div>
							<div className="col mb-1">
								<div className="col-heading mb-1">
									<h3>Location</h3>
								</div>
								<iframe
									className="map"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1336181698575!2d77.27824811744384!3d28.56575009999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a574f24cb1%3A0xb07903a53c4f3db!2sNew%20Boys%20Hostel%20-%20JMI!5e0!3m2!1sen!2sin!4v1677773482807!5m2!1sen!2sin"
									allowfullscreen=""
									title="hostel-map"
								></iframe>
							</div>
						</div>
					</div>
				</div>
				<div className="intro-container py-5">
					<h1 className="heading pb-4">Introduction</h1>
					<p className="intro-article">
						Kailash hostel indeed consists of students filled with enthusiasm
						and hostel spirit. There's a constant urge for everyone to be a part
						and take the culture in Kailash to great heights. Be it the BHM
						trophy, BRCA trophy, BSA, BSP, Kailash has year over year proven to
						be worthy and has given a fierce front. The sigil painting,
						beautifully decorating the back entrance of Kailash won the first
						prize. Not only this, Kailash stood second in BHM trophy in 2019.
						Each resident of Kailash has contributed to this journey and has
						been a part and parcel of these achievements. The participation from
						Kailash increased tremendously not just in terms of numbers but also
						in terms of people becoming aware of their talents through regular
						workshops and intra-hostels events On the cultural front, Kailash
						now has a fully air-conditioned dance room, a music room and
						computer room. The visitor's room has been upgraded with new
						furniture! Not just that, Kailash has its own library. Now students
						do not have to be a part of the hustle of grabbing a seat at the
						library. Also, the parlor of Kailash is a lifesaver at times of
						need. This development is not just seen on the cultural front, but
						also in terms of infrastructure and the consciousness among
						residents. The foundation of a brimming sports culture has been set
						up in the last 5 years. A badminton court, a basketball court, a
						gym, development of Kailash Activity Center (KAC, analogous to
						indoor sports room) with TT table, carrom and other indoor games,
						other sports' equipment of optimum quality are also introduced to
						promote the sports' spirit among the female candidates. With the new
						guidelines being enforced, the maintenance issues have been resolved
						with two dustbins for wet and dry waste everywhere, hand wash in
						washroom &amp; soap holders in bathrooms. And how can one forget
						about Kamlesh bhaiya's juice shop, which now serves fruit chats,
						delicious sandwiches, finger licking poha and everyone's all-time
						favorite Maggi. Kuldeep bhaiya's shop is now no less than a
						supermarket now with all the utilities available right at a 50-meter
						distance for students. Kailash is catering all the needs of its
						residents to the best and tries its level best to ensure full
						comfort and warmth of students so that they can easily stay in the
						premises of IIT Delhi.
					</p>
				</div>
				<div className="container py-5">
					<div className="heading pb-4 vision">
						<h1> Vision</h1>
						<p>
							To cater all the needs of its residents to make them feel Kailash
							like their second home and take the hostel culture to the sky.
						</p>
					</div>
				</div>
				<AutoPlay />

				<div id="mess-menu" className="container-fluid my-5">
					<div className="heading pb-4">Mess Menu</div>
					<div className="container menu my-2 text-center">
						<div id="marker"></div>
						<MyComponent />
					</div>
					<div id="menu-container" className="container mt-4">
						<div className="full-width">
							<div className="mess-menu-items row full-width ">
								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3 ">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Breakfast</div>
										</div>
										<div className="meal-time mt-2">07:30 AM - 09:30 AM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Brown Bread</li>
											<li>Amul Butter or Tops Fruit Jam</li>
											<li>Boiled Egg</li>
											<li>Tea</li>
										</div>
									</div>
								</div>
								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Lunch</div>
										</div>
										<div className="meal-time mt-2">12:00 PM - 02:00 PM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Aalu Chhole</li>
											<li>Roti, Rice & Daal</li>
											<li>Salad</li>
										</div>
									</div>
								</div>
								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Dinner</div>
										</div>
										<div className="meal-time mt-2">07:00 PM - 09:00 PM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Non-Veg : Chicken Qorma or Stew</li>
											<li>Veg : Mutter Paneer</li>
											<li>Roti, Rice & Daal</li>
										</div>
									</div>
								</div>
							</div>
							<div className="mess-menu-items row full-width d-none">
								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3 ">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Breakfast</div>
										</div>
										<div className="meal-time mt-2">07:30 AM - 09:30 AM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Puri & Sabzi</li>
											<li>Tea</li>
										</div>
									</div>
								</div>
								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Lunch</div>
										</div>
										<div className="meal-time mt-2">12:00 PM - 02:00 PM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Lauki Chana Daal</li>
											<li>Roti, Rice & Daal</li>
											<li>Salad</li>
										</div>
									</div>
								</div>

								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Dinner</div>
										</div>
										<div className="meal-time mt-2">07:00 PM - 09:00 PM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Mix Veg or Seasonal Veg (Dry)</li>
											<li>Roti, Rice & Daal</li>
										</div>
									</div>
								</div>
							</div>
							<div className="mess-menu-items row full-width d-none">
								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3 ">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Breakfast</div>
										</div>
										<div className="meal-time mt-2">07:30 AM - 09:30 AM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Brown Bread</li>
											<li>Omelette / Jam or Butter</li>
											<li>Tea</li>
										</div>
									</div>
								</div>
								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Lunch</div>
										</div>
										<div className="meal-time mt-2">12:00 PM - 02:00 PM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Rajma Aalu</li>
											<li>Roti, Rice & Daal</li>
											<li>Salad</li>
										</div>
									</div>
								</div>

								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Dinner</div>
										</div>
										<div className="meal-time mt-2">07:00 PM - 09:00 PM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Mutter Paneer</li>
											<li>Pulao</li>
											<li>Raita (Boondi)</li>
										</div>
									</div>
								</div>
							</div>
							<div className="mess-menu-items row full-width d-none">
								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3 ">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Breakfast</div>
										</div>
										<div className="meal-time mt-2">07:30 AM - 09:30 AM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Banana</li>
											<li>Boiled Egg</li>
											<li>Papa & Tea</li>
										</div>
									</div>
								</div>
								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Lunch</div>
										</div>
										<div className="meal-time mt-2">12:00 PM - 02:00 PM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Mix Vegetable</li>
											<li>Roti, Rice & Daal</li>
											<li>Salad</li>
										</div>
									</div>
								</div>

								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Dinner</div>
										</div>
										<div className="meal-time mt-2">07:00 PM - 09:00 PM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Aalu Tamatar / Seasonal Veg</li>
											<li>Roti, Rice & Daal</li>
											<li>Kheer / Halwa</li>
										</div>
									</div>
								</div>
							</div>
							<div className="mess-menu-items row full-width d-none">
								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3 ">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Breakfast</div>
										</div>
										<div className="meal-time mt-2">07:30 AM - 09:30 AM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Aalu Paratha</li>
											<li>Chatni</li>
											<li>Tea</li>
										</div>
									</div>
								</div>
								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Lunch</div>
										</div>
										<div className="meal-time mt-2">12:00 PM - 02:00 PM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Tahri / Veg Pulao (ALT)</li>
											<li>Raita (Boondi)</li>
											<li>Papad</li>
										</div>
									</div>
								</div>

								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Dinner</div>
										</div>
										<div className="meal-time mt-2">07:00 PM - 09:00 PM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Palak Paneer</li>
											<li>Roti, Rice & Daal</li>
											<li>Gulab Jamun / Fruit Cream</li>
										</div>
									</div>
								</div>
							</div>
							<div className="mess-menu-items row full-width d-none">
								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3 ">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Breakfast</div>
										</div>
										<div className="meal-time mt-2">07:30 AM - 09:30 AM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Brown Bread</li>
											<li>Amul Butter or Tops Fruit Jam</li>
											<li>Boiled Egg</li>
											<li>Tea</li>
										</div>
									</div>
								</div>
								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Lunch</div>
										</div>
										<div className="meal-time mt-2">12:00 PM - 02:00 PM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Aalu Palak / Seasonal Veg</li>
											<li>Roti, Rice & Daal</li>
											<li>Salad</li>
										</div>
									</div>
								</div>

								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Dinner</div>
										</div>
										<div className="meal-time mt-2">07:00 PM - 09:00 PM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Non Veg : Chicken Biryani</li>
											<li>Veg : Mutter Paneer & Pulao</li>
											<li>Raita (Boondi)</li>
										</div>
									</div>
								</div>
							</div>
							<div className="mess-menu-items row full-width d-none">
								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3 ">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Breakfast</div>
										</div>
										<div className="meal-time mt-2">07:30 AM - 09:30 AM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Anda Paratha / Aalu Paratha</li>
											<li>Chatni</li>
											<li>Tea</li>
										</div>
									</div>
								</div>
								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Lunch</div>
										</div>
										<div className="meal-time mt-2">12:00 PM - 02:00 PM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Mutter Paneer</li>
											<li>Roti, Rice & Daal</li>
											<li>Salad</li>
										</div>
									</div>
								</div>

								<div className="col d-flex">
									<div className="box mx-0 my-3 px-4 py-3">
										<div className="manual-flex">
											<div>
												<i
													className="fas fa-utensils pr-2"
													aria-hidden="true"
												></i>
											</div>
											<div className="extra-gap"></div>
											<div className="meal-name d-inline">Dinner</div>
										</div>
										<div className="meal-time mt-2">07:00 PM - 09:00 PM </div>
										<div className="mess-items mt-2 font-size-smaller">
											<li>Rajma Aalu</li>
											<li>Roti, Rice & Daal</li>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
