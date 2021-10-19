import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className="footer">
            <div className="quicklinks-wrapper">
                <h1 className="text-4xl font-bold text-center">Quick links</h1>
                <div className="quicklinks flex">
                <div className="first-links">
                   <ul>
                       <li><a href=""><i class="fas fa-angle-double-right"></i> Home</a></li>
                       <li><a href=""><i class="fas fa-angle-double-right"></i> Our partnars</a></li>
                       <li><a href=""><i class="fas fa-angle-double-right"></i> our service</a></li>
                       <li><a href=""><i class="fas fa-angle-double-right"></i> Contact us</a></li>
                   </ul>
               </div>
               <div className="second-links">
                    <ul>
                       <li><a href=""><i class="fas fa-angle-double-right"></i> Our patient</a></li>
                       <li><a href=""><i class="fas fa-angle-double-right"></i> Our People</a></li>
                       <li><a href=""><i class="fas fa-angle-double-right"></i> About</a></li>
                    </ul> 
               </div>
                </div>
               
            </div>
            <div className="contactus">
                <h1 className="text-4xl text-center font-cold mb-3 font-bold">Contact us</h1>
                 <h3 className="text-3xl mb-3"><a href=""><i class="fas fa-phone-alt"></i> 01857195638</a></h3>
                 <h2 className="text-3xl mb-3"><a href=""><i class="fas fa-map-marker-alt"></i> View our location</a></h2>
                 <div className="social-link">
                     <a href=""><i class="fab fa-twitter"></i></a>
                     <a href=""><i class="fab fa-facebook"></i></a>
                     <a href=""><i class="fab fa-youtube"></i></a>

                 </div>
            </div>
            <div className="recognition">
               <h1 className="text-4xl mb-3 font-bold">Recognition</h1>
               <div className="recognitoin-image flex">
                    <a href=""><img src="https://i.postimg.cc/yY2r8GRL/recog1.png"></img></a>
                    <a href=""><img src="https://i.postimg.cc/q7Tb8Cjn/recog2.png"></img></a>
                    <a href=""><img src="https://i.postimg.cc/8CmywP0Y/recog3.png"></img></a>
                    <a href=""><img src="https://i.postimg.cc/DwspJcdn/recog4.png"></img></a>
               </div>
            </div>
        </div>
    )
}

export default Footer
