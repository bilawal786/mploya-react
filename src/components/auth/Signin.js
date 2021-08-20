import React from 'react';
import { NavLink } from "react-router-dom";
const Signin = () => {

      return (
            <>
                  <div className="container">
                        <div className="row justify-content-center">

                              <div className="col-md-4 bg-light shadow-lg p-3 mb-5 bg-white rounded smain" style={{ marginTop: "100px" }}>
                                    <h5 className="text-center p-3"><b>Sign In with Jobworld</b></h5>
                                    <form className="signin-form">
                                          <div className="mb-3">
                                                <input type="email" className="form-control" placeholder="Email" />
                                          </div>
                                          <div className="mb-3">
                                                <input type="password" className="form-control" placeholder="Password" />
                                          </div>
                                          <div className="d-flex flex-row justify-content-between">
                                          <p>Keep me logged in </p> 
                                          <a href="">Forgot password?</a>
                                          </div>
                                           
 
                                          <div className="text-center">
                                          <NavLink exact to="/employer/profile" type="button" className="btn p-2 my-2" style={{ backgroundColor: "#067d1f", color: "white", width: '100%', }}><b>Sign In</b></NavLink>
                                          
                                          <div className="or"><span className="ors mt-1">or</span></div>
                                          
                                          <button type="submit" className="btn p-2 my-3 " style={{ backgroundColor: '#1877f2', color: "white", width: '100%' }}><b>Sign In With Facebook</b></button>

                                         
                                          </div>
                                          <div className="d-flex flex-row justify-content-center">
                                          <p className="px-2">Don't have a account?</p>
                                          <a href="">Sign Up</a>
                                          </div>  
                                          
                                    </form>

                              </div>
                        </div>
                  </div>
            </>
      );
}

export default Signin;