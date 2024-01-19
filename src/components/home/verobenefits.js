import React from 'react'
import Benefits from '../../json/benefits.json'
const Verobenefits = () => {
  return (
    <>
    <section className="vero-benefits">
      <div className="container">
        <div className="benefits-main">
                <div className="benefits-top">
                  <h1>Why you need Vero Ankle™ brace</h1>
                  <p>Traditional taping methods simply don't work — athletic tape loses its ability to support the ankle properly after only 15 minutes of activity. The Vero Ankle™ brace is made with a dynamic BioMemory™ material which is not only flexible but also returns to its original shape, giving you an extra boost with each step. <span> Take a look at few major benefits that you can get while using Vero Ankle™ brace</span></p>
                </div>
                <div className="benefits-bottom">
                   {
                    Benefits.map((item,index)=>{
                        return(
                            <div className="benefit-container">
                              <img src={require(`../images/${item['benefits-icon']}`)} alt="" />
                              <h3>{item['benefits-heading']}</h3>
                              <p>{item['benefits-bio']}</p>
                            </div>
                        )
                    })
                   }
                </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Verobenefits