import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import RegisterNew from "./Components/Register/RegisterNew";
import ResetPage from "./Components/Login/Reset";
import Dashboard from "./Components/Dashboard/Dashboard";
import Trip from "./Components/Dashboard/Trip";
import Schedule from './Components/Dashboard/Schedule';
import Emergency from './Components/Dashboard/Emergency';





function App() {
  return (
   <Router>
     <Switch>
       <Route  path="/" exact component={Login}/>
       <Route  path="/dashboard"  component={Dashboard} />
       <Route  path="/register" component={Register}/>
       <Route  path="/registernew" component={RegisterNew}/>
       <Route  path="/reset" component={ResetPage}/>
       
       <Route  path="/trip" component={Trip} />
       <Route  path="/emergency" component={Emergency} />
       <Route  path="/schedule" component={Schedule} />
     </Switch>
   </Router>
  );
}



export default App;
