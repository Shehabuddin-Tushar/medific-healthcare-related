import { useContext } from "react"
import { AuthContext } from "./Contextapi"
const useAuth=()=>{
      return useContext(AuthContext);
}

export default useAuth;