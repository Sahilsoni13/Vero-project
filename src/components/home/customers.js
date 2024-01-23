import React, { useRef } from "react";
import customer1 from "../images/customer1.png";
import customer2 from "../images/customer2.png";
import next from "../images/next.png";
import prev from "../images/prev.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
const Customers = () => {
  const data = [
    {
      swipehead: "Jarrod S.",
      swipeimg: "star.png",
      swiperbio:
        "The support and comfort of this ankle brace is off the charts!  I have worn this to play tennis, golf and even running and I forget I am even wearing a brace to keep from spraining my ankle again.",
    },
    {
      swipehead: "Ronald L G.",
      swipeimg: "star.png",
      swiperbio:
        "I use this brace every day. The only one that helps reduce pain level",
    },
    {
      swipehead: "Jarrod S.",
      swipeimg: "star.png",
      swiperbio:
        "The support and comfort of this ankle brace is off the charts!  I have worn this to play tennis, golf and even running and I forget I am even wearing a brace to keep from spraining my ankle again.",
    },
    {
      swipehead: "Jarrod S.",
      swipeimg: "star.png",
      swiperbio:
        "The support and comfort of this ankle brace is off the charts!  I have worn this to play tennis, golf and even running and I forget I am even wearing a brace to keep from spraining my ankle again.",
    },
    {
      swipehead: "Jarrod S.",
      swipeimg: "star.png",
      swiperbio:
        "The support and comfort of this ankle brace is off the charts!  I have worn this to play tennis, golf and even running and I forget I am even wearing a brace to keep from spraining my ankle again.",
    },
    {
      swipehead: "Jarrod S.",
      swipeimg: "star.png",
      swiperbio:
        "The support and comfort of this ankle brace is off the charts!  I have worn this to play tennis, golf and even running and I forget I am even wearing a brace to keep from spraining my ankle again.",
    },
  ];
  const swiperRef = useRef();
  return (
    <>
      <section className="customers">
        <div className="container">
          <div className="customers-main">
            <div className="customers-top">
              <div className="customers-heading">
                <h1 className="main-common-heading common-white  ">HEAR FROM OUR CUSTOMERS</h1>
                <div className="customer-cont">
                  <div className="customers-left">
                    <img src={customer1} alt="" />
                    <h3 className="customers-common-tittle common-bg-blue ">How Patrick Got Back On The Golf Course</h3>
                    <p className="customers-common-bio common-bg-blue ">
                      Patrick talks about how the Vero Ankle Brace has allowed
                      him to return to playing golf and performing other
                      everyday activities after a severe ankle sprain was
                      suffered on the...
                    </p>
                  </div>
                  <div className="customers-right">
                    <img src={customer2} alt="" />
                    <h3 className="customers-common-tittle common-bg-blue ">
                      Macy Talks Her Road To Recovery with VeroAnkle™ Ankle
                      Brace
                    </h3>
                    <p className="customers-common-bio common-bg-blue ">
                      In this video, Macy talks about how the VeroAnkle™ ankle
                      brace helped her recover from a severely injured ankle in
                      her college basketball career.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swipe-main">
                <img
                  onClick={() => swiperRef.current?.slidePrev()}
                  src={prev}
                  alt=""
                />
                <Swiper
                  pagination={true}
                  slidesPerView={3}
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  loop={true}
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  breakpoints={{
                    300:{
                      slidesPerView:1
                    },
                    425: {
                      slidesPerView: 1,
                    },
                    475: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                  }}
                  className="mySwiper"
                >
                  {data.map((item) => {
                    return (
                      <SwiperSlide>
                        <div className="swipe-me">
                          <div className="swipe-heading">
                            <h3 className="swiper-text-heading ">{item.swipehead}</h3>
                            <img
                              src={require(`../images/${item.swipeimg}`)}
                              alt="ERERE"
                            />
                          </div>
                          <p className="swiper-text-bio " >{item.swiperbio}</p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <img
                  onClick={() => swiperRef.current?.slideNext()}
                  src={next}
                  alt=""
                />
              </div>
              <div className="float-main">
                <div className="float-content">
                  <h1 className="float-content-h1 main-common-heading common-white">POWER UP YOUR RECOVERY</h1>
                  <p className="float-content-p common-white">
                    The ankle brace designed to get you back into action faster
                    and supercharge your performance.
                  </p>
                  <div className="float-button">
                    <button type="button" className="float-content-button ">Shop Now </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customers;

/*


*/
