import React from "react";
import Advice from "../../json/research.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Research = () => {
  return (
    <>
      <section className="research-section">
        <div className="container">
          <div className="research-main">
            <h1 className="main-common-heading research-main-h1 common-bg-midblue">ADVICE, RESEARCH, TECHNIQUES AND MORE</h1>
            <div className="researches">
              <Swiper
                className="mySwiper"
                slidesPerView={4}
                spaceBetween={20}
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
                {Advice.map((item, index) => {
                  return (
                    <SwiperSlide>
                      <div className="Result" key={index}>
                        <img
                          src={require(`../images/${item["research-image"]}`)}
                          alt=""
                        />
                        <h3 className=".swipe-text-heading common-bg-blue font-oswald">{item["research-head"]}</h3>
                        <p className="swipe-text-bio">{item["research-bio"]}</p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="research-button">
              <button type="button" className="liquid-capsules">View All posts</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Research;
