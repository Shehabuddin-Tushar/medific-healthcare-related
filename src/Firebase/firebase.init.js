import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initializeAuthantication=()=>{
    initializeApp(firebaseConfig);  
}

export default initializeAuthantication;