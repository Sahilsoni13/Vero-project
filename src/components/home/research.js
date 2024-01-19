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
            <h1>ADVICE, RESEARCH, TECHNIQUES AND MORE</h1>
            <div className="researches">
              <Swiper
                className="mySwiper"
                slidesPerView={3}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                  },
                  425: {
                    slidesPerView: 1,
                  },
                  500: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
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
                        <h3>{item["research-head"]}</h3>
                        <p>{item["research-bio"]}</p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="research-button">
              <button type="button">View All posts</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Research;
