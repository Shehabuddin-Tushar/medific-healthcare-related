import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './Details.css'
function Details() {
    const {id}=useParams();
     const [service,setService]=useState({});
  

   
   
   useEffect(()=>{
       fetch(`https://shehabuddin-tushar.github.io/first-demo/services.json`)
      .then(res=>res.json())
      .then(datas=>setService(datas.find(data=>data.id===id)));
    
    },[]);

    return (
        <div className="details-wrapper">
            <div className="details-banner">
                <div className="details-img">
                   <img src={service.img} className=""/>
                </div>
                
                <div className="">
                    <div className="flex items-center hover:text-blue-400 cursor-pointer">
                      <i className={`fas fa-${service.icon} icon-class text-4xl`}></i>
                      <h2 className="text-4xl font-bold">{service.name}</h2>
                    </div>
                  
                     <p className="text-justify"> {service.longdesc}</p>

                </div>
                
            </div>
        </div>
    )
}

export default Details
