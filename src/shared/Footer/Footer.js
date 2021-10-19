import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
    return (
        <div className="footer">
            <div className="quicklinks-wrapper">
                <h1 className="text-4xl font-bold text-center">Quick links</h1>
                <div className="quicklinks flex">
                <div className="first-links">
                   <ul>
                       <li><Link to="/home"><i class="fas fa-angle-double-right"></i> Home</Link></li>
                       <li><Link to="/about"><i class="fas fa-angle-double-right"></i> Our partnars</Link></li>
                       <li><Link to="/service"><i class="fas fa-angle-double-right"></i> our service</Link></li>
                       <li><Link to="/contact"><i class="fas fa-angle-double-right"></i> Contact us</Link></li>
                   </ul>
               </div>
               <div className="second-links">
                    <ul>
                       <li><Link to="/home"><i class="fas fa-angle-double-right"></i> Our patient</Link></li>
                       <li><Link to="/home"><i class="fas fa-angle-double-right"></i> Our People</Link></li>
                       <li><Link to="/about"><i class="fas fa-angle-double-right"></i> About</Link></li>
                    </ul> 
               </div>
                </div>
               
            </div>
            <div className="contactus">
                <h1 className="text-4xl text-center font-cold mb-3 font-bold">Contact us</h1>
                 <h3 className="text-3xl mb-3"><Link to="/home"><i class="fas fa-phone-alt"></i> 01857195638</Link></h3>
                 <h2 className="text-3xl mb-3"><Link to="/contact"><i class="fas fa-map-marker-alt"></i> View our location</Link></h2>
                 <div className="social-link">
                     <Link to="https://twitter.com/"><i class="fab fa-twitter"></i></Link>
                     <Link to="https://www.facebook.com/"><i class="fab fa-facebook"></i></Link>
                     <Link to="https://www.youtube.com/"><i class="fab fa-youtube"></i></Link>

                 </div>
            </div>
            <div className="recognition">
               <h1 className="text-4xl mb-3 font-bold">Recognition</h1>
               <div className="recognitoin-image flex">
                    <Link to="/home"><img src="https://i.postimg.cc/yY2r8GRL/recog1.png"></img></Link>
                    <Link to="/home"><img src="https://i.postimg.cc/q7Tb8Cjn/recog2.png"></img></Link>
                    <Link to="/about"><img src="https://i.postimg.cc/8CmywP0Y/recog3.png"></img></Link>
                    <Link to="/contact"><img src="https://i.postimg.cc/DwspJcdn/recog4.png"></img></Link>
               </div>
            </div>
        </div>
    )
}

export default Footer
