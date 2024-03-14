import { Link } from "react-router-dom";
import React from "react";
import "./index.css";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import ServicesCard from "../../components/serviceCard";
import PlanCard from "../../components/planCard";
import { customSpec, proSpec, trialSpec } from "../../data/";
import { TiTimes } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import Navigation from "../../components/navigation";

const Home = () => {
  return (
    <>
      <div>
        <Navigation />
        <div>
          <div className="home_container">
            <div className="container home_content">
              <div className="home_about">
                <h2
                  data-aos="fade-down"
                  data-aos-offset={"150"}
                  data-aos-duration={"500"}
                  data-aos-delay={"50"}
                >
                  Run a node, build the future
                </h2>
                <p>
                  Get started with Node Services and become an integral part of
                  the blockchain network. Choose the plan that's right for you
                  or your team.
                </p>
              </div>
              <Link to={"/dashboard"} className="btn primary">
                get started
              </Link>
            </div>
          </div>
          <div className="container">
            <div className="node_services">
              {/* <h3>Why Node Services?</h3> */}
              <div className="infrastructure_container">
                <div className="benefits">
                  <h2>Benefit from our state-of-the-art infrastructure</h2>
                  <p>
                    Our node services are designed to meet the needs of every
                    blockchain developer, no matter how big or small. Whether
                    you're building a DApp or running a DeFi protocol, we've got
                    you covered.
                  </p>
                </div>
                <div className="services_container">
                  <ServicesCard
                    Icon={LuClock3}
                    heading={"Reliability"}
                    data_aos={"fade-down"}
                    data_aos_offset={"150"}
                    data_aos_duration={"500"}
                    data_aos_delay={"50"}
                    desc={"Run your node on a reliable infrastructure"}
                  />
                  <ServicesCard
                    Icon={IoSpeedometerOutline}
                    heading={"Performance"}
                    desc={"Benefit from high-performance computing"}
                    data_aos={"fade-down"}
                    data_aos_offset={"150"}
                    data_aos_duration={"1000"}
                    data_aos_delay={"100"}
                  />
                  <ServicesCard
                    Icon={MdOutlineSecurity}
                    heading={"Security"}
                    desc={
                      "Secure your node with our top-notch security features"
                    }
                    data_aos={"fade-down"}
                    data_aos_offset={"150"}
                    data_aos_duration={"1500"}
                    data_aos_delay={"150"}
                  />
                  <ServicesCard
                    Icon={GrCompliance}
                    heading={"Compliance"}
                    desc={"Stay compliant with the latest regulations"}
                    data_aos={"fade-down"}
                    data_aos_offset={"150"}
                    data_aos_duration={"2000"}
                    data_aos_delay={"200"}
                  />
                </div>
              </div>
            </div>
            <div className="choose_plan_container">
              <h3>Build your own Node</h3>
              <div className="plan_container">
                <PlanCard
                  category={"starter"}
                  categoryType={"free trial"}
                  // price={"$5/mo"}
                  price={"Babylon"}
                  specification={trialSpec}
                  data_aos={"fade-down"}
                  data_aos_offset={"150"}
                  data_aos_duration={"500"}
                  data_aos_delay={"10"}
                />
                <PlanCard
                  category={"pro"}
                  categoryType={"most popular"}
                  price={"Taiko"}
                  specification={proSpec}
                  data_aos={"fade-down"}
                  data_aos_offset={"150"}
                  data_aos_duration={"1000"}
                  data_aos_delay={"08"}
                />
                <PlanCard
                  category={"enterprice"}
                  categoryType={"customize your plane"}
                  price={"Pryzm"}
                  specification={customSpec}
                  data_aos={"fade-down"}
                  data_aos_offset={"150"}
                  data_aos_duration={"1500"}
                  data_aos_delay={"05"}
                />
              </div>
            </div>
            <div className="facilites_sec">
              <div className="facilites_container">
                <div className="heading">
                  <h3></h3>
                  <h4>With Mintair</h4>
                  <h4>On your own</h4>
                </div>
                <div className="body">
                  <div
                    className="facility"
                    data-aos={"flip-down"}
                    data-aos-offset={"150"}
                    data-aos-duration={"200"}
                    data-aos-delay={"01"}
                  >
                    <span>Easy Deployment</span>
                    <span className="tick">
                      <TiTick className="icon green" />
                    </span>
                    <span className="tick">
                      <TiTimes className="icon red" />
                    </span>
                  </div>
                  <div
                    className="facility"
                    data-aos={"flip-down"}
                    data-aos-offset={"150"}
                    data-aos-duration={"250"}
                    data-aos-delay={"02"}
                  >
                    <span>Easy Management</span>
                    <span className="tick">
                      <TiTick className="icon green" />
                    </span>
                    <span className="tick">
                      <TiTimes className="icon red" />
                    </span>
                  </div>
                  <div
                    className="facility"
                    data-aos={"flip-down"}
                    data-aos-offset={"150"}
                    data-aos-duration={"200"}
                    data-aos-delay={"03"}
                  >
                    <span>Timely Updates</span>
                    <span className="tick">
                      <TiTick className="icon green" />
                    </span>
                    <span className="tick">
                      <TiTimes className="icon red" />
                    </span>
                  </div>
                  <div
                    className="facility"
                    data-aos={"flip-down"}
                    data-aos-offset={"150"}
                    data-aos-duration={"400"}
                    data-aos-delay={"4"}
                  >
                    <span>Round-the-clock Assistance</span>
                    <span className="tick">
                      <TiTick className="icon green" />
                    </span>
                    <span className="tick">
                      <TiTimes className="icon red" />
                    </span>
                  </div>
                  <div
                    className="facility"
                    data-aos={"flip-down"}
                    data-aos-duration={"200"}
                    data-aos-delay={"05"}
                  >
                    <span>Cost effective</span>
                    <span className="tick">
                      <TiTick className="icon green" />
                    </span>
                    <span className="tick">
                      <TiTimes className="icon red" />
                    </span>
                  </div>
                  <div className="facility">
                    <span>No TechF</span>
                    <span className="tick">
                      <TiTick className="icon green" />
                    </span>
                    <span className="tick">
                      <TiTimes className="icon red" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
