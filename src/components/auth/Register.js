import React, { useState } from 'react';
import Axios from "axios";
import { NavLink, useHistory } from "react-router-dom";
import Navebar from '../Navebar';
const Register = () => {
      let history = useHistory();

      // validayon ustate
      const [emailerror, setemailerror] = useState('');
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
                  try {
                        const res = await Axios({
                              method: 'post',
                              url: 'https://mploya.com/api/user/signup',
                              data: data,
                        });

                        if (res.data.success == true) {
                              console.log(res.data);
                              history.push("/verify/otp", {
                                    email: data.email
                              });
                        }



                  } catch (error) {
                        console.log(error.response.status);
                        setemailerror(error.response.data.error);
                  }

            }





      };

      return (
            <>
                  <Navebar />
                  <div className="container">
                        <div className="row justify-content-center">

                              <div className="col-md-4 bg-light shadow-lg p-3 mb-5 bg-white rounded smain" style={{ marginTop: "50px" }}>
                                    <h5 className="text-center mt-3"><b>Sign Up with Jobworld</b></h5>
                                    <div className="d-flex flex-row justify-content-center align-items-between">
                                          <p className="px-2">Already have a Monster account? </p>
                                          <a href="">Sign In</a>
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
                                          <div className="mb-3">
                                                <input type="password" name="password" className="form-control" placeholder="Password" onChange={inputEvent} autoComplete="off" />
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