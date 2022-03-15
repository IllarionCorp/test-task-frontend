import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import './App.css';
import weekDays from '../../utils/week-days';
import months from "../../utils/months";

export default function App() {
    return (
        <>
            <Header />
            <Main weekDays={weekDays} months={months} />
        </>
    );
}