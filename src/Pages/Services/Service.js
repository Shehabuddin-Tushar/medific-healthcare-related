import React,{useState,useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom';

function Service() {
    const [services,setServices]=useState([]);

     useEffect(()=>{
     
        fetch("services.json").then(res=>res.json()).then(data=>setServices(data))

     },[])
    return (
        <div className="show-services mt-5">
          {
            services.map((service)=>{
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
    )
}

export default Service
