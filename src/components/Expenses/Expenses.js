import React, { useState } from 'react';

import Card from "../UI/Card";
import ExpenseFilter  from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filteredData = props.items.filter(element => {
        return element.date.getFullYear().toString() === filteredYear;
    });

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };


    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpenseChart expenses={filteredData}/>
                <ExpenseList items={filteredData}/>
            </Card>
        </div>
    );
}


export default Expenses;