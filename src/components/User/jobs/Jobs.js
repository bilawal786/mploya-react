import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { useHistory } from "react-router-dom";
import '../nearby/nearby.css';
import { Backdrop } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import ReactPaginate from 'react-paginate';
import { Markup } from 'interweave';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const useStyles = makeStyles((theme) => ({
      backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
      },
}));


const Job = () => {
      let history = useHistory();
      const [jobs, seteJobs] = useState([])
      const [pageNumber, setPageNumber] = useState(0);
      const usersPerPage = 12;
      const pagesVisited = pageNumber * usersPerPage;
      const [job, setSingleJob] = useState('');
      let token = localStorage.getItem('token');
      const classes = useStyles();
      const [loading, setloading] = useState(false);
      useEffect(async () => {
            setloading(true);
            try {
                  const res = await Axios({
                        method: 'GET',
                        url: 'https://mploya.com/api/employer/jobs',
                        headers: {
                              authorization: 'Bearer ' + token,
                              Accept: 'application/json',
                        },
                  });
                  setloading(false);
                  seteJobs(res.data);
                  setSingleJob(res.data[0]);

            } catch (error) {
                  setloading(false);
                  console.log(error);
            }


      }, [])

      const singleJob = (id) => {
            const index = jobs.findIndex(seeker => {
                  return seeker.id === id;
            });

            //update the value of that index element
            const seeker = Object.assign({}, jobs[index]);
            setSingleJob(seeker);


      }

      const editJob = () => {

            history.push('/edit-job', {
                  'job': job,
            })

      }

      // change status

      const changeStatus = async () => {
            setloading(true);
            try {
                  const res = await Axios({
                        method: 'get',
                        url: 'https://mploya.com/api/job/' + 100,
                        headers: {
                              authorization: 'Bearer ' + token,
                              Accept: 'application/json',
                        },
                  });
                  setloading(false);
                  console.log(res.data);
                  const notify = () => {
                        toast.success(res.data.message, {
                              position: toast.POSITION.TOP_RIGHT
                        });
                  }
                  notify();


            } catch (error) {
                  setloading(false);
                  console.log(error.response.data.error);
                  const notify = () => {
                        toast.error(error.response.data.error, {
                              position: toast.POSITION.TOP_RIGHT
                        });
                  }
                  notify();
            }
      }

      // delete job

      const deleteJob = async () => {
            setloading(true);
            try {
                  const res = await Axios({
                        method: 'delete',
                        url: 'https://mploya.com/api/delete/job/' + job.id,
                        headers: {
                              authorization: 'Bearer ' + token,
                              Accept: 'application/json',
                        },
                  });
                  setloading(false);
                  console.log(res.data.message);
                  const notify = () => {
                        toast.success(res.data.message, {
                              position: toast.POSITION.TOP_RIGHT
                        });
                  }
                  notify();


            } catch (error) {
                  setloading(false);
                  console.log(error.response);
                  const notify = () => {
                        toast.error(error.response.data.error, {
                              position: toast.POSITION.TOP_RIGHT
                        });
                  }
                  notify();
            }

      }


      const displayJobseekers = jobs
            .slice(pagesVisited, pagesVisited + usersPerPage)
            .map((row) => {
                  return (
                        <div className="col-sm-6 col-md-6 col-lg-4 mb-3" onClick={() => { singleJob(row.id) }}>
                              <div className="card border-0 nearby-card shadow-lg">
                                    <div className="card-body text-center">
                                          <img className="nearby-icon-img text-center mb-2" src={row.employer_image ? "https://mploya.com/" + row.employer_image : "https://i.imgur.com/IRsUTtE.jpg"} /><br />
                                          <strong>{row.job_title}</strong><br />
                                          <small className="primary-span">{row.company_name}</small>

                                          <small className="small-txt"><i class="fa fa-map-marker fa-sm" aria-hidden="true"></i>&nbsp;{row.address}</small>
                                          <small className="small-txt">{row.currencySymbol}&nbsp;{Math.round(row.min_salary)} - {Math.round(row.max_salary)}</small>

                                    </div>
                              </div>
                        </div>
                  );
            });

      const pageCount = Math.ceil(jobs.length / usersPerPage);
      const changePage = ({ selected }) => {
            setPageNumber(selected);
      };
      return (
            <>
                  <div className='container-fluid'>
                        <ToastContainer />
                        {loading ? (<Backdrop className={classes.backdrop} open>
                              <CircularProgress color="inherit" />
                        </Backdrop>) : ''}
                        <div className="row">
                              <div className="col-sm-12 col-md-12 col-lg-9">
                                    <div className="row mb-3">
                                          {displayJobseekers}
                                    </div>
                                    <div>
                                          <ReactPaginate
                                                previousLabel={"Prev"}
                                                nextLabel={"Next"}
                                                pageCount={pageCount}
                                                onPageChange={changePage}
                                                containerClassName={"paginationBttnsLight"}
                                                previousLinkClassName={"previousBttnLight"}
                                                nextLinkClassName={"nextBttnLight"}
                                                disabledClassName={"paginationDisabledLight"}
                                                activeClassName={"paginationActiveLight"}
                                          />

                                    </div>

                              </div>
                              <div className="col-sm-6 col-md-6 col-lg-3 mb-3">

                                    <div className="card shadow-lg nearby-card-bg">
                                          <div className="blue-area"></div>
                                          <div className="card-body">
                                                <div className="text-center">
                                                      <img className="nearby-icon-img-bg neg-margin-img text-center" src={job ? "https://mploya.com/" + job.employer_image : "https://i.imgur.com/IRsUTtE.jpg"} />
                                                      <h4 className="mt-2 mb-0">{job ? job.job_title : 'UI Designer'}</h4>
                                                      <small className="primary-span">{job ? job.occupation : 'Bubbles Studio'}</small>

                                                </div>

                                                <small>
                                                      <p align="justify" className="text-muted">{job ? <Markup content={job.requirements} /> : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'}</p>
                                                </small>

                                                <small>
                                                      <p className="text-muted my-0"><i className="fa fa-star star-color-green"></i>&nbsp;
                                                            Lorem ipsum.</p>
                                                      <p className="text-muted my-0"><i className="fa fa-star star-color-green"></i>&nbsp;
                                                            Lorem ipsum.</p>
                                                      <p className="text-muted my-0"><i className="fa fa-star star-color-green"></i>&nbsp;
                                                            Lorem ipsum.</p>
                                                      <p className="text-muted my-0"><i className="fa fa-star star-color-green"></i>&nbsp;
                                                            Lorem ipsum.</p>
                                                      <p className="mt-2 mb-2 text-center"><i class="fa fa-map-marker star-color-green" aria-hidden="true"></i>&nbsp;&nbsp;
                                                            {job ? job.address : 'Machester England'}
                                                      </p>
                                                </small>
                                                <div className="text-center" >

                                                      <button className="btn btn-success btn-sm rounded-pill px-3 mx-2" data-toggle="tooltip" data-placement="right" title="Edit Job" onClick={editJob}><i className="fa fa-pencil"></i></button>
                                                      <button className="btn btn-danger btn-sm rounded-pill px-3 mx-2" data-toggle="tooltip" data-placement="right" title="Delete Job" onClick={deleteJob}><i class="fa fa-trash"></i></button>
                                                      <button className="btn btn-info btn-sm rounded-pill px-3 mx-2 mt-2" data-toggle="tooltip" data-placement="right" title="Change Status" onClick={changeStatus}>Change Status</button>

                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

            </>
      );
}
export default Job;







