import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import './App.css';
import weekDays from '../../utils/week-days';
import ruMonths from "../../utils/months";
import moment from "moment";
import { Route, Routes } from "react-router-dom";

const momentLocal = moment.updateLocale('ru', {week: {dow: 1}});

export default function App() {
    const enMonths = momentLocal.monthsShort();
    const months = {en: enMonths, ru: ruMonths};
    const startDay = moment().startOf('month').startOf('week');
    console.log(startDay)
    return (
        <>
            <Header />
            <Main startDay={startDay} months={months} />
        </>
    );
}