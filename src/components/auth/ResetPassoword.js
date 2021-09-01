import React, { useState } from 'react';
import Navebar from '../Navebar';
import Axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import "../../const/GlobalHeader";
import { Backdrop } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
      backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
      },
}));

const ResetPassword = (props) => {
      const classes = useStyles();
      const token = localStorage.getItem('token');
      const location = useLocation();
      let history = useHistory();
      const [emailerror, setemailerror] = useState('');
      const [loading, setloading] = useState(false);
      // form data state
      const [data, setdata] = useState({
            'user_id': location.state.id,
            new_password: "",

      });
      // message state
      const [message, setMessage] = useState({
            new_password: '',

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
            if (data.new_password == '') {
                  setMessage((preValue) => {
                        return {
                              ...preValue,
                              new_password: "Password is Required",
                        }

                  });
            }
            else {
                  setloading(true);
                  try {
                        const res = await Axios({
                              method: 'post',
                              url: 'https://mploya.com/api/reset/password',
                              data: data,
                              header: {
                                    'Content-Type': 'application/json',
                                    Accept: 'application/json',
                                    Authorization: 'Brearer' + token,
                              }

                        });
                        history.push({
                              pathname: '/signin',
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
                                          <h5 className="text-center p-3"><b>Reset Password</b></h5>
                                          <span className="text-danger" style={{ fontSize: '12px' }}>{emailerror}</span>
                                          <form className="signin-form" onSubmit={onSubmit}>
                                                <input type="hidden" value={data.user_id} name="user_id" />
                                                <div className="mb-3">
                                                      <input type="password" name="new_password" value={data.new_password} className="form-control" placeholder="Enter New Passowrd" onChange={inputEvent} />
                                                      <span className="text-danger" style={{ fontSize: "12px" }}>{message.new_password}</span>
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

export default ResetPassword;