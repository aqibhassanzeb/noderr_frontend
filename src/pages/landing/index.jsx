import React, { useState } from "react";
import "./index.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createApiContext } from "../../context/apiContext";

const Landing = () => {
  const [email, setEmail] = useState(null);
  const { signupForBetaLaunch } = React.useContext(createApiContext);
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

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
          adopter rewards through our cutting-edge decentralized AI Meshwork
          Dashboard. Join us in shaping the future of blockchain accessibility.
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
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default Landing;
