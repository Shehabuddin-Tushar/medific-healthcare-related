import React,{useState,useEffect} from 'react'
import './Login.css'
import useFirebase from '../../hooks/Firebasehook';
import { Link,useLocation,useHistory} from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
function Login() {
     const [ischecked,setIschecked]=useState(false);
     const {isloading,setSuccess,setUservalues,loginuser,setLoginuser,setError,Logout,singinLogin,handleloginchange,signupWithgoogleLogin,user,setIsloading,handlechangeuservalues,createUser,error,success}=useAuth();
     const location=useLocation();
     const redirect_url=location.state?.from || "/home";
     console.log(redirect_url)
     const history=useHistory();
     console.log(ischecked)
 
     /*its google login */
    const handlelogin=()=>{
          setIsloading(true)
          signupWithgoogleLogin()
         .then((result)=>{
              history.push(redirect_url);
         }).finally(()=>setIsloading(false))
      }
    /*google login end */

    /*its email password login */
  const handleemailpasswordlogin=(e)=>{
    e.preventDefault();
    
    if(loginuser.email===""){
       setError("your field is empty");
       return  
    }
    if(loginuser.password.length<6){
      setError("your password is less then 6 characters");
      return
    }
    setIsloading(true)
    singinLogin()
    .then((result) => {
        if(result.user.emailVerified){
            setError("");
           
            history.push(redirect_url);
           }else{
            Logout();
            throw new Error("your email is not verified")
           }
     }).catch((error) => {
          setError(error.message);
        }).finally(()=>setIsloading(false));
  }
/*email password login end */


  const handlecheck=(e)=>{
       setIschecked(e.target.checked);
       console.log(ischecked)
       setSuccess();
       setUservalues({});
       setLoginuser({})
      
  }
    return (
        <div className="loginpage">
          {error}
          {success}
         <form onSubmit={ischecked?handleemailpasswordlogin:createUser}>
            <h1>{ischecked?"Login":"Registration"}</h1>
            {ischecked?"":<input type="text" onChange={handlechangeuservalues} name="displayname" placeholder="Enter your name"/>}
            <input type="email" onChange={ischecked?handleloginchange:handlechangeuservalues} name="email" placeholder="Enter your email"/>
            <input type="password" onChange={ischecked?handleloginchange:handlechangeuservalues} name="password" placeholder="Enter your password"/>
            <input type="checkbox" name="checkout" value="register" onClick={handlecheck}/> Already registered
            <br/>
            {ischecked?<input type="submit" value="Login"/>:<input type="submit" value="Register"/>}

            <br/>
           
         </form>
         {user.emailVerified?"":
            <button className="googlebtn" onClick={handlelogin}><span><i class="fab fa-google"></i></span> google log in</button>}
        </div>
    )
}

export default Login
