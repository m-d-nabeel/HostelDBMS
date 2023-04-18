import React, { useState } from "react";
import "./Login.css";
import Navbar from "../../Components_hub/Navbar/Navbar";
import AuthService from "../../services/auth_service";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [username, setUsername] = useState("");
	const [pass, setPass] = useState("");
	const navigate = useNavigate();
	const handleLogin = async (e) => {
		e.preventDefault();

		// this.setState({
		// 	message: "",
		// 	loading: true,
		// });

		// this.form.validateAll();

		// if (this.checkBtn.context._errors.length === 0) {
		// 	.then(
		// 		() => {
		// 			this.props.router.navigate("/Dashboard");
		// 			window.location.reload();
		// 		},
		// 		(error) => {
		// 			const resMessage =
		// 				(error.response &&
		// 					error.response.data &&
		// 					error.response.data.message) ||
		// 				error.message ||
		// 				error.toString();AuthService.login(this.username, this.pass)

		// 			this.setState({
		// 				loading: false,
		// 				message: resMessage,
		// 			});
		// 		}
		// 	);
		// } else {
		// 	this.setState({
		// 		loading: false,
		// 	});
		// }
		const response = await AuthService.login(username, pass);
		navigate("/Dashboard");
	};
	return (
		<>
			<Navbar />
			<div className="login-container">
				<form action="" onSubmit={handleLogin}>
					<h1 className="login-head">Login</h1>
					<label for="id">ID</label>
					<input
						type="text"
						placeholder="Enter your ID"
						id="id"
						name="id"
						required
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<label for="password">Password</label>
					<input
						type="password"
						placeholder="Enter your password"
						id="password"
						name="password"
						required
						value={pass}
						onChange={(e) => setPass(e.target.value)}
					/>
					<button className="login-page-bt" type="submit">
						Login
					</button>
				</form>
			</div>
		</>
	);
};

export default Login;
