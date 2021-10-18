import initializeAuthantication from "../Firebase/firebase.init";
import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth";
import {useState,useEffect} from 'react'

initializeAuthantication();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isloading,setIsloading]=useState(true);
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
             setUser({})
          }

          setIsloading(false)
        });
        return unsubscribed;
       }
      ,[]);

    return{ signupWithgoogleLogin,user,Logout,isloading,setIsloading}

}

export default useFirebase;