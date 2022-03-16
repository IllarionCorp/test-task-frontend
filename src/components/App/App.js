import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import './App.css';
import weekDays from '../../utils/week-days';
import ruMonths from "../../utils/months";
import moment from "moment";

moment.updateLocale({week: {dow: 1}});
console.log(moment())
export default function App() {
    const months = ruMonths;
    const [startDay, setStartDay] = React.useState(moment());
    const enMonths = [...Array(12)].map((_, i) => moment().month(i).format('MMMM'));

    function switchDate(year, month) {
        setStartDay(moment(`${year}-${month}`));
    }

    console.log(moment())
    
    return (
        <>
            <Header />
            <Main startDay={startDay} months={enMonths} switchDate={switchDate} />
        </>
    );
}