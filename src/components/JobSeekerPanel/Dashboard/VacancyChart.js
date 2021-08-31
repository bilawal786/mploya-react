import React from 'react';

const VacancyChart = () => {

    return (
        <>
            <div className="top-response d-flex flex-row justify-content-between align-items-center">
                <h6 className="text-white">Vacancy Stats</h6> 
                <div className="chart-wrapper">
                    <ul className="nav nav-pills p-0 mb-3 rounded-pill" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active rounded-pill py-1" id="pills-daily-vacancy-tab" data-bs-toggle="pill" data-bs-target="#pills-daily-vacancy" type="button" role="tab" aria-controls="pills-daily-vacancy" aria-selected="true">Daily</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link rounded-pill py-1" id="pills-weekly-vacancy-tab" data-bs-toggle="pill" data-bs-target="#pills-weekly-vacancy" type="button" role="tab" aria-controls="pills-weekly-expense" aria-selected="false">Weekly</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link rounded-pill py-1" id="pills-monthly-vacancy-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly-vacancy" type="button" role="tab" aria-controls="pills-monthly-vacancy" aria-selected="false">Monthly</button>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="tab-content text-white" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-daily-vacancy" role="tabpanel" aria-labelledby="pills-daily-vacancy-tab">
                    daily vacancy chart...
                </div>
                <div className="tab-pane fade" id="pills-weekly-vacancy" role="tabpanel" aria-labelledby="pills-weekly-vacancy-tab">
                    weekly vacancy chart..
                </div>
                <div className="tab-pane fade" id="pills-monthly-vacancy" role="tabpanel" aria-labelledby="pills-monthly-vacancy-tab">
                    monthly vacancy chart...
                </div>
            </div>
        </>
    );
}
export default VacancyChart;