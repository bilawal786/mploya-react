import React from 'react';
import { NavLink } from "react-router-dom";
import Navebar from '../Navebar';
const Register = () => {

      return (
            <>
                  <Navebar />
                  <div className="container">
                        <div className="row justify-content-center">

                              <div className="col-md-4 bg-light shadow-lg p-3 mb-5 bg-white rounded smain" style={{ marginTop: "100px" }}>
                                    <h5 className="text-center mt-3"><b>Sign Up with Jobworld</b></h5>
                                    <div className="d-flex flex-row justify-content-center align-items-between">
                                          <p className="px-2">Already have a Monster account? </p>
                                          <a href="">Sign In</a>
                                    </div>
                                    <form>
                                          <div className="mb-3">
                                                <input type="email" className="form-control" placeholder="Email" />
                                          </div>
                                          <div className="mb-3">
                                                <input type="password" className="form-control" placeholder="Password" />
                                          </div>
                                          <div className="text-center">
                                                <p className="">By continuing you agree to our Privacy Policy Terms of Use and use of cookies.</p>
                                                <NavLink exact to="/user/dashboard" type="button" className="btn p-2 my-2 " style={{ backgroundColor: "#067d1f", color: "white", width: '100%', }}><b>Register</b></NavLink>
                                                <div className="or"><span className="ors mt-1">or</span></div>
                                                <button type="submit" className="btn p-2 my-3 " style={{ backgroundColor: '#1877f2', color: "white", width: '100%' }}><b>Continue With Facebook</b></button>

                                          </div>


                                    </form>

                              </div>
                        </div>
                  </div>
            </>
      );
}

export default Register;