import React,{useState,useEffect} from 'react'
import './Login.css'
import useFirebase from '../../hooks/Firebasehook';
import { Link,useLocation,useHistory} from 'react-router-dom'
function Login() {
     const [ischecked,setIschecked]=useState(false);
     const {signupWithgoogleLogin,user,setIsloading}=useFirebase();
     const location=useLocation();
     const redirect_url=location.state?.from || "/home";
     console.log(redirect_url)
     const history=useHistory();
     
 
     /*its google login */
    const handlelogin=()=>{
        setIsloading(true)
        signupWithgoogleLogin()
        .then((result)=>{
          
          history.push(redirect_url);
          
        }).finally(()=>setIsloading(false))
      }

    const handlecheck=(e)=>{
       setIschecked(e.target.checked)
    }

    const handlesubmitregister=(e)=>{
        e.preventDefault();
        console.log("tushar")
    }

    const handlesubmitlogin=(e)=>{
        e.preventDefault();
        console.log("shehab")
    }
    return (
        <div className="loginpage">
         <form onSubmit={ischecked?handlesubmitlogin:handlesubmitregister}>
            <h1>{ischecked?"Login":"Registration"}</h1>
            {ischecked?"":<input type="text" placeholder="Enter your name"/>}
            <input type="email" placeholder="Enter your email"/>
            <input type="password" placeholder="Enter your password"/>
            <input type="checkbox" name="checkout" value="register" onClick={handlecheck}/> Already registered
            <br/>
            {ischecked?<input type="submit" value="Login"/>:<input type="submit" value="Register"/>}

            <br/>
            {user.email?"":
            <button className="googlebtn" onClick={handlelogin}><span><i class="fab fa-google"></i></span> google log in</button>}
         </form>
        </div>
    )
}

export default Login
