import React from "react";
import Experts from "../../json/experts.json";
import Expertimg from "../images/expertimg.png";
// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const OurExperts = () => {
  return (
    <>
      <section className="ourExpert">
        <div className="container">
          <div className="expertsmain">
            <div className="experttop">
              <div className="expertheading">
                <h1>Designed by experts </h1>
              </div>
              <div className="expertperson">
                <Swiper
                  className="mySwiper"
                  slidesPerView={4} 
                  loop={true}
                  breakpoints={{
                    300:{
                      slidesPerView:1
                    },
                    425: {
                      slidesPerView: 1,
                    },
                    550: {
                      slidesPerView: 2,
                    },
                    800: {
                      slidesPerView: 3,
                    },
                    1200:{
                      slidesPerView:4
                    }
                  }}
                >
                  {Experts.map((item, index) => {
                    return (
                      <SwiperSlide>
                        <div className="expertsprofile" key={index}>
                          <img
                            src={require(`../images/${item["expert-pic"]}`)}
                            alt=""
                          />
                          <h1>{item["expert-name"]}</h1>
                          <li>{item["expert-bio"]}</li>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
            <div className="expertbottom">
              <div className="expert-bottom-left">
                <h1>Our Journey</h1>
                <p>
                  As renowned foot and ankle orthopedic surgeons specializing in
                  sports injuries, we've witnessed a troubling trend over two
                  decades – increasing re-injury rates after ankle sprains,
                  leading to more surgical interventions. <br />
                  Existing ankle braces fell short of meeting our patients'
                  needs. They were either too rigid and bulky, hindering normal
                  function, or resembled glorified socks, offering inadequate
                  support. <br />
                  In response, we established the "Five Star Criteria" for the
                  perfect brace: comfortable, well-fitting, easy to use,
                  low-profile for footwear compatibility, and flexible support
                  for controlled ankle movement. Our patented Vero Ankle brace
                  embodies these criteria, offering a 21st-century solution.
                  Proudly, we recommend it to our patients.
                </p>
                <p></p>
              </div>
              <div className="expert-bottom-right">
                <img src={Expertimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurExperts;
