import React, { useState } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import Navebar from '../Navebar';
import Axios from "axios";
import { Backdrop } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
      backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
      },
}));

const Signin = () => {
      const classes = useStyles();
      let history = useHistory();
      // invalid login cre usestate
      const [invalid, setinvalid] = useState()
      const [loading, setloading] = useState(false);
      // form data state
      const [data, setdata] = useState({
            email: "",
            password: "",
            user_type: "",
      });
      // message state
      const [message, setMessage] = useState({
            email: '',
            password: '',
            user_type: "",
      });

      // get in put vale function 
      const inputEvent = (event) => {

            const { name, value } = event.target;
            setdata((preValue) => {
                  return {
                        ...preValue,
                        [name]: value,
                  }

            });

      };
      // submit function 
      const onSubmit = async (event) => {
            event.preventDefault();
            // return error message
            if (data.email == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              email: "Email is Required",
                        }

                  });
            }
            else if (data.password == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              password: "password is Required",
                        }

                  });
            }
            else if (data.user_type == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              user_type: "User Type is Required",
                        }

                  });
            } else if (data.password.length < 8) {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              password: "Password must be at least 8 characters",
                        }

                  });
            } else {
                  setloading(true);
                  try {
                        const res = await Axios({
                              method: 'post',
                              url: 'https://mploya.com/api/user/login',
                              data: data,
                        });

                        localStorage.setItem("isAuthenticated", "true");
                        history.push({
                              pathname: '/dashboard',

                        });





                  } catch (error) {
                        setinvalid(error.response.data.error);
                  }
            }



      };
      return (
            <>
                  <div className="container-fluid">
                        <Navebar />
                        <div className="container">
                              <div className="row justify-content-center">

                                    <div className="col-md-4 bg-light shadow-lg p-3 mb-5 bg-white rounded smain" style={{ marginTop: "100px" }}>
                                          {loading ? (<Backdrop className={classes.backdrop} open>
                                                <CircularProgress color="inherit" />
                                          </Backdrop>) : ''}
                                          <h5 className="text-center p-3"><b>Sign In with Jobworld</b></h5>
                                          <span className="text-danger" style={{ fontSize: '14px' }}>{invalid}</span>
                                          <form className="signin-form" onSubmit={onSubmit}>
                                                <div className="mb-3">
                                                      <input type="email" name="email" value={data.email} className="form-control" placeholder="Email" onChange={inputEvent} />
                                                      <span className="text-danger" style={{ fontSize: "12px" }}>{message.email}</span>
                                                </div>
                                                <div className="mb-3">
                                                      <input type="password" name="password" value={data.password} className="form-control" placeholder="Password" onChange={inputEvent} />
                                                      <span className="text-danger" style={{ fontSize: "12px" }}>{message.password}</span>
                                                </div>
                                                <div className="d-flex flex-row">
                                                      <div className="form-check form-switch">
                                                            <input className="form-check-input" name="user_type" value="employer" type="radio" id="flexSwitchCheckDefault" onChange={inputEvent} />
                                                            <label className="form-check-label" for="flexSwitchCheckDefault">Employer</label>
                                                      </div>
                                                      <div className="form-check form-switch" style={{ marginLeft: '30px' }}>
                                                            <input className="form-check-input" name="user_type" value="jobseeker" type="radio" id="flexSwitchCheckDefault" onChange={inputEvent} />
                                                            <label className="form-check-label" for="flexSwitchCheckDefault">Jobseeker</label>
                                                      </div>
                                                </div>
                                                <span className="text-danger" style={{ fontSize: "12px" }}>{message.user_type}</span>

                                                <div className="d-flex flex-row justify-content-between mt-3">
                                                      <p>Keep me logged in </p>
                                                      <NavLink exact to="/forgot/password">Forgot password?</NavLink>
                                                </div>


                                                <div className="text-center">
                                                      <button type="submit" className="btn p-2 my-2" style={{ backgroundColor: "#067d1f", color: "white", width: '100%', }}><b>Sign In</b></button>

                                                      <div className="or"><span className="ors mt-1">or</span></div>

                                                      <button type="submit" className="btn p-2 my-3 " style={{ backgroundColor: '#1877f2', color: "white", width: '100%' }}><b>Sign In With Facebook</b></button>


                                                </div>
                                          </form>
                                          <div className="d-flex flex-row justify-content-center">
                                                <p className="px-2">Don't have a account?</p>
                                                <NavLink exact to="/register">Sign Up</NavLink>
                                          </div>



                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default Signin;