import React, { useEffect, useState } from 'react';
import Axios from "axios";
import '../nearby/nearby.css';
import { Backdrop } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import ReactPaginate from 'react-paginate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: theme.spacing(0, 1, 0, 1),
    },
    paper: {
        // backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        // boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 1, 1, 1),
        width: "400px",
        height: '380px'
    },
}));


const Nearby = () => {
    const [employee, setemployee] = useState([])
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 12;
    const pagesVisited = pageNumber * usersPerPage;
    const [singleemployee, setsingleemployee] = useState('');
    const [isLike, setIsLike] = useState(0);
    let token = localStorage.getItem('token');
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [loading, setloading] = useState(false);
    // form data state
    console.log(singleemployee.id);
    const [data, setdata] = useState({
        time: '',
        date: '',
        jobseeker_id: '',

    });
    // message state
    const [message, setMessage] = useState({
        time: '',
        date: '',

    });


    useEffect(async () => {
        setloading(true);
        try {
            const res = await Axios({
                method: 'GET',
                url: 'https://mploya.com/api/all/jobseeker',
                headers: {
                    authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                },
            });
            setloading(false);
            setemployee(res.data);
            setsingleemployee(res.data[0]);

        } catch (error) {
            setloading(false);
            console.log(error);
        }

    }, [])

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const singleEmployee = (id) => {
        const index = employee.findIndex(seeker => {
            return seeker.id === id;
        });

        //update the value of that index element
        const seeker = Object.assign({}, employee[index]);
        setsingleemployee(seeker);
        setIsLike(seeker.isLike);

    }
    const displayJobseekers = employee
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((row) => {
            return (
                <div className="col-sm-6 col-md-6 col-lg-3 my-3" onClick={() => { singleEmployee(row.id) }}>
                    <div className="card border-0 shadow-lg nearby-card">
                        <div className="card-body text-center">
                            <img className="nearby-icon-img text-center mb-2" src={row.image ? "https://mploya.com/" + row.image : "https://i.imgur.com/IRsUTtE.jpg"} /><br />
                            <strong>{row.name}</strong><br />
                            <small><i class="fa fa-map-marker fa-sm" aria-hidden="true"></i>&nbsp;{row.address}</small>
                        </div>
                    </div>
                </div>
            );
        });

    const pageCount = Math.ceil(employee.length / usersPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const handleBookmark = async (id) => {

        console.log(id);
        try {
            const res = await Axios({
                method: 'post',
                url: 'https://mploya.com/api/jobseeker/bookmark',
                data: { jobseeker_id: id },
                headers: {
                    authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                },
            });

            console.log(res.data.message);
            if (res.status === 200) {
                const notify = () => {
                    toast.success(res.data.message, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
                if (isLike == 0) {
                    setIsLike(1);
                }
                else if (isLike == 1) {
                    setIsLike(0);
                }
                notify();
            }



        } catch (error) {

            console.log(error.response.data);
        }
    }
    const inputEvent = (event) => {

        const { name, value } = event.target;
        setdata((preValue) => {
            return {
                ...preValue,
                [name]: value,
                jobseeker_id: singleemployee.id,
            }

        });

    };
    // submit function 
    const onSubmit = async (event) => {
        event.preventDefault();
        // return error message
        if (data.time == '') {
            setMessage((preValue) => {
                return {
                    ...preValue,
                    time: "Time is Required",
                }

            });
        }
        else if (data.date == '') {
            setMessage((preValue) => {
                return {
                    ...preValue,
                    date: "Date is Required",
                }

            });
        }
        else {

            setloading(true);
            try {
                const res = await Axios({
                    method: 'post',
                    url: 'https://mploya.com/api/interview',
                    data: data,
                    headers: {
                        authorization: 'Bearer ' + token,
                        Accept: 'application/json',
                    }
                });

                if (res.status === 200) {
                    setloading(false);
                    handleClose();
                    const notify = () => {
                        toast.success(res.data.message, {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    }

                    notify();
                }





            } catch (error) {
                setloading(false);
                handleClose();
                const notify = () => {
                    toast.error(error.response.data.error, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }

                notify();
                console.log(error.response.data);

            }
        }

    };

    return (
        <>

            <div className='container-fluid'>
                <ToastContainer autoClose={4000} />
                {loading ? (<Backdrop className={classes.backdrop} open>
                    <CircularProgress color="inherit" />
                </Backdrop>) : ''}
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-9">
                        <div className="row mb-5">
                            {displayJobseekers}
                        </div>
                        <div className="overflow-auto">
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
                    <div className="col-sm-6 col-md-6 col-lg-3 my-3">
                        <div className="card shadow-lg nearby-card-bg">
                            <div className="blue-area"></div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="nearby-icon-img-bg neg-margin-img text-center" src={singleemployee ? "https://mploya.com/" + singleemployee.image : "https://i.imgur.com/IRsUTtE.jpg"} />
                                    <h4 className="mt-2 mb-0">{singleemployee ? singleemployee.name : 'UI Designer'}</h4>
                                    <small className="primary-span">{singleemployee ? singleemployee.occupation : 'Bubbles Studio'}</small>

                                </div>

                                <small>
                                    <p align="justify" className="text-muted">{singleemployee ? singleemployee.description : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'}</p>
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
                                    <p className="mt-2 mb-2"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;
                                        {singleemployee ? singleemployee.address : 'Machester England'}
                                    </p>
                                </small>
                                <div className="text-center">
                                    <button className="btn btn-success w-100 rounded-pill mb-2" onClick={handleOpen}>Request Interview</button>
                                    <Modal
                                        aria-labelledby="transition-modal-title"
                                        aria-describedby="transition-modal-description"
                                        className={classes.modal}
                                        open={open}
                                        onClose={handleClose}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                            timeout: 500,
                                        }}
                                    >
                                        <Fade in={open}>
                                            <div className={classes.paper}>
                                                <div className="col-md-8 bg-light w-100 shadow-lg p-3 mx-auto   bg-white rounded smain" >
                                                    {loading ? (<Backdrop className={classes.backdrop} open>
                                                        <CircularProgress color="inherit" />
                                                    </Backdrop>) : ''}
                                                    <h5 className="text-center p-3"><b>Send Request For Interview</b></h5>

                                                    <form className="signin-form" onSubmit={onSubmit}  >
                                                        <input type="hidden" name="jobseeker_id" value={data.jobseeker_id} />
                                                        <div className="mb-3">
                                                            <label htmlFor="">Select Time</label>
                                                            <input type="time" name="time" value={data.time} className="form-control" onChange={inputEvent} />
                                                            <span className="text-danger" style={{ fontSize: "12px" }}>{message.time}</span>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="">Select Date</label>
                                                            <input type="date" name="date" value={data.date} className="form-control" onChange={inputEvent} />
                                                            <span className="text-danger" style={{ fontSize: "12px" }}>{message.date}</span>
                                                        </div>

                                                        <div className="text-center">
                                                            <button type="submit" className="btn p-2 my-2" style={{ backgroundColor: "#067d1f", color: "white", width: '100%', }}><b>Send Request</b></button>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>
                                        </Fade>

                                    </Modal>
                                    {/* <button type="button" class="btn btn-circle shadow-bg mx-2" onClick={() => { handleBookmark(singleemployee.id) }}>{singleemployee.isLike ? <i class="fa fa-bookmark"></i> : <i class="fa fa-bookmark" style={{ color: "gray" }}></i>}</button> */}
                                    <button type="button" class="btn btn-circle shadow-bg mx-2" onClick={() => { handleBookmark(singleemployee.id) }}>{isLike == 1 ? <i class="fa fa-bookmark"></i> : <i class="fa fa-bookmark" style={{ color: "gray" }}></i>}</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Nearby;







