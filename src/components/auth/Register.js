import React, { useState } from 'react';
import Axios from "axios";
import { NavLink, useHistory } from "react-router-dom";
import Navebar from '../Navebar';
import { Backdrop } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import GoogleLogin from 'react-google-login';
import "../auth/signin.css";
const useStyles = makeStyles((theme) => ({
      backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
      },
}));
const Register = () => {
      const classes = useStyles();
      let history = useHistory();

      // validayon ustate
      const [emailerror, setemailerror] = useState('');
      const [loading, setloading] = useState(false);
      const [showhidepwd, setshowhidepwd] = useState(false);
      // form data state
      const [data, setdata] = useState({
            name: "",
            email: "",
            password: "",
            password_confirmation: '',
            user_type: "",
      });
      // message state
      const [message, setMessage] = useState({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            user_type: "",
      });
      const handlePasswordHideShow = () => {
            setshowhidepwd(!showhidepwd);
      }

      // get in put vale function 
      const inputEvent = (event) => {
            console.log(event.target.value);
            console.log(event.target.name);
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
            if (data.name == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              name: "Name is Required",
                        }

                  });
            }
            else if (data.email == '') {
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

            else if (data.password_confirmation == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              password_confirmation: "Confirm Password is Required",
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
            }
            else if (data.password_confirmation != data.password) {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              password_confirmation: "Password does't match is Required",
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
                              url: 'https://mploya.com/api/user/signup',
                              data: data,
                        });

                        localStorage.setItem('id', res.data.id);
                        localStorage.setItem('image', res.data.image);
                        localStorage.setItem('email', data.email);
                        localStorage.setItem('name', data.name);
                        localStorage.setItem('user_type', data.user_type);
                        if (res.data.success == true) {
                              console.log(res.data);
                              history.push("/verify/otp", {
                                    email: data.email,
                                    user_type: data.user_type,
                              });
                        }



                  } catch (error) {
                        setloading(false);
                        setemailerror(error.response.data.error);
                  }

            }
      };

      const responseGoogle = async (response) => {

            if (data.user_type == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              user_type: "User Type is Required",
                        }

                  });
            } else {
                  const user_info = {
                        'provider_id': response.profileObj.googleId,
                        'provider_name': 'google',
                        'name': response.profileObj.name,
                        'email': response.profileObj.email,
                        'user_type': data.user_type,
                  };
                  setloading(true);
                  try {
                        const res = await Axios({
                              method: 'post',
                              url: 'https://mploya.com/api/social/register',
                              data: user_info,
                        });

                        console.log(res);
                        localStorage.setItem("isAuthenticated", "true");
                        history.push({
                              pathname: '/dashboard',

                        });

                  } catch (error) {
                        console.log(error.response.data.error);
                  }
            }
      }

      return (
            <>
                  <div className="container-fluid">
                        <Navebar />
                        <div className="container">
                              <div className="row justify-content-center">

                                    <div className="col-sm-6 col-md-6 col-lg-4 bg-light shadow-lg p-3 mb-5 bg-white rounded smain" style={{ marginTop: "34px" }}>
                                          {loading ? (<Backdrop className={classes.backdrop} open>
                                                <CircularProgress color="inherit" />
                                          </Backdrop>) : ''}
                                          <h5 className="text-center mt-3"><b>Sign Up with Jobworld</b></h5>
                                          <div className="d-flex flex-row justify-content-center align-items-between">
                                                <p className="px-2">Already have a Monster account? </p>
                                                <NavLink exact to="/signin" style={{ color: "#067d1f", textDecoration: 'none' }}>Sign In</NavLink>
                                          </div>
                                          <form onSubmit={onSubmit}>
                                                <div className="mb-3">
                                                      <input type="text" name="name" className="form-control" placeholder="Name" onChange={inputEvent} autoComplete="off" />
                                                      <span className="text-danger" style={{ fontSize: "12px" }}>{message.name}</span>
                                                </div>
                                                <div className="mb-3">
                                                      <input type="email" name="email" className="form-control" placeholder="Email" onChange={inputEvent} autoComplete="off" />
                                                      <span className="text-danger" style={{ fontSize: "12px" }}>{message.email}</span>
                                                      <span className="text-danger" style={{ fontSize: "12px" }}>{emailerror}</span>

                                                </div>
                                                <div className="mb-3 input-group">
                                                      <input type={showhidepwd ? "text" : "password"} name="password" className="form-control" placeholder="Password" onChange={inputEvent} autoComplete="off" />
                                                      <span class="input-group-btn" id="eyeShow">
                                                            <button class="btn btn-default" style={{ height: "40px", border: "1px solid #d2d6d9" }} onClick={handlePasswordHideShow} type="button"><i class="fa fa-eye" aria-hidden="true"></i></button>
                                                      </span>
                                                      <span className="text-danger" style={{ fontSize: "12px" }}>{message.password}</span>
                                                </div>
                                                <div className="mb-3">
                                                      <input type="password" name="password_confirmation" className="form-control" placeholder="Confirm Password" onChange={inputEvent} autoComplete="off" />
                                                      <span className="text-danger" style={{ fontSize: "12px" }}>{message.password_confirmation}</span>
                                                </div>
                                                <div className="d-flex flex-row">
                                                      <div className="form-check form-switch">
                                                            <input className="form-check-input" name="user_type" value="employer" type="radio" id="flexSwitchCheckDefault" onChange={inputEvent} autoComplete="off" />
                                                            <label className="form-check-label" for="flexSwitchCheckDefault">Employer</label>
                                                      </div>
                                                      <div className="form-check form-switch" style={{ marginLeft: '30px' }}>
                                                            <input className="form-check-input" name="user_type" value="jobseeker" type="radio" id="flexSwitchCheckDefault" onChange={inputEvent} autoComplete="off" />
                                                            <label className="form-check-label" for="flexSwitchCheckDefault">Jobseeker</label>
                                                      </div>

                                                </div>
                                                <span className="text-danger" style={{ fontSize: "12px" }}>{message.user_type}</span>

                                                <div className="text-center mt-3">
                                                      <p className="">By continuing you agree to our Privacy Policy Terms of Use and use of cookies.</p>
                                                      <button type="submit" className="btn p-2 my-2 " style={{ backgroundColor: "#067d1f", color: "white", width: '100%', }}><b>Register</b></button>
                                                      <div className="or"><span className="ors mt-1">or</span></div>
                                                      {/* <button type="submit" className="btn p-2 my-3 " style={{ backgroundColor: '#1877f2', color: "white", width: '100%' }}><b>Continue With Facebook</b></button> */}

                                                      <div className="d-flex d-flex-row justify-content-center">
                                                            <GoogleLogin
                                                                  clientId="829727832715-bckt5d5tuereqnbblklum67ncijalqn6.apps.googleusercontent.com"
                                                                  render={renderProps => (

                                                                        <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn m-3 " style={{ backgroundColor: '#db4437', color: "white", width: '40%' }}><b><i className="fa fa-google" style={{ fontSize: '18px' }}></i>  &nbsp; Google</b></button>
                                                                  )}
                                                                  onSuccess={responseGoogle}
                                                                  onFailure={responseGoogle}
                                                                  cookiePolicy={'single_host_origin'}
                                                            />

                                                            <GoogleLogin
                                                                  clientId="829727832715-bckt5d5tuereqnbblklum67ncijalqn6.apps.googleusercontent.com"
                                                                  render={renderfProps => (

                                                                        <button onClick={renderfProps.onClick} disabled={renderfProps.disabled} className="btn m-3 " style={{ backgroundColor: '#0676e7', color: "white", width: '40%' }}><b><i class="fa fa-facebook-f" style={{ fontSize: '18px' }}></i> &nbsp; Facebook</b></button>
                                                                  )}
                                                                  buttonText="Login"
                                                                  onSuccess={responseGoogle}
                                                                  onFailure={responseGoogle}
                                                                  cookiePolicy={'single_host_origin'}
                                                            />

                                                      </div>
                                                </div>


                                          </form>

                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default Register;