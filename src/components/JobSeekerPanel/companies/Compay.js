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
      const [companies, seteCompanies] = useState([])
      const [pageNumber, setPageNumber] = useState(0);
      const companiesPerPage = 12;
      const pagesVisited = pageNumber * companiesPerPage;
      const [company, setSingleCompany] = useState('');
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
                  seteCompanies(res.data);
                  setSingleCompany(res.data[0]);

            } catch (error) {
                  setloading(false);
                  console.log(error);
            }

      }, [])

      const singleJob = (id) => {
            const index = companies.findIndex(seeker => {
                  return seeker.id === id;
            });

            //update the value of that index element
            const seeker = Object.assign({}, companies[index]);
            setSingleCompany(seeker);


      }
      const displayCompanies = companies
            .slice(pagesVisited, pagesVisited + companiesPerPage)
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

      const pageCount = Math.ceil(companies.length / companiesPerPage);
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
                                          {displayCompanies}
                                    </div>
                                    <ReactPaginate
                                          previousLabel={"Prev"}
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
                                                      <img className="nearby-icon-img-bg neg-margin-img text-center" src={company ? "https://mploya.com/" + company.image : "https://i.imgur.com/IRsUTtE.jpg"} />
                                                      <h4 className="mt-2 mb-0">{company ? company.occupation : 'UI Designer'}</h4>
                                                      <small className="primary-span">{company ? company.name : 'Bubbles Studio'}</small>

                                                </div>

                                                <small>
                                                      <p align="justify" className="text-muted">{company ? company.about : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying '}</p>
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
                                                            {company ? company.address : 'Machester England'}
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







