import React from 'react';
import { Line } from 'react-chartjs-2';
const VacancyChart = () => {

    return (
        <>
            <div className="top-response d-flex flex-row justify-content-between align-items-center">
                <h6>Vacancy Stats</h6>
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


            <div className="tab-content" id="pills-tabContent">
                <div style={{ height: "380px" }} className="tab-pane fade show active" id="pills-daily-vacancy" role="tabpanel" aria-labelledby="pills-daily-vacancy-tab">

                    <Line
                        data={{
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov ', 'Dec'],
                            datasets: [
                                {
                                    label: "Application Sent",
                                    data: [10, 20, 30, 40, 50, 60, 70, 4, 3, 5, 76, 40],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)',
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',

                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)',
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(153, 102, 255, 0.2)',
                                    ],
                                    borderWidth: 1
                                },
                            ],

                        }}

                        height={20}
                        width={50}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,

                        }}

                    />
                </div>
                <div style={{ height: "380px" }} className="tab-pane fade" id="pills-weekly-vacancy" role="tabpanel" aria-labelledby="pills-weekly-vacancy-tab">
                    <Line
                        data={{
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov ', 'Dec'],
                            datasets: [
                                {
                                    label: "Application Sent",

                                    data: [10, 20, 30, 40, 60, 55, 40, 4, 3, 5, 56, 20],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)',
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',

                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)',
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(153, 102, 255, 0.2)',
                                    ],
                                    borderWidth: 1
                                },
                            ],

                        }}

                        height={20}
                        width={50}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,

                        }}

                    />
                </div>
                <div style={{ height: "380px" }} className="tab-pane fade" id="pills-monthly-vacancy" role="tabpanel" aria-labelledby="pills-monthly-vacancy-tab">
                    <Line
                        data={{
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov ', 'Dec'],
                            datasets: [
                                {
                                    label: "Application Sent",

                                    data: [10, 20, 30, 40, 53, 330, 70, 4, 3, 5, 76, 40],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)',
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',

                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)',
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(153, 102, 255, 0.2)',
                                    ],
                                    borderWidth: 1
                                },
                            ],

                        }}

                        height={20}
                        width={50}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,

                        }}

                    />
                </div>
            </div>
        </>
    );
}
export default VacancyChart;