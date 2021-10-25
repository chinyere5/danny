import React from 'react'
import danny from '../Images/danny.png'
// import logo4 from '../Images/logo4.png'

const About = () => {
    return (
        <div>
            <div className="wrapper">
            <div className="wrapper1">

                   <div className="brand ">                                 
                   <img src={danny} alt="" />
                 </div>
                 {/* <img src={logo4} alt="" /> */}
        
                <div className="wrapper2 text-success mt-3">
                       <h2> Advance Learning System <br /> Around The World  </h2>
                       <p>We have made a collaborative effort in bringing together <br/> scientific expertise from other countries, steered jointly <br />by their governments on the basis of shared, policy-driven interests.      </p>
                     <div className="parent">

                   <div className="wrap">
                       <h2>25k <sup> +</sup></h2>
                       <p>Teachers</p>
                   </div>
                   <div className="para">
                       <hr />
                   </div>

              <div className="wrap">
              <h2>75k <sup> +</sup></h2>
                       <p>Active courses</p>
              </div>
              <div className="para">
                       <hr />
                   </div>

                   <div className="wrap">
                       <h2>250 <sup> +</sup></h2>
                       <p> Extra Curriular </p>
                   </div>

                   <div className="para">
                       <hr />
                   </div>

                          </div>

                    <div className="btn new">
                    <button className="btn btn-success btn btn-lg  "> Learn More </button>
                    </div>

                       </div> 

                      
                </div> 
               
                  
       </div>
        </div>
    )
}

export default About
