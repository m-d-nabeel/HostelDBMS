import { useEffect, useState } from "react";
import "./Dashboard.css";
import Footer from "../../Components_hub/Footer/Footer";
import axios from "axios";

const search = () => {
	const names = document.querySelectorAll(".student-details");
	names.forEach((name) => {
		if (!name.classList.contains("Rumman")) {
			name.classList.add("d-none");
		}
	});
};

const Dashboard = () => {
	const [searchStudent, setSearchstudent] = useState("");
	const [students, setStudents] = useState([]);

	const fetchStudents = async () => {
		const { data } = await axios.post(
			"https://api-dbms.waferclabs.com/student/getall?page=1&per_page=10&sort_by=student_id&order=asc"
		);

		setStudents(data.students);
	};

	useEffect(() => {
		fetchStudents();
	}, []);

	//   const Students = [
	//     { name: "Rumman", date: "Mar 25, 2023", status: "paid", reg_no: "123" },
	//     { name: "Rumman", date: "Mar 25, 2023", status: "paid", reg_no: "123" },
	//     { name: "Rumman", date: "Mar 25, 2023", status: "paid", reg_no: "123" },
	//     { name: "Rumman", date: "Mar 25, 2023", status: "paid", reg_no: "123" },
	//     { name: "Rumman", date: "Mar 25, 2023", status: "paid", reg_no: "123" },
	//   ];

	return (
		<>
			<header>
				<h1>Hostel Dashboard</h1>
			</header>
			<section className="overview">
				<div className="overview-card">
					<div className="card-header">
						<h2>Total Students </h2>
						<img
							src="https://img.icons8.com/ios-glyphs/30/000000/money.png"
							alt="total"
						/>
					</div>
					<div className="card-body">
						<h3>3000</h3>
					</div>
				</div>
				<div className="overview-card">
					<div className="card-header">
						<h2>Received Payments</h2>
						<img
							src="https://img.icons8.com/ios-glyphs/30/000000/purchase-order.png"
							alt="received"
						/>
					</div>
					<div className="card-body">
						<h3>1,000</h3>
					</div>
				</div>
				<div className="overview-card">
					<div className="card-header">
						<h2>Payments Pending</h2>
						<img
							src="https://img.icons8.com/ios-glyphs/30/000000/purchase-order.png"
							alt="pendngs"
						/>
					</div>
					<div className="card-body">
						<h3>200</h3>
					</div>
				</div>
			</section>
			<section className="orders">
				<div>
					{/* <h2>Recent Payments</h2>
					<form className="form-search container" action="#">
						<div className="d-flex justify-content-center">
							<input type="text" placeholder="Search..." name="search" />
							<button className="button-search" type="submit">
								Submit
							</button>
						</div>
					</form> */}
					<nav
						className="navbar navbar-expand-lg  my-nav "
						data-bs-theme="dark"
					>
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
										<div className="active nav-link">
											<h3>Recent Payments</h3>
										</div>
									</li>
								</ul>
								<div className="d-flex justify-content-center">
									<input type="text" placeholder="Search..." />
									<button
										className="btn btn-outline-secondary btn-dash"
										type="Search"
										onClick={search}
									>
										<div>Search</div>
									</button>
								</div>
							</div>
						</div>
					</nav>
				</div>

				<table>
					<thead>
						<tr>
							<th>Registration Number</th>
							<th>Student Name</th>
							<th>Date</th>
							<th>Status</th>
							<th className="d-flex justify-content-center">View Profile</th>
						</tr>
					</thead>
					<tbody>
						{students.map((student) => (
							<tr className="student-details Rumman">
								<td>#{student.student_id}</td>
								<td>{student.student_name}</td>
								<td>March 25, 2023</td>
								<td>
									<span className="status new">PAID</span>
								</td>
								<td>
									<a
										href={`/Profile/${student.student_id}`}
										className="d-flex justify-content-center"
									>
										<i className="fa-solid fa-eye"></i>
									</a>
								</td>
							</tr>
						))}
						{/* <tr className="student-details Nabeel">
							<td>#12344</td>
							<td>Nabeel Ashar</td>
							<td>Mar 24, 2023</td>
							<td>
								<span className="status shipped">Pending</span>
							</td>
							<td>
								<a href="/Profile" className="d-flex justify-content-center">
									<i className="fa-solid fa-eye"></i>
								</a>
							</td>
						</tr>
						<tr className="Hammad student-details">
							<td>#12343</td>
							<td className="Hammad">Hammad Akram</td>
							<td>Mar 23, 2023</td>
							<td>
								<span className="status delivered">Not Paid</span>
							</td>
							<td>
								<a href="/Profile" className="d-flex justify-content-center">
									<i className="fa-solid fa-eye"></i>
								</a>
							</td>
						</tr>
						<tr className="Azeem student-details">
							<td>#12342</td>
							<td className="Azeem">Azeem sapola</td>
							<td>Mar 22, 2023</td>
							<td>
								<span className="status cancelled">Cancelled</span>
							</td>
							<td>
								<a href="/Profile" className="d-flex justify-content-center">
									<i className="fa-solid fa-eye"></i>
								</a>
							</td>
						</tr> */}
					</tbody>
				</table>
			</section>
      <Footer />
		</>
	);
};

export default Dashboard;
