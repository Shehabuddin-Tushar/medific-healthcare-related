import React from "react"

import useFirebase from './Firebasehook';

export const AuthContext=React.createContext();

const Authprovider=({children})=>{



   const alluserdata=useFirebase();
  
 
       return(
         <AuthContext.Provider value={alluserdata}>
           {children}
         </AuthContext.Provider>
       );
   
}

export default Authprovider;