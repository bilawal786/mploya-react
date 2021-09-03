import React, { useEffect, useState } from 'react';
import Axios from "axios";
import '../nearby/nearby.css';
import { Backdrop } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));


const Nearby = () => {
    const [employee, setemployee] = useState([])
    const [singleemployee, setsingleemployee] = useState(null);
    let token = localStorage.getItem('token');
    const classes = useStyles();
    const [loading, setloading] = useState(false);
    console.log(singleemployee);
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

        } catch (error) {
            setloading(false);
            console.log(error);
        }

    }, [])

    const singleEmployee = (id) => {
        const index = employee.findIndex(seeker => {
            return seeker.id === id;
        });

        //update the value of that index element
        const seeker = Object.assign({}, employee[index]);
        setsingleemployee(seeker);


    }

    return (
        <>
            <div className='container-fluid'>
                {loading ? (<Backdrop className={classes.backdrop} open>
                    <CircularProgress color="inherit" />
                </Backdrop>) : ''}
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-9">
                        <div className="row">
                            {employee.map((row) => (

                                <div className="col-sm-6 col-md-6 col-lg-3 my-3" onClick={() => { singleEmployee(row.id) }}>
                                    <div className="card border-0 shadow-lg nearby-card">
                                        <div className="card-body text-center">
                                            <img className="nearby-icon-img text-center mb-2" src={row.image ? "https://mploya.com/" + row.image : "https://i.imgur.com/IRsUTtE.jpg"} /><br />
                                            <strong>{row.name}</strong><br />
                                            <small><i class="fa fa-map-marker fa-sm" aria-hidden="true"></i>&nbsp;{row.address}</small>
                                        </div>
                                    </div>
                                </div>


                            ))}
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3  my-3">

                        <div className="card shadow-lg nearby-card-bg">
                            <div className="blue-area"></div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="nearby-icon-img-bg neg-margin-img text-center" src={singleemployee ? "https://mploya.com/" + singleemployee.image : "https://i.imgur.com/IRsUTtE.jpg"} />
                                    <h4 className="mt-2 mb-0">{singleemployee ? singleemployee.occupation : 'UI Designer'}</h4>
                                    <small className="primary-span">{singleemployee ? singleemployee.name : 'Bubbles Studio'}</small>

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
                                    {/* <p><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;
                                        Machester England
                                    </p> */}
                                </small>
                                <div className="text-center">
                                    <button className="btn btn-success rounded-pill mb-2">Send Response</button>
                                    <button type="button" class="btn btn-circle shadow-bg mx-2"><i class="fa fa-envelope"></i></button>
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

// let semployee = null;
// function NBECard(props) {
//     const singleEmployee = (id) => {
//         const index = props.employee.findIndex(seeker => {
//             return seeker.id === id;
//         });

//         //update the value of that index element
//         const seeker = Object.assign({}, props.employee[index]);
//         semployee = seeker;
//         console.log(semployee);

//     }
//     return (
//         <>
//             <div className="col-sm-6 col-md-6 col-lg-3 my-3" onClick={() => { singleEmployee(props.id) }}>
//                 <div className="card border-0 shadow-lg nearby-card">
//                     <div className="card-body text-center">
//                         <img className="nearby-icon-img text-center mb-2" src={props.image ? "https://mploya.com/" + props.image : "https://i.imgur.com/IRsUTtE.jpg"} /><br />
//                         <strong>{props.name}</strong><br />
//                         <small><i class="fa fa-map-marker fa-sm" aria-hidden="true"></i>&nbsp;{props.address}</small>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// };