import "./payment.css";
// import React, { useState } from "react";
import Navbar from "../../Components_hub/Navbar/Navbar";
import Footer from "../../Components_hub/Footer/Footer";
export default function PrePaymentForm() {
	// const [formValue, setFormValue] = useState({
	// 	fname: "Mark",
	// 	lname: "Otto",
	// 	email: "",
	// 	city: "",
	// 	state: "",
	// 	zip: "",
	// });

	// const onChange = (e) => {
	// 	setFormValue({ ...formValue, [e.target.name]: e.target.value });
	// };
	return (
		<>
			<Navbar />
			<form
				className="container-sm"
				style={{
					marginTop: "2.5%",
					marginBottom: "4%",
					padding: "5%",
					paddingLeft: "10%",
					paddingRight: "10%",
				}}
			>
				<div class="row mb-3">
					<label for="fee-type" class="col-sm-2 col-form-label">
						Fee Type:
					</label>
					<div class="col-sm-10">
						<select class="form-select" id="fee-type" disabled>
							<option selected>Hostel</option>
						</select>
					</div>
				</div>
				<div class="row mb-3">
					<label for="student-id" class="col-sm-2 col-form-label">
						Student ID:
					</label>
					<div class="col-sm-10">
						<input
							type="text"
							class="form-control"
							id="student-id"
							style={{ border: "1px solid rgba(0,0,0,0.1)" }}
						/>
					</div>
				</div>
				<div class="row mb-3">
					<label for="education-level" class="col-sm-2 col-form-label">
						Level of Education:
					</label>
					<div class="col-sm-10">
						<select class="form-select" id="education-level">
							<option selected>Choose...</option>
							<option value="undergrad">Undergraduate</option>
							<option value="grad">Graduate</option>
						</select>
					</div>
				</div>
				<div class="row mb-3">
					<label for="program" class="col-sm-2 col-form-label">
						Choose Program:
					</label>
					<div class="col-sm-10">
						<select class="form-select" id="program">
							<option selected>Choose...</option>
							<option value="cs">Computer Science</option>
							<option value="eng">Engineering</option>
							<option value="med">Medicine</option>
						</select>
					</div>
				</div>
				<div class="row mb-3">
					<div class="col-sm-6">
						<label for="name" class="form-label">
							Name:
						</label>
						<input
							type="text"
							class="form-control"
							id="name"
							style={{ border: "1px solid rgba(0,0,0,0.1)" }}
						/>
					</div>
					<div class="col-sm-6">
						<label for="roll-no" class="form-label">
							Roll No:
						</label>
						<input
							type="text"
							class="form-control"
							id="roll-no"
							style={{ border: "1px solid rgba(0,0,0,0.1)" }}
						/>
					</div>
				</div>
				<div class="row mb-3">
					<div class="col-sm-6">
						<label for="dob" class="form-label">
							Date of Birth:
						</label>
						<input type="date" class="form-control" id="dob" />
					</div>
					<div class="col-sm-6">
						<label for="hostel-name" class="form-label">
							Hostel Name:
						</label>
						<select class="form-select" id="hostel-name">
							<option selected>Choose...</option>
							<option value="north">FRK</option>
							<option value="south">BR Ambedkar</option>
							<option value="south">SRK</option>
						</select>
					</div>
				</div>
				<div class="row mb-3">
					<label for="fee-type" class="col-sm-2 col-form-label">
						Payment Option:
					</label>
					<div class="col-sm-10">
						<select class="form-select" id="hostel-name">
							<option selected>Choose...</option>
							<option value="debit">Debit Card</option>
							<option value="credi Card">Credit Card</option>
							<option value="upi">UPI</option>
						</select>
					</div>
				</div>
				<a href="/PaymentSubmit">
					{/* <button className="btn btn-outline-secondary">
						Proceed for payment
					</button> */}
					<div className="manual-div-btn">Proceed for payment</div>
				</a>
			</form>
			<hr />
			<Footer />
		</>
	);
}
