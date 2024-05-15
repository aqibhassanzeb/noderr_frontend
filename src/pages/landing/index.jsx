import React, { useState } from "react";
import "./index.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createApiContext } from "../../context/apiContext";
import Card from "react-bootstrap/Card";
import { images } from "../../images";

const Landing = () => {
	const [email, setEmail] = useState("");
	const { signupForBetaLaunch } = React.useContext(createApiContext);

	//email validation fn
	function validateEmail(email) {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	}

	//signup for beta launch fn
	const handleSubmit = async () => {
		if (validateEmail(email)) {
			const data = await signupForBetaLaunch({ email: email });
			if (data?.success) {
				toast.success("Your have been signed up for beta launch!", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			}
			setEmail("");
		} else {
			toast.error("Email is not valid.");
		}
	};
	return (
		<div className="landing_page">
			<Header />
			<div className="about">
				<h2 className="about_heading">Next-Gen Blockchains</h2>
				{/* <h3 className='about_subheading'>One click node deployment</h3> */}
				<p>
					Noderr simplifies the world of blockchain, making nodes accessible to
					everyone. With effortless deployment, you can unlock exclusive early
					adopter rewards through our cutting-edge decentralized AI Mesh-work
					Dashboard. Join us in shaping the future of blockchain accessibility
				</p>
				<div className="input_container">
					<label htmlFor="email">sign up for Beta launch</label>
					<input
						type="email"
						id="email"
						placeholder="noderrbeta@noderr.xyz"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<button
					type="button"
					className="submit_btn"
					onClick={() => {
						handleSubmit();
					}}
				>
					Sign-Up
				</button>

				<h2 className="active_heading"> Active Developments</h2>
				<div
					style={{
						display: "flex",
						justifyContent: "space-around",
						width: "100%",
					}}
				>
					<a href="https://www.allora.network" target="_blank">
						<Card
							style={{
								width: "100%",
								backgroundColor: "rgba(0, 0, 0, 0.3)",
								margin: 5,
								paddingTop: 5,
							}}
						>
							<Card.Title
								style={{
									textAlign: "center",
									fontSize: 24,
									fontWeight: "bold",
								}}
							>
								Allora
							</Card.Title>
							<Card.Img
								className="active_images"
								variant="top"
								src={images.Allora}
								alt="Allora image"
							/>
						</Card>
					</a>

					<a href="https://waku.org" target="_blank">
						<Card
							style={{
								width: "100%",
								backgroundColor: "rgba(0, 0, 0, 0.3)",
								margin: 5,
								paddingTop: 5,
							}}
						>
							<Card.Title
								style={{
									textAlign: "center",
									fontSize: 24,
									fontWeight: "bold",
								}}
							>
								Waku
							</Card.Title>
							<Card.Img
								className="active_images"
								variant="top"
								src={images.Waku}
								alt="Waku image"
							/>
						</Card>
					</a>

					<a href="https://ritual.net/about" target="_blank">
						<Card
							style={{
								width: "100%",
								backgroundColor: "rgba(0, 0, 0, 0.3)",
								margin: 5,
								paddingTop: 5,
							}}
						>
							<Card.Title
								style={{
									textAlign: "center",
									fontSize: 24,
									fontWeight: "bold",
								}}
							>
								Ritual
							</Card.Title>
							<Card.Img
								className="active_images"
								variant="top"
								src={images.Ritual}
								alt="Ritual.net image"
							/>
						</Card>
					</a>
				</div>

				<div
					style={{
						display: "flex",
						justifyContent: "space-around",
						width: "100%",
					}}
				>
					<a href="https://fuel.network/" target="_blank">
						<Card
							style={{
								width: "100%",
								backgroundColor: "rgba(0, 0, 0, 0.3)",
								margin: 5,
								paddingTop: 5,
							}}
						>
							<Card.Title
								style={{
									textAlign: "center",
									fontSize: 24,
									fontWeight: "bold",
								}}
							>
								Fuel
							</Card.Title>
							<Card.Img
								className="active_images1"
								variant="top"
								src={images.fuel}
								alt="fuel.network image"

							/>
						</Card>
					</a>

					<a href="https://www.lavanet.xyz" target="_blank">
						<Card
							style={{
								width: "100%",
								backgroundColor: "rgba(0, 0, 0, 0.3)",
								margin: 5,
								paddingTop: 5,
							}}
						>
							<Card.Title
								style={{
									textAlign: "center",
									fontSize: 24,
									fontWeight: "bold",
								}}
							>
								Lava
							</Card.Title>
							<Card.Img
								className="active_images1"
								variant="top"
								src={images.Lava}
								alt="lavanet image"
							/>
						</Card>
					</a>

					<a href="https://wardenprotocol.org" target="_blank">
						<Card
							style={{
								width: "100%",
								backgroundColor: "rgba(0, 0, 0, 0.3)",
								margin: 5,
								paddingTop: 5,
							}}
						>
							<Card.Title
								style={{
									textAlign: "center",
									fontSize: 24,
									fontWeight: "bold",
								}}
							>
								Warden
							</Card.Title>
							<Card.Img
								className="active_images1"
								variant="top"
								src={images.Warden}
								alt="wardenprotocol image"
							/>
						</Card>
					</a>
				</div>
			</div>
			<ToastContainer />
			<Footer />
		</div>
	);
};

export default Landing;
