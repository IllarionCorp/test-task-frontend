import React from 'react';
import CalendarTable from '../CalendarTable/CalendarTable';
import './Calendar.css';



export default function Calendar(props) {
    const date = new Date();
    const monthsArr = props.months;
    const [month, setMonth] = React.useState('');
    const [isVisible, setIsVisible] = React.useState(false);
    
    const monthNow = () => {
        for (let i = 0; i < monthsArr.length; i++) {
           if (i === date.getMonth()) {
                setMonth(monthsArr[i]);
            }
        }
    }
    
    React.useEffect(() => {
        monthNow();
    }, [])

    return (
        <section className='calendar'>
            <nav className='calendar__nav'>
                <h2 className="calendar__month-active" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>{month}
                    <ul className={`months-menu  ${isVisible ? 'months-menu_visible' : ''}`} >
                        {
                                monthsArr.map((month, id) => {
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