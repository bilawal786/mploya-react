import React, { useState } from 'react';
import Navebar from '../Navebar';
import { useHistory } from "react-router-dom";
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

const ForgotPassword = (props) => {
      let history = useHistory();
      const classes = useStyles();
      const [emailerror, setemailerror] = useState('');
      const [loading, setloading] = useState(false);
      // form data state
      const [data, setdata] = useState({
            email: '',


      });
      // message state
      const [message, setMessage] = useState({
            email: '',

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
            else {
                  setloading(true);
                  try {
                        const res = await Axios({
                              method: 'post',
                              url: 'https://mploya.com/api/forgot/password',
                              data: data,
                        });
                        if (res.data.success == true) {

                              history.push("/password/verify/otp", { email: data.email });
                        }

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
                                          <h5 className="text-center p-3"><b>Verify Email</b></h5>
                                          <span className="text-danger" style={{ fontSize: '12px' }}>{emailerror}</span>
                                          <form className="signin-form" onSubmit={onSubmit}>
                                                <div className="mb-3">
                                                      <input type="email" name="email" value={data.email} className="form-control" placeholder="Enter Email" onChange={inputEvent} />
                                                      <span className="text-danger" style={{ fontSize: "12px" }}>{message.email}</span>
                                                </div>

                                                <div className="text-center">
                                                      <button type="submit" className="btn p-2 my-2" style={{ backgroundColor: "#067d1f", color: "white", width: '100%', }}><b>Send</b></button>
                                                </div>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default ForgotPassword;