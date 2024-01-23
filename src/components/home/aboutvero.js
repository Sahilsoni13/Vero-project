import React from "react";
import Aboutveroimg from "../images/aboutveroimg.png";
import Design1 from "../images/design1.png";
import Design2 from "../images/design2.png";
import Design3 from "../images/design3.png";
import Design4 from "../images/design4.png";
import Design5 from "../images/design5.png";
import Design6 from "../images/design6.png";
import Verorunner from "../images/verorunner.png"
import Verogroup from '../images/verogroup.png'
import Aboutcontent from '../../json/aboutvero.json'
const Aboutvero = () => {
  return (
    <>
      <section className="about-vero">
        <div className="container">
        <div className="aboutvero-main">
          <div className="aboutvero-top">
            <div className="aboutvero-heading">
              <h1 className="main-common-heading common-white">The Vero Ankle™ Brace</h1>
            </div>
            <div className="vero-specifications">
              <img src={Aboutveroimg} alt="" />
              <div className="about-vero-logic">
                <div className="logic-main logic-main1">
                  <div className="logic-left">
                    <img src={Design1} alt="" />
                  </div>
                  <div className="logic-right">
                    <h1 className="logic-text common-bg-blue">Adaptable Hinge Feature</h1>
                    <p className="logic-bio common-bg-blue">
                      Tailored to align with your ankle's natural ligament
                      constraints, ensuring precise and proper support
                    </p>
                  </div>
                </div>
                <div className="logic-main logic-main2">
                  <div className="logic-left">
                    <img src={Design2} alt="" />
                  </div>
                  <div className="logic-right">
                    <h1 className="logic-text common-bg-blue">Modular Stirrups Feature</h1>
                    <p className="logic-bio common-bg-blue">
                      Provide vital initial support for severe ankle injuries,
                      and as healing progresses, customize strap adjustments for
                      a snug fit.
                    </p>
                  </div>
                </div>
                <div className="logic-main logic-main3">
                  <div className="logic-left">
                    <img src={Design3} alt="" />
                  </div>
                  <div className="logic-right">
                    <h1 className="logic-text common-bg-blue">Breathable Design</h1>
                    <p className="logic-bio common-bg-blue">
                      With perforated holes, the boot ensures airflow,
                      preventing the perspiration buildup and skin irritation
                      often caused by traditional braces
                    </p>
                  </div>
                </div>
                <div className="logic-main logic-main4">
                  <div className="logic-left">
                    <img src={Design4} alt="" />
                  </div>
                  <div className="logic-right">
                    <h1 className="logic-text common-bg-blue">EASY ON, EASY OFF</h1>
                    <p className="logic-bio common-bg-blue">
                      Our simple velcro strapping system allows you to adjust
                      your fit on the fly. No more knots or spaghetti laces
                    </p>
                  </div>
                </div>
                <div className="logic-main logic-main5">
                  <div className="logic-left">
                    <img src={Design5} alt="" />
                  </div>
                  <div className="logic-right">
                    <h1 className="logic-text common-bg-blue">MODULAR DESIGN</h1>
                    <p className="logic-bio common-bg-blue">
                      A single brace for each stage of recovery. Add or remove
                      the padded inserts depending on the level of support you
                      need.
                    </p>
                  </div>
                </div>
                <div className="logic-main logic-main6">
                  <div className="logic-left">
                    <img src={Design6} alt="" />
                  </div>
                  <div className="logic-right">
                    <h1 className="logic-text common-bg-blue ">FLEXIBLE MATERIAL</h1>
                    <p className="logic-bio common-bg-blue" >
                      The perfect balance between support and mobility.
                      BioMemory™ material keeps you protected while staying
                      active.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutvero-middle">
            <div className="aboutvero-middle-left">
              <h1 className="benefits-h1 common-white">Designed With Humans In Mind</h1>
              <p className="mid-p-bio common-white">
                Comfortable, low profile, flexible and easy to put on, the Vero
                Ankle™ brace is simply the best ankle brace for those who move.
                Whether youre recovering from an ankle sprain, require extra
                support for your day-to-day, or want to boost your performance
                the Vero Ankle brace delivers. Made with flexible BioMemory™
                material that returns to its original shape with every movement
                giving you an extra boost with every step. Can be worn on either
                foot. <br /> Our patented design mimics natural ligament function which
                allows you to move normally while resisting extreme range of
                motion that could cause further damage. The Vero Ankle™ brace is
                the first of its kind to offer comfort, support, simplicity, and
                performance in a single solution.
              </p>
            </div>
            <div className="aboutvero-middle-right">
              <img src={Verorunner} alt="" />
            </div>
          </div>
          <div className="aboutvero-bottom">
            <div className="aboutvero-bottom-left">
               <img src={Verogroup} alt="" />
            </div>
            <div className="aboutvero-bottom-right">
            <h1 className="benefits-h1 aboutvero-bottom-right-h1 common-white">The Vero Ankle™ Brace is perfect for</h1>
            <div className="aboutvero-content">
             {
              Aboutcontent.map((item,index)=>{
                return(
                  <div className="about-content" key={index}>
                    <h3 className="about-content-h3 common-white">{item['about-vero-heading']}</h3>
                    <p className="common-page-bio common-white">{item["about-vero-bio"]}</p>
                  </div>
                )
              })
             }
            </div>
            </div>
          </div>
          <div className="aboutvero-button">
          <button type="button " className="common-white solid-capsules">Shop Now</button>

          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Aboutvero;
