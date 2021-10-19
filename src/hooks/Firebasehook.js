import initializeAuthantication from "../Firebase/firebase.init";
import { signInWithEmailAndPassword,GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut,updateProfile,createUserWithEmailAndPassword,sendEmailVerification} from "firebase/auth";
import {useState,useEffect} from 'react'

initializeAuthantication();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();





const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isloading,setIsloading]=useState(true);
    const [error,setError]=useState("");
    const [success,setSuccess]=useState("");
    /*login start */

 const [loginuser,setLoginuser]=useState({
  email:"",password:""
});

const handleloginchange=(e)=>{
  
 const newloginuser={...loginuser}
 newloginuser[e.target.name]=e.target.value
 setLoginuser(newloginuser);
 console.log(loginuser);
}

const singinLogin=()=>{

 return signInWithEmailAndPassword(auth, loginuser.email, loginuser.password)

}
/*login end */


    /* register start */
    const [uservalues,setUservalues]=useState({
      displayname:"",email:"",password:""
    });



    const handlechangeuservalues=(e)=>{
      const newuser={...uservalues} 
      newuser[e.target.name]=e.target.value
      setUservalues(newuser);
      console.log(e.target.value)
    }

const createUser=(e)=>{
     e.preventDefault();
    if(uservalues.displayname===""){
      setError("your name is empty");
      return  
    }
    if(uservalues.email===""){
      setError("your email is empty");
      return  
    }
    if(uservalues.password.length<6){
      setError("your password is less then 6 characters");
      return
    }
 
    createUserWithEmailAndPassword(auth,uservalues.email,uservalues.password)
    .then((result) => {
      const users=result.user;
      setusername()
      setError('');
      validemail();
      setUservalues();
      setSuccess("successfully registered. now go to your gamil and varified your email link");
      
   }).catch((error) => {
        setError(error.message);
      });
  }

const validemail=()=>{

    sendEmailVerification(auth.currentUser)
      .then((result) => {
        console.log(result)
      });
}

const setusername=()=>{

    updateProfile(auth.currentUser, {
      displayName:uservalues.displayname
    }).then(() => {
      
    }).catch((error) => {
      
    });
}

/*register end */
    const signupWithgoogleLogin=()=>{

        return signInWithPopup(auth, googleProvider)
    }

    const Logout=()=>{
       
        signOut(auth).then(() => {
           setUser({});
           console.log(user)
         }).catch((error) => {
           console.log(error.message)
         })
 }

    useEffect(()=>{
    
        const unsubscribed=onAuthStateChanged(auth, (user) => {
          if (user) {
             setUser(user) 
          }else{
             setUser({});
            
          }

          setIsloading(false)
        });
        return unsubscribed;
       }
      ,[]);

    return{isloading,setSuccess,uservalues,setUservalues,singinLogin,handleloginchange,loginuser,setLoginuser,setError,Logout,signupWithgoogleLogin,user,Logout,isloading,setIsloading,handlechangeuservalues,createUser,error,success}

}

export default useFirebase;