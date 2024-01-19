import React from 'react'
import Footerlogo from "../images/footerlogo.png"
import Card from "../../json/card.json"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
            <div className="footer-top">
         <div className="footer-left">
           <div className="footer-logo">
            <img src={Footerlogo}  />
           </div>
           <div className="footer-content">
            <h2 className='common-font-grey'>BUILT FOR THOSE THAT MOVE.</h2>
            <p className='common-font-grey'>The contents of this website do not constitute medical, legal, or any other professional advice.Information related to various health, medical, and fitness conditions and their treatment is notmeant to be a substitute for the advice provided by a physician or other medical professional.You should not use the information contained herein for diagnosing a health or fitness problemor disease. Rather, please consult your healthcare professional for information on the courses.of treatment, if any, which may be appropriate for you. Read complete disclaimer by <a href="#">clicking here</a></p>
            <h5><a href="#">Learn More</a></h5>
           </div>
         </div>
         <div className="footer-right">
            <div className="l-side">
            <ul>
            <h3>COMPANY</h3>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">About Our Brace</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Instructions</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Rehab Resources</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
            </div>
            <div className="r-side">
              <h3>Return Policy</h3>
            </div>
        
         </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                   <p>© 2023 Vero Ankle™, Rubber City Bracing. All rights reserved. </p>
                </div>
                <div className="footer-bottom-right">
                   {
                    Card.map((item,index)=>{
                        return(
                          <div className="card-list" key={index}>
                           
                          <img src={require(`../images/${item['card-image']}`)} alt="" />
                          </div>  
                        )
                    })
                   }
                </div>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer;