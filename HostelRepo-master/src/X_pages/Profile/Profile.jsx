import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";
import Footer from "../../Components_hub/Footer/Footer";

const Profile = () => {
	
	const [stduentData, setStudentData] = useState(null);
	let urlParams = useParams();

	const getStudentsDetail = async () => {
		const { data } = await axios.post(
			`https://api-dbms.waferclabs.com/search/?student_id=${urlParams.studentId}`
		);
		setStudentData(data.records[0]);
	};
	useEffect(() => {
		getStudentsDetail();
	}, []);
	return (
		<>
		
			<div className="profile-page">
				{/* <div className="profile-section section-1">
					<div
						class="profile-image"
						style={{ height: "300px", width: "300px" }}
					>
						<img
							src="https://source.unsplash.com/random?profile-face"
							alt=""
							class="profile-img-blur h-100"
						/>
						<img
							src="https://source.unsplash.com/random?profile-face"
							alt=""
							class="profile-img-main h-100"
							style={{ objectFit: "cover" }}
						/>
					</div>
					<h1>{stduentData && stduentData.student_name}</h1>
				</div> */}
				<div class="profile-header bg-dark text-white py-5" style={{marginLeft:"-5%",marginRight:"-5%",marginTop:"2%"}}>
					<div class="container">
						<div class="row align-items-center">
							<div class="col-md-4">
								<div class="profile-image rounded-circle overflow-hidden position-relative">
									<img
										src="https://source.unsplash.com/random?face?male"
										alt="Profile"
										class="w-100 h-100"
									/>
									<div class="profile-image-overlay position-absolute top-0 start-0 w-100 h-100 bg-gradient"></div>
									{/* <div class="profile-image-button position-absolute bottom-0 start-50 translate-middle-x">
										<button class="btn btn-secondary btn-sm px-3 py-2">
											Change picture
										</button>
									</div> */}
								</div>
							</div>
							<div class="col-md-8 mt-4 mt-md-0">
								<h1 class="fw-bold mb-0">
									{stduentData && stduentData.student_name}
								</h1>
								<p class="lead mb-0">
									{stduentData && stduentData.student_department}
								</p>
								<ul class="list-inline mt-3">
									<li class="list-inline-item me-4">
										<i class="fa fa-home me-2"></i>
										{stduentData && stduentData.student_address}
									</li>
									<li class="list-inline-item me-4">
										<i class="fa fa-phone me-2"></i>
										{stduentData && stduentData.student_phone}
									</li>
									<li class="list-inline-item">
										<i class="fa fa-envelope me-2"></i>
										{stduentData && stduentData.student_email}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="profile-section section-2" >
					<h2 class="fw-bold mb-4 text-uppercase">Basic Details</h2>
					<ul class="list-group list-group-flush">
						<li class="list-group-item d-flex justify-content-between align-items-center">
							Hostel Name:
							<span>{stduentData && stduentData.hostel_name}</span>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center">
							Student ID:
							<span>{stduentData && stduentData.student_id}</span>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center">
							Course:
							<span>{stduentData && stduentData.student_department}</span>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center">
							Student Year:
							<span>{stduentData && stduentData.student_year}</span>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center">
							Room Number:
							<span>{stduentData && stduentData.room_number}</span>
						</li>
					</ul>
				</div>
				<div class="profile-section section-3">
					<h2 class="fw-bold mb-4 text-uppercase">Personal Details</h2>
					<ul class="list-group list-group-flush">
						<li class="list-group-item d-flex justify-content-between align-items-center">
							Address:
							<span>{stduentData && stduentData.student_address}</span>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center">
							Phone Number:
							<span>{stduentData && stduentData.student_phone}</span>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center">
							Email:
							<span>{stduentData && stduentData.student_email}</span>
						</li>
					</ul>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Profile;
