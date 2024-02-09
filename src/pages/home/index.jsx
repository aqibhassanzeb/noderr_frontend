import React from "react";
import "./index.css";
import { images } from "../../images";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { TiTick } from "react-icons/ti";
const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="home_content">
          <div className="home_about">
            <h2>Run a node, build the future</h2>
            <p>
              Get started with Node Services and become an integral part of the
              blockchain network. Choose the plan that's right for you or your
              team.
            </p>
          </div>
          <button className="btn primary">get started</button>
        </div>
      </div>
      <div className="node_services">
        <h3>Why Node Services?</h3>
        <div className="infrastructure_container">
          <div className="benefits">
            <h2>Benefit from our state-of-the-art infrastructure</h2>
            <p>
              Our node services are designed to meet the needs of every
              blockchain developer, no matter how big or small. Whether you're
              building a DApp or running a DeFi protocol, we've got you covered.
            </p>
          </div>
          <div className="services_container">
            <div className="service">
              <span>
                <LuClock3 className="icon" />
              </span>
              <h4>Reliability</h4>
              <p>Run your node on a reliable infrastructure</p>
            </div>
            <div className="service">
              <span>
                <IoSpeedometerOutline className="icon" />
              </span>
              <h4>Performance</h4>
              <p>Benefit from high-performance computing</p>
            </div>
            <div className="service">
              <span>
                <MdOutlineSecurity className="icon" />
              </span>
              <h4>Security</h4>
              <p>Secure your node with our top-notch security features</p>
            </div>
            <div className="service">
              <span>
                <GrCompliance className="icon" />
              </span>
              <h4>Compliance</h4>
              <p>Stay compliant with the latest regulations</p>
            </div>
          </div>
        </div>
      </div>
      <div className="choose_plan_container">
        <h3>Choose the plan that's right for you</h3>
        <div className="plan_container">
          <div className="plan">
            <div className="top">
              <span className="first">starter</span>
              <span className="last">free trial</span>
            </div>
            <div className="plan_charge">
              <span className="price">$5/mo</span>
              <span className="last">null</span>
            </div>
            <div className="btn secondary">null</div>
            <div className="plan_services">
              <span>
                <TiTick className="icon" />
              </span>
              <span className="text">4GB RAM</span>
            </div>{" "}
            <div className="plan_services">
              <span>
                <TiTick className="icon" />
              </span>
              <span className="text">2 CPU</span>
            </div>{" "}
            <div className="plan_services">
              <span>
                <TiTick className="icon" />
              </span>
              <span className="text">50GB SSD</span>
            </div>
          </div>
          <div className="plan">
            <div className="top">
              <span className="first">pro</span>
              <span className="last">most popular</span>
            </div>
            <div className="plan_charge">
              <span className="price">$100/mo</span>
              <span className="last">null</span>
            </div>
            <div className="btn secondary">null</div>
            <div className="plan_services">
              <span>
                <TiTick className="icon" />
              </span>
              <span className="text">4GB RAM</span>
            </div>{" "}
            <div className="plan_services">
              <span>
                <TiTick className="icon" />
              </span>
              <span className="text">2 CPU</span>
            </div>{" "}
            <div className="plan_services">
              <span>
                <TiTick className="icon" />
              </span>
              <span className="text">50GB SSD</span>
            </div>
          </div>
          <div className="plan">
            <div className="top">
              <span className="first">enterprice</span>
              <span className="last">customize your plane</span>
            </div>
            <div className="plan_charge">
              <span className="price">Contact us</span>
              <span className="last">null</span>
            </div>
            <div className="btn secondary">null</div>
            <div className="plan_services">
              <span>
                <TiTick className="icon" />
              </span>
              <span className="text">custome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
