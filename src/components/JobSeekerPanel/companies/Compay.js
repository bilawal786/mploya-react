import React, { useEffect, useState } from 'react';
import Axios from "axios";
import '../nearby/nearby.css';
import { Backdrop } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import ReactPaginate from 'react-paginate';

const useStyles = makeStyles((theme) => ({
      backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
      },
}));


const Compay = () => {
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
                        url: 'https://mploya.com/api/all/employers',
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
      const displayJobseekers = jobs
            .slice(pagesVisited, pagesVisited + usersPerPage)
            .map((row) => {
                  return (
                        <div className="col-sm-6 col-md-6 col-lg-3 mb-3" onClick={() => { singleJob(row.id) }}>
                              <div className="card border-0 shadow-lg nearby-card-dark">
                                    <div className="card-body text-center">
                                          <img className="nearby-icon-img text-center mb-2" src={row.image ? "https://mploya.com/" + row.image : "https://i.imgur.com/IRsUTtE.jpg"} /><br />
                                          <strong className="text-white">{row.name}</strong><br />
                                          <small className="primary-span">{row.company_name}</small>
                                          <strong>
                                                <small className="small-txt text-muted"><i class="fa fa-map-marker fa-sm" aria-hidden="true"></i>&nbsp;{row.address}</small>
                                                {/* <small className="small-txt text-muted">{row.currencySymbol}&nbsp;{row.min_salary} - {row.max_salary}</small> */}
                                          </strong>
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
                        {loading ? (<Backdrop className={classes.backdrop} open>
                              <CircularProgress color="inherit" />
                        </Backdrop>) : ''}
                        <div className="row">
                              <div className="col-sm-12 col-md-12 col-lg-9">
                                    <div className="row mb-5">
                                          {displayJobseekers}
                                    </div>
                                    <ReactPaginate
                                          previousLabel={"Previous"}
                                          nextLabel={"Next"}
                                          pageCount={pageCount}
                                          onPageChange={changePage}
                                          containerClassName={"paginationBttns1"}
                                          previousLinkClassName={"previousBttn1"}
                                          nextLinkClassName={"nextBttn1"}
                                          disabledClassName={"paginationDisabled1"}
                                          activeClassName={"paginationActive1"}
                                    />
                              </div>
                              <div className="col-sm-6 col-md-6 col-lg-3  mb-3">

                                    <div className="card shadow-lg nearby-card-bg bg-dark-mode">
                                          <div className="blue-area"></div>
                                          <div className="card-body">
                                                <div className="text-center">
                                                      <img className="nearby-icon-img-bg neg-margin-img text-center" src={job ? "https://mploya.com/" + job.image : "https://i.imgur.com/IRsUTtE.jpg"} />
                                                      <h4 className="mt-2 mb-0">{job ? job.occupation : 'UI Designer'}</h4>
                                                      <small className="primary-span">{job ? job.name : 'Bubbles Studio'}</small>

                                                </div>

                                                <small>
                                                      <p align="justify" className="text-muted">{job ? job.about : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying '}</p>
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
                                                      <p className="text-muted mt-2 mb-2"><i class="fa fa-map-marker star-color-green" aria-hidden="true"></i>&nbsp;&nbsp;
                                                            {job ? job.address : 'Machester England'}
                                                      </p>

                                                </small>
                                                <div className="text-center">
                                                      <button className="btn btn-success btn-sm rounded-pill mx-2">Send Response</button>
                                                      <button className="btn btn-secondary btn-sm rounded-pill px-3"><i class="fa fa-envelope"></i></button>

                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

            </>
      );
}
export default Compay;







