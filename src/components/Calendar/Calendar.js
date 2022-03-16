import React from 'react';
import { Link } from 'react-router-dom';
import CalendarTable from '../CalendarTable/CalendarTable';
import './Calendar.css';



export default function Calendar(props) {
    const months = props.months;
    const ruMonthsArr = months.ru
    const enMonthsArr = months.en;
    const monthActive = ruMonthsArr.find((el, i) => i === props.monthId)

    function visibleCheker(e) {
        const month = document.querySelector('#month');
        const year =  document.querySelector('#year');
        console.log(e.target.className)
        if (e.target === document.querySelector('.calendar__month-active')) {
            month.classList.add('date-menu_visible');
        }

        if (e.target === document.querySelector('.calendar__year-active')) {
            year.classList.add('date-menu_visible');
        }
    }

    function setUnvisible() {
        const month = document.querySelector('#month');
        const year =  document.querySelector('#year');

        month.classList.remove('date-menu_visible');
        year.classList.remove('date-menu_visible');
    }


    return (
        <section className='calendar'>
            <nav className='calendar__nav'>
                <h2 className="calendar__month-active" onMouseEnter={visibleCheker} onMouseLeave={setUnvisible}>
                    {monthActive}
                    <ul id='month' className={`date-menu`} >
                        {
                                ruMonthsArr.map((month, id) => {
                                    const enMonth = enMonthsArr.find((el, idEn) => idEn === id);
                                    return (
                                        <div key={id}>
                                            <Link to={`/${enMonth}`} className='calendar__month'>{month}</Link>
                                        </div> 
                                    ); 
                                })   
                        }      
                    </ul> 
                </h2>
                <h2 className='calendar__year-active' onMouseEnter={visibleCheker} onMouseLeave={setUnvisible}>
                    2022
                    <ul id='year' className={`date-menu`} >
                        {
                                ruMonthsArr.map((month, id) => {
                                    const enMonth = enMonthsArr.find((el, idEn) => idEn === id);
                                    return (
                                        <div key={id}>
                                            <Link to={`/${enMonth}`} className='calendar__'>{month}</Link>
                                        </div> 
                                    ); 
                                })   
                        }      
                    </ul> 
                </h2>            
            </nav>
            <CalendarTable startDay={props.startDay} />
        </section>
    );
}