import { Redirect, Route } from "react-router";
//import useAuth from "../../hooks/useAuth";
import {useState} from 'react'
import useFirebase from "../hooks/Firebasehook";

function Privateroute({ children, ...rest }) {
      let {user,isloading} =useFirebase()
      if(isloading){
       return "...loading";
      }
   
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default Privateroute;