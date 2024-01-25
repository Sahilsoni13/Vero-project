import React from 'react'
import Benefits from '../../json/benefits.json'
import { Fade } from 'react-reveal'
const Verobenefits = () => {
  return (
    <>
    <section className="vero-benefits">
      <div className="container">
        <div className="benefits-main">
         <Fade>
                <div className="benefits-top">
                  <h1 className='main-common-heading common-bg-midblue'>Why you need Vero Ankle™ brace</h1>
                  <p className='benefits-top-p common-page-bio common-bg-midblue'>Traditional taping methods simply don't work — athletic tape loses its ability to support the ankle properly after only 15 minutes of activity. The Vero Ankle™ brace is made with a dynamic BioMemory™ material which is not only flexible but also returns to its original shape, giving you an extra boost with each step. <span> Take a look at few major benefits that you can get while using Vero Ankle™ brace</span></p>
                </div>   </Fade>
               <Fade>
                <div className="benefits-bottom">
                   {
                    Benefits.map((item,index)=>{
                        return(
                            <div className="benefit-container">
                              <img src={require(`../images/${item['benefits-icon']}`)} alt="" />
                              <h3 className='benefit-container-h3'>{item['benefits-heading']}</h3>
                              <p className='common-page-bio font-robo'>{item['benefits-bio']}</p>
                            </div>
                        )
                    })
                   }
                </div>
                </Fade>
        </div>
      </div>
    </section>
    </>
  )
}

export default Verobenefits