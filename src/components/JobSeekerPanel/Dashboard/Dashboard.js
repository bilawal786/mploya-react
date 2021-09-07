import React, { useEffect, useState } from "react";
import VacancyChart from "./VacancyChart";
import Axios from "axios";
import './Dashboard.css';
import ExpenseChart from "./ExpenseChart";
import DashboardProfile from "./DashboardProfile";
import FeaturedCompany from "./FeaturedCompany";
import RecentActivities from "./RecentActivities";
import AvailableForYou from "./AvailableForYou";
import { Backdrop } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const Dashboard = () => {
    const [employers, setEmployers] = useState([])
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
            if (res.status === 200) {
                setloading(false);
                setEmployers(res.data);
            }


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
                        <div className="card bg-dark-mode border-0 shadow-lg rounded-10 mb-4 p-4">
                            <h4 className="text-white">Graph</h4>

                        </div>
                        <div className="card bg-dark-mode border-0 shadow-lg rounded-10 mb-4 p-4">
                            <VacancyChart />
                        </div>
                        <div className="card bg-dark-mode border-0 shadow-lg rounded-10 mb-4 p-4">
                            <ExpenseChart />
                        </div>
                        <div className="card bg-dark-mode border-0 shadow-lg rounded-10 mb-4 p-4">
                            <FeaturedCompany data={employers} />

                        </div>

                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="card bg-dark-mode border-0 shadow-lg rounded-10 mb-4 p-4">
                            <DashboardProfile />

                        </div>
                        <div className="card bg-dark-mode border-0 shadow-lg rounded-10 mb-4 p-4">
                            <RecentActivities />
                        </div>
                        <div className="card bg-dark-mode border-0 shadow-lg rounded-10 mb-4 p-4">
                            <AvailableForYou />
                        </div>




                    </div>


                </div>








            </div>
        </>
    );
}

export default Dashboard;