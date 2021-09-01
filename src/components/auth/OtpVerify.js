import React, { useState } from 'react';
import Navebar from '../Navebar';
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Backdrop } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
      backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
      },
}));

const OtpVerify = (props) => {
      const classes = useStyles();
      let history = useHistory();
      const [emailerror, setemailerror] = useState('');
      const [loading, setloading] = useState(false);
      // form data state
      const [data, setdata] = useState({
            email: props.location.state.email,
            otp: "",

      });
      // message state
      const [message, setMessage] = useState({
            otp: '',

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
            if (data.otp == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              otp: "Otp is Required",
                        }

                  });
            }
            else if (data.otp.length != 6) {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              otp: "Otp Minimum 6 Digits",
                        }

                  });
            } else {
                  setloading(true);
                  try {
                        const res = await Axios({
                              method: 'post',
                              url: 'https://mploya.com/api/opt/verify/email',
                              data: data,
                        });
                        history.push({
                              pathname: '/jobseeker/dashboard',

                        });

                  } catch (error) {
                        setemailerror(error.response.data.error);
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
                                          <h5 className="text-center p-3"><b>Verify OTP</b></h5>
                                          <p className="px-2 text-center">Opt send on your email</p>
                                          <span className="text-danger" style={{ fontSize: '12px' }}>{emailerror}</span>
                                          <form className="signin-form" onSubmit={onSubmit}>
                                                <div className="mb-3">
                                                      <input type="number" min='0' name="otp" value={data.otp} className="form-control" placeholder="Enter Otp" onChange={inputEvent} />
                                                      <span className="text-danger" style={{ fontSize: "12px" }}>{message.otp}</span>
                                                </div>

                                                <div className="text-center">
                                                      <button type="submit" className="btn p-2 my-2" style={{ backgroundColor: "#067d1f", color: "white", width: '100%', }}><b>Verify</b></button>
                                                </div>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default OtpVerify;