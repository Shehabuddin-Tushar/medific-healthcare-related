import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <div className="contactuswithcenter">
           <div className="contactform">
              <form>
                  <input type="text" placeholder="enter your name"/>
                  <input type="text" placeholder="enter your age"/>
                  <input type="text" placeholder="enter your email"/>
                  
                  <div className="optionaldetails">
                     <div className="firstoptional">
                         <input type="text" placeholder="enter your website url"/>
                         <input type="text" placeholder="enter your address"/>
                     </div>
                     <div className="secondoptional">
                         <input type="text" placeholder="enter your address"/>
                         <input type="text" placeholder="enter your zipcode"/>
                    </div>
                  </div>
                  <input type="submit"/>
              </form>
           </div>
           <div className="contactdetails">
              <iframe className="map" height="400" width="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14612.66699208635!2d90.45475237842552!3d23.70573865099736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b77186e2e3f9%3A0x1e98ee292b8b578b!2z4Kau4Ka-4Kak4KeB4Kav4Ka84Ka-4KaH4Kay!5e0!3m2!1sbn!2sbd!4v1634639521652!5m2!1sbn!2sbd" allowfullscreen="" loading="lazy"></iframe>
           </div>
        </div>
    )
}

export default Contact
