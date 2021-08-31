import React from 'react';
import { Switch, Route, Redirect } from "react-router";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';
import Home from './components/Home';
import Job from './components/jobpage/Job';
import Explore from './components/explore/Explore';
import About from './components/about/About';
import Testimonial from './components/testimonial/Testimonial';
import Signin from './components/auth/Signin';
import Register from './components/auth/Register';
import Profile from './components/employer/Profile';
import Dashboard from './components/User/Dashboard/Dashboard';
import OptVerify from './components/auth/OtpVerify';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassoword';
import PassowordVerifyOpt from './components/auth/PassowordVerifyOpt';

const App = () => {
  return (
    <>

      <div className='container-fluid'>
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/jobs" component={Job} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/about" component={About} />
          <Route exact path="/testimonials" component={Testimonial} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/verify/otp" component={OptVerify} />
          <Route exact path="/employer/profile" component={Profile} />
          {/* forgot password */}
          <Route exact path="/forgot/password" component={ForgotPassword} />
          {/* password verify opt */}
          <Route exact path="/password/verify/otp" component={PassowordVerifyOpt} />

          {/* reset password */}
          <Route exact path="/reset/password" component={ResetPassword} />
          {/* User Dashbosrg */}
          <Route exact path="/user/dashboard" component={Dashboard} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
}

export default App;

