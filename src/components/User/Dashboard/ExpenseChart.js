import React from 'react';

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
                <div className="tab-pane fade show active" id="pills-daily-expense" role="tabpanel" aria-labelledby="pills-daily-expense-tab">daily expense chart...</div>
                <div className="tab-pane fade" id="pills-weekly-expense" role="tabpanel" aria-labelledby="pills-weekly-expense-tab">weekly expense chart..</div>
                <div className="tab-pane fade" id="pills-monthly-expense" role="tabpanel" aria-labelledby="pills-monthly-expense-tab">monthly  chart...</div>
            </div>
        </>
    );
}
export default ExpenseChart;