import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import './App.css';
import weekDays from '../../utils/week-days';
import ruMonths from "../../utils/months";
import moment from "moment";
import { Route, Routes } from "react-router-dom";

moment.locale('ru');
const momentLocal = moment.updateLocale('ru', {week: {dow: 1}});
console.log(moment())

export default function App() {
    const enMonths = momentLocal.monthsShort();
    const months = {en: enMonths, ru: ruMonths};

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={
                    <Main weekDays={weekDays} months={months} month={momentLocal.months()}/>
                } />
            </Routes>
        </>
    );
}