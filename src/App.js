import Home from "./Pages/Home/Home";
import Hader from "./shared/Hader/Hader";
import {Route,Switch,Redirect} from 'react-router-dom'
import Service from "./Pages/Services/Service";
import Details from "./Pages/Details/Details";
import Login from "./Pages/Login/Login";
import Privateroute from "./Privateroute/Privateroute";
import useFirebase from "./hooks/Firebasehook";

function App() {
  const {user}=useFirebase();
  return (
    <div className="App">
       <Hader/>
       <Switch>
           <Route exact path="/">
             <Home/>
           </Route>
           <Route path="/home">
              <Home/>
           </Route>
           <Route path="/service">
              <Service/>
           </Route>

           <Privateroute path="/details/:id">
             <Details/>
           </Privateroute>

           <Route path="/login">
           {user.emailVerified? <Redirect to="/home" /> : <Login/>}
             
           </Route>
           
       </Switch>
       
    </div>
  );
}

export default App;
