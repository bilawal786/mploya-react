import React from "react";
import VacancyChart from "./VacancyChart";
import './Dashboard.css';
import ExpenseChart from "./ExpenseChart";
import DashboardProfile from "./DashboardProfile";
import DashboardNearby from "./DashboardNearby";
import RecomendForYou from "./RecomendForYou";
import RecentActivities from "./RecentActivities";
const Dashboard = () => {

    return (
        <>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="card border-0 shadow-lg rounded-10 mb-4 p-4">
                        <h4>Graph</h4>

                    </div>
                    <div className="card border-0 shadow-lg rounded-10 mb-4 p-4">
                        <VacancyChart />
                    </div>
                    <div className="card border-0 shadow-lg rounded-10 mb-4 p-4">
                        <ExpenseChart />
                    </div>
                    <div className="card border-0 shadow-lg rounded-10 mb-4 p-4">
                        <DashboardNearby />

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
                        <RecomendForYou />
                    </div>




                </div>


            </div>









        </>
    );
}

export default Dashboard;