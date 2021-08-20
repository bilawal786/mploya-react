import React from 'react';
import { Switch,Route, Redirect } from "react-router";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css'; 
import Home from './components/Home';
import Navebar from './components/Navebar';
import Job from './components/jobpage/Job';
import Explore from './components/explore/Explore';
import About from './components/about/About';
import Testimonial from './components/testimonial/Testimonial';
import Signin from './components/auth/Signin';
import Register from './components/auth/Register';
import Profile from './components/employer/Profile';
const App = () => {
  return (
    <>
      <div className='container-fluid'>
        <Navebar />
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/jobs" component={Job} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/about" component={About} />
          <Route exact path="/testimonial" component={Testimonial} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/employer/profile" component={Profile} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
}

export default App;

