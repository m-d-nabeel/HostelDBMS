import React, { Component } from "react";
import PDFViewer from "./pdfRender";
import { hover } from "@testing-library/user-event/dist/hover";
class MyApp extends Component {
	state = {
		selectedHostel: null,
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const selectedHostel = event.target.hostel.value;
		this.setState({ selectedHostel });
	};

	render() {
		const { selectedHostel } = this.state;

		return (
			<>
				<form
					className="container d-flex justify-content-around hostel-list-num"
					onSubmit={this.handleSubmit}
				>
					<label style={{ paddingTop: "10px" }} htmlFor="hostel">
						Select List:
					</label>
					<select id="hostel" name="hostel">
						<option value="https://www.jmi.ac.in/upload/hostel/hbr_list1_2023january31.pdf">
							Hostel Admission 2022-23 (LIST No. 01)
						</option>
						<option value="https://www.jmi.ac.in/upload/hostel/hbr_list2_2023january31.pdf">
							Hostel Admission 2022-23 (LIST No. 02)
						</option>
						<option value="https://www.jmi.ac.in/upload/hostel/hbr_list3_2023february24.pdf">
							Hostel Admission 2022-23 (LIST No. 03)
						</option>
						<option value="https://www.jmi.ac.in/upload/hostel/hbr_list4_2023march27.pdf">
							Hostel Admission 2022-23 (LIST No. 04)
						</option>
					</select>
					<br />
					<input className="submit-button" type="submit" value="Submit" />
				</form>
				<br />

				{selectedHostel && (
					<div className="container" style={{ width: "60vw", height: "100vh" }}>
						<PDFViewer fileUrl={selectedHostel} />
						<div
							className="container"
							style={{
								backgroundColor: "#323639",
								width: "58.42vw",
								height: "2px",
							}}
						></div>
					</div>
				)}
			</>
		);
	}
}

export default MyApp;
