import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './Details.css'
function Details() {
    const {id}=useParams();
     const [service,setService]=useState({});
  

   
   const mydata=async()=>{
      const result= await fetch(`http://localhost:3000/services.json`);
      const datas=await result.json();
      setService(datas.find(data=>data.id===id));
      
   }
   useEffect(()=>{
        mydata();
    
    },[]);

    return (
        <div className="details-wrapper">
            <div className="details-banner">
                <div className="details-img shadow-2xl">
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
