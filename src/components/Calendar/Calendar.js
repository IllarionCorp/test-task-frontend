import React from 'react';
import CalendarTable from '../CalendarTable/CalendarTable';
import './Calendar.css';



export default function Calendar(props) {
    const months = props.months;
    const ruMonthsArr = months.ru
    const [isVisible, setIsVisible] = React.useState(false);

    return (
        <section className='calendar'>
            <nav className='calendar__nav'>
                <h2 className="calendar__month-active" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
                    {props.month}
                    <ul className={`months-menu  ${isVisible ? 'months-menu_visible' : ''}`} >
                        {
                                ruMonthsArr.map((month, id) => {
                                    return (
                                        <div key={id}>
                                            <a href='#' className='calendar__month'>{month}</a>
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