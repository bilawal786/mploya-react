import React from "react";
import VacancyChart from "./VacancyChart";
import './Dashboard.css';
import ExpenseChart from "./ExpenseChart";
import DashboardProfile from "./DashboardProfile";
import FeaturedCompany from "./FeaturedCompany"; 
import RecentActivities from "./RecentActivities";
import AvailableForYou from "./AvailableForYou";
const Dashboard = () => {

    return (
        <>
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
                        <FeaturedCompany />

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









        </>
    );
}

export default Dashboard;