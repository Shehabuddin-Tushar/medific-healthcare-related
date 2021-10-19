import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/Firebasehook';
import './Hader.css'
function Hader() {
    const [mobilebtn,setMobilebtn]=useState("hidden");
    const {user,Logout}=useFirebase();
    const handlemobilebtn=()=>{
        if(mobilebtn==="hidden"){
            setMobilebtn("block")

        }else{
            setMobilebtn("hidden")
        }
        
    }
    return (
        <div classNameName="hearder-wrapper">
            <div className="header  bg-blue-300 max-w-8xl mx-auto px-12 py-2 flex justify-between">
                 <div className="flex space-x-2">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3>1598,sycamore san francisco</h3>
                 </div>
                 <div className="hidden md:flex space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                    <h3>medific@gmail.com</h3>
                 </div>
                 <div className="flex space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <h3>+00 1857193407</h3>
                 </div>
                 <div className="hidden md:flex space-x-6">
                    <Link to="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></Link>
                    <Link to="ps://twitter.com/htt"><i class="fab fa-twitter"></i></Link>
                    <Link to="https://www.whatsapp.com/"><i class="fab fa-whatsapp"></i></Link>
                 </div>
            </div>
           {/* navbar goes here */}
            <nav className="bg-blue-400 ">
            <div className="max-w-8xl mx-auto px-4 border-red border-b-2">
                <div className="flex justify-between">

                <div className="flex space-x-6">
                {/* logo  */}
                 <div>
                    <NavLink to="/home" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                       <span className="font-bold">Medific</span>
                    </NavLink>
                    </div>

                    {/* primary nav  */}
                    <div className="hidden md:flex items-center space-x-1">
                        <NavLink exact to="/"  className="py-5 px-3 text-white hover:text-gray-900">Home</NavLink>
                        <NavLink to="/service" className="py-5 px-3 text-white hover:text-gray-900">Service</NavLink>
                        <NavLink to="/about" className="py-5 px-3 text-white hover:text-gray-900">About</NavLink>
                        <NavLink to="/contact" className="py-5 px-3 text-white hover:text-gray-900">Contact</NavLink>
                    </div>
                </div>

                {/* secondary nav  */}
                <div className="flex items-center space-x-1">
                {user.emailVerified?<h2 className="py-5 px-3 font-bold">{user.displayName}</h2>:""}
                    {
                     user.emailVerified?<button onClick={Logout}  className="logoutbtn">logout</button>:
                    <NavLink to="/login" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Login</NavLink>
                     }
                </div>

                {/* mobile button goes here */}
                <div className="md:hidden flex items-center">
                    <button className="mobile-menu-button" onClick={handlemobilebtn}>
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                     </svg>
                    </button>
                </div>

                </div>
            </div>

            {/* mobile menu  */}
            <div className={`mobile-menu ${mobilebtn}  md:hidden`}>
                <NavLink exact to="/" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</NavLink>
                <NavLink to="/service" className="block py-2 px-4 text-sm hover:bg-gray-200">Service</NavLink>
                <NavLink to="/about" className="block py-2 px-4 text-sm hover:bg-gray-200">About</NavLink>
                <NavLink to="/contact" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</NavLink>
                
            </div>
            </nav> 
        </div>
    )
}

export default Hader
