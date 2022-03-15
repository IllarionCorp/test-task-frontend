import React from 'react';
import { Link } from 'react-router-dom';
import CalendarTable from '../CalendarTable/CalendarTable';
import './Calendar.css';



export default function Calendar(props) {
    const months = props.months;
    const ruMonthsArr = months.ru
    const enMonthsArr = months.en;
    const [isVisible, setIsVisible] = React.useState(false);
    const monthActive = ruMonthsArr.find((el, i) => i === props.monthId)


    return (
        <section className='calendar'>
            <nav className='calendar__nav'>
                <h2 className="calendar__month-active" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
                    {monthActive}
                    <ul className={`date-menu  ${isVisible ? 'date-menu_visible-month' : ''} date-menu_month`} >
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
                <h2 className='calendar__year-active' onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
                    2022
                    <ul className={`date-menu  ${isVisible ? 'date-menu_visible-year' : ''} date-menu_year`} >
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
            <CalendarTable weekDays={props.weekDays} />
        </section>
    );
}