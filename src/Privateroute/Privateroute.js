import { Redirect, Route } from "react-router";

import useAuth from "../hooks/useAuth";

function Privateroute({ children, ...rest }) {
      let {user,isloading} =useAuth()
      if(isloading){
       return "...loading";
      }
   
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.emailVerified ? (
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