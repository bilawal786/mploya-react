import React from 'react';
import { Bar } from 'react-chartjs-2';
const ExpenseChart = () => {

    return (
        <>
            <div className="top-response d-flex flex-row justify-content-between align-items-center">
                <h6>Expense Stats</h6>
                <div className="chart-wrapper">
                    <ul className="nav nav-pills mb-3 rounded-pill" id="pills-tab" role="tablist">
                        <li className="nav-item " role="presentation">
                            <button className="nav-link active rounded-pill py-1" id="pills-daily-expense-tab" data-bs-toggle="pill" data-bs-target="#pills-daily-expense" type="button" role="tab" aria-controls="pills-daily-expense" aria-selected="true">Daily</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link rounded-pill py-1" id="pills-weekly-expense-tab" data-bs-toggle="pill" data-bs-target="#pills-weekly-expense" type="button" role="tab" aria-controls="pills-weekly-expense" aria-selected="false">Weekly</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link rounded-pill py-1" id="pills-monthly-expense-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly-expense" type="button" role="tab" aria-controls="pills-monthly-expense" aria-selected="false">Monthly</button>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="tab-content" id="pills-tabContent">
                <div style={{ height: "380px" }} className="tab-pane fade show active" id="pills-daily-expense" role="tabpanel" aria-labelledby="pills-daily-expense-tab">
                    <Bar
                        data={{
                            labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'],
                            datasets: [
                                {
                                    label: "Delivered",
                                    data: [10, 20, 30, 40, 50, 60, 4, 6, 23, 56, 38, 2, 41, 29, 7],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)',
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)',
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
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)',
                                        'rgba(153, 102, 255, 1)',
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
                <div style={{ height: "380px" }} className="tab-pane fade" id="pills-weekly-expense" role="tabpanel" aria-labelledby="pills-weekly-expense-tab">
                    <Bar
                        data={{
                            labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                            datasets: [
                                {
                                    label: "Delivered",

                                    data: [10, 20, 30, 40, 50, 60, 70, 4, 3, 5, 76],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)',
                                        'rgba(255, 99, 132, 0.2)',


                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)',
                                        'rgba(255, 99, 132, 1)',

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
                <div style={{ height: "380px" }} className="tab-pane fade" id="pills-monthly-expense" role="tabpanel" aria-labelledby="pills-monthly-expense-tab">
                    <Bar
                        data={{
                            labels: ['01', '02', '03', '04', '05', '06', '07'],
                            datasets: [
                                {
                                    label: "Delivered",
                                    data: [10, 20, 30, 40, 50, 60, 70],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)'
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
export default ExpenseChart;