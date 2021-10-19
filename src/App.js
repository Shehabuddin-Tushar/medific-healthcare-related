import Home from "./Pages/Home/Home";
import Hader from "./shared/Hader/Hader";
import {Route,Switch,Redirect} from 'react-router-dom'
import Service from "./Pages/Services/Service";
import Details from "./Pages/Details/Details";
import Login from "./Pages/Login/Login";
import Privateroute from "./Privateroute/Privateroute";
import useFirebase from "./hooks/Firebasehook";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./shared/Footer/Footer";
import Pagenotfound from "./Pages/page404/Pagenotfound";
import {BrowserRouter} from 'react-router-dom'
import Authprovider from "./hooks/Contextapi";

function App() {
  const {user}=useFirebase();
  console.log(user)
  return (
    <div className="App">
    <Authprovider>
    <BrowserRouter>
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
           <Route path="/about">
              <About/>
           </Route>
           <Route path="/contact">
              <Contact/>
           </Route>
           <Privateroute exact path="/details/:id">
               <Details/>
             
           </Privateroute>

           <Route path="/login">
             {user.emailVerified? <Redirect to="/home" /> : <Login/>}
            
           </Route>

           <Route path='*' exact={true}>
              <Pagenotfound/>
           </Route>
           
          </Switch>
        <Footer/>
       </BrowserRouter>
    </Authprovider>
    </div>
  );
}

export default App;
