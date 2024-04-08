import React from "react";
import "./index.css";
import { images } from "../../images";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<div className="landing_header">
			<h2 className="side_heading">
				<p>
					&#55356;&#56701;&#55356;&#56702;&#55356;&#56691;&#55356;&#56692;&#55356;&#56705;&#55356;&#56705;
				</p>
			</h2>
			<img src={images.logo} alt="logo" className="brand" />
			<Link to="/dashboard" className="launch_btn">
				{/* <span class="bi bi-rocket"></span> Launch Node */}
			</Link>
		</div>
	);
};

export default Header;
