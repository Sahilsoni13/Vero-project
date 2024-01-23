import React from "react";
import Ankle from "../images/Ankle.png";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";

const Banner = () => {
  return (
    <>
      <section className="banner-section">
        <div className="container">
        <div className="banner-main">
          <div className="banner-left">
            <h1 className="banner-heading common-bg-midblue">
              Your Path to Enhanced Recovery and Support
            </h1>
            <p className="banner-left-p common-bg-midblue mid-p-bio">
              The Vero Ankle™ brace — Designed by leading ankle surgeons for
              athletes,weekend warriors, injury recovery, and those looking for
              extra ankle support for everyday activities.
            </p>
            <button type="button " className="solid-capsules common-white">Shop Now</button>
          </div>
          <div className="banner-right">
            <img src={Ankle} alt="" className="bannerimg" />
            <div className="expert expert-1">
              <div className="ex-left">
                <img src={img1} alt="" />
              </div>
              <div className="ex-right">
                <h3 className="expert-heading common-bg-blue ">Designed by experts</h3>
                <p className="expert-bio common-bg-blue ">
                  Designed by a team with 100+ years of combined expertise in
                  foot and ankle specialization.
                </p>
              </div>
            </div>
            <div className="expert expert-middle">
              <div className="ex-left">
                <img src={img2} alt="" />
              </div>
              <div className="ex-right">
                <h3 className="expert-heading common-bg-blue ">From Injury To Recovery</h3>
                <p className="expert-bio common-bg-blue ">
                  Our Brace is tailored to support the healing process from the
                  initial injury through to full recovery
                </p>
              </div>
            </div>
            <div className="expert expert-3">
              <div className="ex-left">
                <img src={img3} alt="" />
              </div>
              <div className="ex-right">
                <h3 className="expert-heading common-bg-blue ">Five Star Criteria Design</h3>
                <p className="expert-bio common-bg-blue ">
                  Meets 5-star ankle support criteria: comfort, fit,
                  user-friendliness, low profile, and flexibility.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="infinte">
          <h1>Comfortable</h1>
          <h1>Adjustable</h1>
          <h1>Modular</h1>
          <h1>Flexible</h1>
          <h1>Supportive</h1>
          <h1>Comfortable</h1>
          <h1>Adjustable</h1>
          <h1>Modular</h1>
          <h1>Flexible</h1>
          <h1>Supportive</h1>
        </div>
      </section>
    </>
  );
};

export default Banner;
