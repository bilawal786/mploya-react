import React, { useEffect, useState } from "react";
import VacancyChart from "./VacancyChart";
import Axios from "axios";
import './Dashboard.css';
import ExpenseChart from "./ExpenseChart";
import DashboardProfile from "./DashboardProfile";
import DashboardNearby from "./DashboardNearby";
import RecomendForYou from "./RecomendForYou";
import RecentActivities from "./RecentActivities";
import { Backdrop } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import DashboardGraph from "./DashboardGraph";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const Dashboard = () => {
    const [employee, setemployee] = useState([])
    let token = localStorage.getItem('token');
    const classes = useStyles();
    const [loading, setloading] = useState(false);
    console.log(employee);

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
    return (
        <>

            <div className="container-fluid">
                {loading ? (<Backdrop className={classes.backdrop} open>
                    <CircularProgress color="inherit" />
                </Backdrop>) : ''}
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="card border-0 shadow-lg rounded-10 mb-4 p-4">
                            <DashboardGraph />

                        </div>
                        <div className="card border-0 shadow-lg rounded-10 mb-4 p-4">
                            <VacancyChart />
                        </div>
                        <div className="card border-0 shadow-lg rounded-10 mb-4 p-4">
                            <ExpenseChart />
                        </div>
                        <div className="card border-0 shadow-lg rounded-10 mb-4 p-4">
                            {

                                <DashboardNearby data={employee} />

                            }


                        </div>

                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="card border-0 shadow-lg rounded-10 mb-4 p-4">
                            <DashboardProfile />

                        </div>
                        <div className="card border-0 shadow-lg rounded-10 mb-4 p-4">
                            <RecentActivities />
                        </div>
                        <div className="card border-0 shadow-lg rounded-10 mb-4 p-4">
                            <RecomendForYou data={employee} />
                        </div>




                    </div>


                </div>


            </div>






        </>
    );
}

export default Dashboard;