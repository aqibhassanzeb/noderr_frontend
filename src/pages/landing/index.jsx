import React, { useState } from "react";
import "./index.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createApiContext } from "../../context/apiContext";
import Card from "react-bootstrap/Card";
import { images } from "../../images";
import "./../../../src/components/css/noderr.webflow.css";
import dashboardImage from "./../../assets/images/Login2.svg";
import NullLink from "./../../assets/images/nullwhiteLogo.svg";
import nubitImg from './../../assets/images/nubit.png';
import alloraImg from './../../assets/images/Untitled-design-19.png';
import wakuImg from './../../assets/images/Untitled-design-18.png';
import fuelImg from './../../assets/images/Untitled-design-20.png';
import wardenImg from './../../assets/images/Untitled-750-x-250-px.png';
import zeroGAiImg from './../../assets/images/Untitled-750-x-250-px-1.png';
import ritualImg from './../../assets/images/sad.png';
import particleImg from './../../assets/images/logo-top.webp';
import nullLinkImg from './../../assets/images/nullwhiteLogo.png'; // Update if you have a different image for NullLink

import { Link, Outlet } from "react-router-dom";
const Landing = () => {
	const [email, setEmail] = useState("");
	const { signupForBetaLaunch } = React.useContext(createApiContext);

	//email validation fn
	function validateEmail(email) {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	}

	const projectData = [
		{
		  href: "https://www.nubit.org/",
		  alt: "Nubit",
		  imgSrc: nubitImg,
		  borderClass: "border-red-600",
		},
		{
		  href: "http://www.allora.network",
		  alt: "Allora Network",
		  imgSrc: alloraImg,
		},
		{
		  href: "http://waku.org",
		  alt: "Waku",
		  imgSrc: wakuImg,
		},
		{
		  href: "http://fuel.network",
		  alt: "Fuel Network",
		  imgSrc: fuelImg,
		},
		{
		  href: "http://wardenprotocol.org",
		  alt: "Warden Protocol",
		  imgSrc: wardenImg,
		},
		{
		  href: "http://0g.ai",
		  alt: "0G AI",
		  imgSrc: zeroGAiImg,
		},
		{
		  href: "https://ritual.net/",
		  alt: "Ritual",
		  imgSrc: ritualImg,
		},
		{
		  href: "https://particle.network/",
		  alt: "Particle Network",
		  imgSrc: particleImg,
		  className: "w-auto h-full",
		},
		{
		  href: "https://www.nulink.org/",
		  alt: "Nulink",
		  imgSrc: nullLinkImg,
		  className: "w-[80%] h-[80%]",
		},
	  ];
	  
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
		<>
			{/* <div data-animation="default" data-collapse="medium" data-duration="0" data-easing="ease" data-easing2="ease" role="banner" class="fn-navbar-box-3 w-nav"></div> */}
			{/* <div data-animation="default" data-collapse="medium" data-duration={0} data-easing="ease" data-easing2="ease" role="banner" className="fn-navbar-box-5 w-nav">
				<div className="fn-navbar-container-box-5">
					<a href="http://noderr.xyz" className="w-inline-block"><img src={require("./../../assets/images/Word.png")} loading="lazy" width={180} alt className="image-16" /></a>
					<a href="#" className="fn-brand-box-5 side-margin w-nav-brand" />
					<a href="#" className="w-inline-block"><img src="images/Login2.svg" loading="lazy" width="NaN" alt /></a>
					<a href="https://noderr.xyz/dashboard" target="_blank" className="link-block w-inline-block"><img src={require("./../../assets/images/Login2.svg")} loading="lazy" width="76.5" alt className="image-18" /></a>
				</div>
			</div> */}

			<div>
				<div className="flex justify-between items-center px-6 py-2 bg-[#0F1213]">
					<div>
						<img
							src={require("./../../assets/images/Word.png")}
							alt="noderr logo"
							className="w-24 md:w-48 "
						/>
					</div>

					<div className="flex items-center justify-end sm:justify-between space-x-4 w-[80%]  md:w-[40%] lg:w-[30%]">
						<div className=" flex items-center px-0 xl:px-4	 gap-2 md:gap-10">
							<div className="">
								<Link to="/about-us" className="text-[#fda925] text-[10px]  font-bold md:text-lg
								hover:text-[#edc079]">
									ABOUT
								</Link>
							</div>
							<div className="">
								<Link to="/lite-paper" className="text-[#fda925] text-[10px] font-bold md:text-lg
								hover:text-[#edc079]
								">LITE PAPER</Link>
							</div>
						</div>
						<a
							href="https://noderr.xyz/dashboard"
							target="_blank"
							className="link-block w-inline-block"
						>
							<img
								src={dashboardImage}
								loading="lazy"
								alt
								className="image-18 w-16 "
							/>
						</a>
					</div>
				</div>
			</div>

			<div className="fn-section-off-black">
				<div className="fn-container-grid">
					<h1
						id="w-node-e4c564fd-32ed-5e7c-2d3e-8973152622a5-ee31794f"
						className="fn-heading-jambo"
					>
						<span className="fn-span-color-text">
							Next-Gen Blockchains
							<br />
						</span>
						<span className="text-span-4">Effortless Node Deployment</span>
					</h1>
					<div
						id="w-node-_5ac2776a-5426-ae9d-fdf9-202a79f9eb70-ee31794f"
						className="code-embed w-embed w-iframe"
					>
						<iframe
							src="https://6661832cd7d66003aeb89811--deft-unicorn-90d20a.netlify.app/new-core.html"
							// src="https://6667f4292425d1b2bcff60ed--rococo-squirrel-0b769d.netlify.app/new-core.html"
							style={{ border: "none" }}
							height="100%"
							width="100%"
							allowFullScreen
						/>
					</div>
				</div>
			</div>

			{/* <div className="fn-section">
				<div className="fn-container-grid">
					<div
						id="w-node-_857f3205-0075-a36a-595d-f2211025a53b-ee31794f"
						className="div-block-3"
					>
						<h2
							id="w-node-_857f3205-0075-a36a-595d-f2211025a53c-ee31794f"
							className="heading-2"
						>
							Active Developments
						</h2>
					</div>
					<a
						id="w-node-_857f3205-0075-a36a-595d-f2211025a540-ee31794f"
						href="https://www.nubit.org/"
						target="_blank"
						className="fn-features-card w-inline-block"
					>
						<img
							src={require("./../../assets/images/nubit.png")}
							loading="lazy"
							alt
							className="image-3"
						/>
					</a>
					<a
						id="w-node-_857f3205-0075-a36a-595d-f2211025a54a-ee31794f"
						href="http://www.allora.network"
						target="_blank"
						className="fn-features-card w-inline-block"
					>
						<img
							src={require("./../../assets/images/Untitled-design-19.png")}
							loading="lazy"
							sizes="(max-width: 479px) 86vw, 100vw"
							alt
							className="image-2"
						/>
					</a>
					<a
						id="w-node-_857f3205-0075-a36a-595d-f2211025a554-ee31794f"
						href="http://waku.org"
						target="_blank"
						className="fn-features-card w-inline-block"
					>
						<img
							src={require("./../../assets/images/Untitled-design-18.png")}
							loading="lazy"
							alt
							className="image"
						/>
					</a>
					<a
						id="w-node-_857f3205-0075-a36a-595d-f2211025a55e-ee31794f"
						href="http://fuel.network "
						target="_blank"
						className="fn-features-card w-inline-block"
					>
						<img
							src={require("./../../assets/images/Untitled-design-20.png")}
							loading="lazy"
							alt
							className="image-4"
						/>
					</a>
					<a
						id="w-node-_28a941e5-85f9-17fe-030a-67211cf7504c-ee31794f"
						href="http://wardenprotocol.org"
						target="_blank"
						className="fn-features-card w-inline-block"
					>
						<img
							src={require("./../../assets/images/Untitled-750-x-250-px.png")}
							loading="lazy"
							alt
							className="image-4"
						/>
					</a>
					<a
						id="w-node-b17628f8-d286-7006-adf0-2bc7c74061aa-ee31794i"
						href="http://0g.ai"
						target="_blank"
						className="fn-features-card w-inline-block"
					>
						<img
							src={require("./../../assets/images/Untitled-750-x-250-px-1.png")}
							loading="lazy"
							alt
							className="image-4"
						/>
					</a>
					<a
						id="w-node-b17628f8-d286-7006-adf0-2bc7c74061aa-ee31794j"
						href="https://ritual.net/ "
						target="_blank"
						className="fn-features-card w-inline-block"
					>
						<img
							src={require("./../../assets/images/sad.png")}
							loading="lazy"
							alt
							className="image-4 "
						/>
					</a>
					<a
						id="w-node-b17628f8-d286-7006-adf0-2bc7c74061aa-ee31794k"
						href="https://particle.network/"
						target="_blank"
						className="fn-features-card w-inline-block"
					>
						<img
							// src={NullLink} 
							src={require("./../../assets/images/logo-top.webp")}
							loading="lazy"
							alt
							className="image-4 w-auto h-[100%] py-4 my-[18px] px-8 md:px-4 md:py-2 md:my-0 sm:py-8 sm:my-4 "
						/>
					</a>
					<a
						id="w-node-b17628f8-d286-7006-adf0-2bc7c74061aa-ee31794l"
						href="https://www.nulink.org/"
						target="_blank"
						className="fn-features-card w-inline-block "
					>
						<img
							src={NullLink} 
							// src={require("./../../assets/images/logo-top.webp")}
							loading="lazy"
							alt
							className="image-4  my-2 md:my-auto"
						/>
					</a>
				</div>
			</div> */}
			<div class="fn-footer-advence-2">
    <div className="width-fix w-auto md:w-[98%] lg:w-[98%] xl:w-[90%] 2xl:w-[60%]">
	<div className="flex flex-col pt-0 md:pt-5">
        <div className="mb-4 flex justify-center">
            <h2 className="text-2xl font-bold">Active Developments</h2>
        </div>
{/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-4">

        <a href="https://www.nubit.org/" target="_blank" className="fn-features-card block">
            <img src={require("./../../assets/images/nubit.png")} loading="lazy" alt="Nubit" className="w-full h-auto" />
        </a>
        <a href="http://www.allora.network" target="_blank" className="fn-features-card block">
            <img src={require("./../../assets/images/Untitled-design-19.png")} loading="lazy" sizes="(max-width: 479px) 86vw, 100vw" alt="Allora Network" className="w-full h-auto" />
        </a>
        <a href="http://waku.org" target="_blank" className="fn-features-card block">
            <img src={require("./../../assets/images/Untitled-design-18.png")} loading="lazy" alt="Waku" className="w-full h-auto" />
        </a>
        <a href="http://fuel.network" target="_blank" className="fn-features-card block">
            <img src={require("./../../assets/images/Untitled-design-20.png")} loading="lazy" alt="Fuel Network" className="w-full h-auto" />
        </a>
        <a href="http://wardenprotocol.org" target="_blank" className="fn-features-card block">
            <img src={require("./../../assets/images/Untitled-750-x-250-px.png")} loading="lazy" alt="Warden Protocol" className="w-full h-auto" />
        </a>
        <a href="http://0g.ai" target="_blank" className="fn-features-card block">
            <img src={require("./../../assets/images/Untitled-750-x-250-px-1.png")} loading="lazy" alt="0G AI" className="w-full h-auto" />
        </a>
        <a href="https://ritual.net/" target="_blank" className="fn-features-card block">
            <img src={require("./../../assets/images/sad.png")} loading="lazy" alt="Ritual" className="w-full h-auto" />
        </a>
        <a href="https://particle.network/" target="_blank" className="fn-features-card block">
            <img src={require("./../../assets/images/logo-top.webp")} loading="lazy" alt="Particle Network" className="w-auto " />
        </a>
        <a href="https://www.nulink.org/" target="_blank" className="fn-features-card block">
            <img src={NullLink} loading="lazy" alt="Nulink" className="w-full " />
        </a>
</div> */}
<div>
	
</div>
<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
    {projectData.map((project, index) => (
      <a
        key={index}
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`fn-features-card h-32 sm:h-32 md:h-40 flex justify-center items-center ${project.borderClass || ""}`}
      >
        <img
          src={project.imgSrc}
          loading="lazy"
          alt={project.alt}
          className={`w-full h-full flex justify-center items-center ${project.className || ""}`}
        />
      </a>
    ))}
  </div>
	</div>
    </div>
</div>


			<div className="fn-footer-advence-2  w-auto md:w-[98%] lg:w-[98%] xl:w-[90%] 2xl:w-[60%]">
				<div className="fn-container-grid-4 ">
					<div
						id="w-node-_22aaa6c3-d6e7-05e0-eec1-5d107e13b5d1-ee31794f"
						className="fn-footer-wrapper-2 "
					>
						<h2
							id="w-node-_22aaa6c3-d6e7-05e0-eec1-5d107e13b5d2-ee31794f"
							className="fn-heading-7"
						>
							Noderr simplifies the world of blockchain, making nodes accessible
							to everyone. With effortless deployment, you can unlock exclusive
							early adopter rewards through our cutting-edge decentralized AI
							Mesh-work Dashboard.
							<br />
						</h2>
						<div
							id="w-node-_22aaa6c3-d6e7-05e0-eec1-5d107e13b5d4-ee31794f"
							className="fn-links-wrapper-2"
						>
							<a
								href="https://twitter.com/NoderrNoderrxyz?t=ur-xp14gkfRZiduGgzIqVA&s=09"
								target="_blank"
								className="w-inline-block"
							>
								<img
									src={require("./../../assets/images/2-p-500.png")}
									loading="lazy"
									style={{ width: "46px" }}
									alt
									srcSet={require("./../../assets/images/2-p-500.png")}
									className="image-14"
								/>
							</a>

							<a
								href="https://discord.gg/noderr"
								target="_blank"
								className="w-inline-block"
							>
								<img
									src={require("./../../assets/images/3670325.png")}
									loading="lazy"
									style={{ width: "46px" }}
									alt
									srcSet={require("./../../assets/images/3670325.png")}
									className="image-14"
								/>
							</a>
							<a
								href="https://t.me/NoderrSupp"
								target="_blank"
								className="w-inline-block"
							>
								<img
									style={{ width: "46px" }}
									src={require("./../../assets/images/telegram-black-icon.webp")}
									loading="lazy"
									alt
									className="image-13"
								/>
							</a>
							<a
								href="https://instagram.com/Noderrxyz"
								target="_blank"
								className="w-inline-block"
							>
								<img
									src={require("./../../assets/images/1.png")}
									loading="lazy"
									style={{ width: "46px" }}
									alt
									className="image-14"
								/>
							</a>
						</div>
						<div
							id="w-node-_22aaa6c3-d6e7-05e0-eec1-5d107e13b5e9-ee31794f"
							className="fn-footer-form-2 w-form"
						>
							<form
								id="wf-form-Newslatter-Form"
								name="wf-form-Newslatter-Form"
								data-name="Newslatter Form"
								method="get"
								className="fn-footer-form-wrapper-2"
								data-wf-page-id="662f95d496436c37ee31794f"
								data-wf-element-id="22aaa6c3-d6e7-05e0-eec1-5d107e13b5ea"
							>
								<label
									htmlFor="Email-Newslatter-2"
									id="w-node-_22aaa6c3-d6e7-05e0-eec1-5d107e13b5eb-ee31794f"
									className="form-label-dark-2"
								>
									Subscribe to our Newsletter
								</label>
								<input
									className="fn-field-dark-2 w-node-_22aaa6c3-d6e7-05e0-eec1-5d107e13b5ed-ee31794f w-input"
									maxLength={256}
									name="Email-Newslatter-2"
									data-name="Email Newslatter 2"
									placeholder="Your Email "
									type="email"
									id="Email-Newslatter-2"
									required
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
								<button
									type="button"
									id="w-node-_22aaa6c3-d6e7-05e0-eec1-5d107e13b5ee-ee31794f"
									className="fn-button-dark-form-2 w-button"
									onClick={() => {
										handleSubmit();
									}
									}
								>
									Subscribe
								</button>
								{/* <input type="submit" data-wait="Please wait..." id="w-node-_22aaa6c3-d6e7-05e0-eec1-5d107e13b5ee-ee31794f" className="fn-button-dark-form-2 w-button" defaultValue="Subscribe" /> */}
							</form>
							{/* <div className="fn-success-message-2 w-form-done">
								<div>Thank you! Your submission has been received!</div>
							</div>
							<div className="fn-error-message-2 w-form-fail">
								<div>Something went wrong, check the validity of your information.</div>
							</div> */}
						</div>
						<img
							className="image-17"
							src={require("./../../assets/images/Noder.png")}
							alt="noderr stretched"
							sizes="100vw"
							id="w-node-_22aaa6c3-d6e7-05e0-eec1-5d107e13b5f5-ee31794f"
							loading="lazy"
							srcSet={require("./../../assets/images/Noder.png")}
						/>
					</div>
					<div
						id="w-node-_22aaa6c3-d6e7-05e0-eec1-5d107e13b5f6-ee31794f"
						className="fn-legal-links-wrapper-2"
					>
						<a
							href="http://noderr.xyz/privacy-policy"
							target="_blank"
							className="fn-footer-legal-link-2"
						>
							Privacy Policy
						</a>
						<a
							href="http://noderr.xyz/term-of-use"
							target="_blank"
							className="fn-footer-legal-link-2"
						>
							Terms &amp; Conditions
						</a>
					</div>
					<div
						id="w-node-_22aaa6c3-d6e7-05e0-eec1-5d107e13b5fd-ee31794f"
						className="fn-footer-copyright-2"
					>
						NODERR, 2024
					</div>
				</div>
				<Outlet />
			</div>

			{/* <iframe src="https://noderr.webflow.io/"
				style={{
					width: "100%",
					height: "100vh",
					border: "none",
					overflow: "hidden",
				}}
				title="noderr"
				frame-ancestors="none"
			>
			</iframe> */}
		</>
		// <div className="landing_page">
		// 	<Header />
		// 	<div className="about">
		// 		<h2 className="about_heading">Next-Gen Blockchains</h2>
		// 		<p>
		// 			Noderr simplifies the world of blockchain, making nodes accessible to
		// 			everyone. With effortless deployment, you can unlock exclusive early
		// 			adopter rewards through our cutting-edge decentralized AI Mesh-work
		// 			Dashboard. Join us in shaping the future of blockchain accessibility
		// 		</p>
		// 		<div className="input_container">
		// 			<label htmlFor="email">sign up for Beta launch</label>
		// 			<input
		// 				type="email"
		// 				id="email"
		// 				placeholder="noderrbeta@noderr.xyz"
		// 				value={email}
		// 				onChange={(e) => {
		// 					setEmail(e.target.value);
		// 				}}
		// 			/>
		// 		</div>
		// 		<button
		// 			type="button"
		// 			className="submit_btn"
		// 			onClick={() => {
		// 				handleSubmit();
		// 			}}
		// 		>
		// 			Sign-Up
		// 		</button>

		// 		<h2 className="active_heading"> Active Developments</h2>
		// 		<div
		// 			style={{
		// 				display: "flex",
		// 				justifyContent: "space-around",
		// 				width: "100%",
		// 			}}
		// 		>
		// 			<a href="https://www.allora.network" target="_blank">
		// 				<Card
		// 					style={{
		// 						width: "100%",
		// 						backgroundColor: "rgba(0, 0, 0, 0.3)",
		// 						margin: 5,
		// 						paddingTop: 5,
		// 					}}
		// 				>
		// 					<Card.Title
		// 						style={{
		// 							textAlign: "center",
		// 							fontSize: 24,
		// 							fontWeight: "bold",
		// 						}}
		// 					>
		// 						Allora
		// 					</Card.Title>
		// 					<Card.Img
		// 						className="active_images"
		// 						variant="top"
		// 						src={images.Allora}
		// 						alt="Allora image"
		// 					/>
		// 				</Card>
		// 			</a>

		// 			<a href="https://waku.org" target="_blank">
		// 				<Card
		// 					style={{
		// 						width: "100%",
		// 						backgroundColor: "rgba(0, 0, 0, 0.3)",
		// 						margin: 5,
		// 						paddingTop: 5,
		// 					}}
		// 				>
		// 					<Card.Title
		// 						style={{
		// 							textAlign: "center",
		// 							fontSize: 24,
		// 							fontWeight: "bold",
		// 						}}
		// 					>
		// 						Waku
		// 					</Card.Title>
		// 					<Card.Img
		// 						className="active_images"
		// 						variant="top"
		// 						src={images.Waku}
		// 						alt="Waku image"
		// 					/>
		// 				</Card>
		// 			</a>

		// 			<a href="https://ritual.net/about" target="_blank">
		// 				<Card
		// 					style={{
		// 						width: "100%",
		// 						backgroundColor: "rgba(0, 0, 0, 0.3)",
		// 						margin: 5,
		// 						paddingTop: 5,
		// 					}}
		// 				>
		// 					<Card.Title
		// 						style={{
		// 							textAlign: "center",
		// 							fontSize: 24,
		// 							fontWeight: "bold",
		// 						}}
		// 					>
		// 						Ritual
		// 					</Card.Title>
		// 					<Card.Img
		// 						className="active_images"
		// 						variant="top"
		// 						src={images.Ritual}
		// 						alt="Ritual.net image"
		// 					/>
		// 				</Card>
		// 			</a>
		// 		</div>

		// 		<div
		// 			style={{
		// 				display: "flex",
		// 				justifyContent: "space-around",
		// 				width: "100%",
		// 			}}
		// 		>
		// 			<a href="https://fuel.network/" target="_blank">
		// 				<Card
		// 					style={{
		// 						width: "100%",
		// 						backgroundColor: "rgba(0, 0, 0, 0.3)",
		// 						margin: 5,
		// 						paddingTop: 5,
		// 					}}
		// 				>
		// 					<Card.Title
		// 						style={{
		// 							textAlign: "center",
		// 							fontSize: 24,
		// 							fontWeight: "bold",
		// 						}}
		// 					>
		// 						Fuel
		// 					</Card.Title>
		// 					<Card.Img
		// 						className="active_images1"
		// 						variant="top"
		// 						src={images.fuel}
		// 						alt="fuel.network image"

		// 					/>
		// 				</Card>
		// 			</a>

		// 			<a href="https://www.lavanet.xyz" target="_blank">
		// 				<Card
		// 					style={{
		// 						width: "100%",
		// 						backgroundColor: "rgba(0, 0, 0, 0.3)",
		// 						margin: 5,
		// 						paddingTop: 5,
		// 					}}
		// 				>
		// 					<Card.Title
		// 						style={{
		// 							textAlign: "center",
		// 							fontSize: 24,
		// 							fontWeight: "bold",
		// 						}}
		// 					>
		// 						Lava
		// 					</Card.Title>
		// 					<Card.Img
		// 						className="active_images1"
		// 						variant="top"
		// 						src={images.Lava}
		// 						alt="lavanet image"
		// 					/>
		// 				</Card>
		// 			</a>

		// 			<a href="https://wardenprotocol.org" target="_blank">
		// 				<Card
		// 					style={{
		// 						width: "100%",
		// 						backgroundColor: "rgba(0, 0, 0, 0.3)",
		// 						margin: 5,
		// 						paddingTop: 5,
		// 					}}
		// 				>
		// 					<Card.Title
		// 						style={{
		// 							textAlign: "center",
		// 							fontSize: 24,
		// 							fontWeight: "bold",
		// 						}}
		// 					>
		// 						Warden
		// 					</Card.Title>
		// 					<Card.Img
		// 						className="active_images1"
		// 						variant="top"
		// 						src={images.Warden}
		// 						alt="wardenprotocol image"
		// 					/>
		// 				</Card>
		// 			</a>
		// 		</div>
		// 	</div>
		// 	<ToastContainer />
		// 	<Footer />
		// </div>
	);
};

export default Landing;
