import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import './Home.css'
function Home() {
     
  const [services,setServices]=useState([]);

  useEffect(()=>{
     
    fetch(`https://shehabuddin-tushar.github.io/first-demo/services.json`).then(res=>res.json()).then(data=>setServices(data))

  },[])
    return (
      <>
        <div className="home-wrapper">
            <div className="home-banner">
              
            </div>
            <div className="flex lg:float-right  emargency space-x-5  mb-5">
                <div className="bg-blue-500 w-64 px-5 py-5 rounded shadow-2xl border-indigo-800 ">
                  <h1 className="text-3xl font-bold text-white mb-3 shad">emargency case</h1>
                  <div className="flex space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <h3 className="text-xl font-bold">+00 1657193408</h3>
                 </div>
                  <p>call for emargency.no hasitate</p>
                </div>
                <div className="bg-blue-500 w-64 px-5 py-5 rounded shadow-2xl border-indigo-800">
                  <h1 className="text-3xl font-bold text-white mb-3 shad">opening hours</h1>
                  <h2 className="text-2xl font-bold">mon-fri  <span>8.00-18.00</span></h2>
                  <h2 className="text-2xl font-bold">sat-sun  <span>8.00-18.00</span></h2>
                </div>
            </div>


            
            
        </div>

       {/* services part */}
       <div className="services w-12/12  py-5 text-center mb-5">
               <h1 className="text-5xl font-bold">Services</h1>
               <h2 className="text-4xl font-semibold mt-5">Our speciality</h2>
       </div>

        <div className="show-services">
          {
            services.slice(0,6).map((service)=>{
              return(
                <div className="single-services bg-blue-300">
                  <i className={`fas fa-${service.icon} icon-class`}></i>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p> 
                  <NavLink to={`/details/${service.id}`}>Details</NavLink>
           </div>
              )
            })
          }
          
         
         
        </div>

        <div className="all-services-btn text-center">
             <NavLink to="/service" >All services see</NavLink>
          </div>
        </>
    )
}

export default Home
