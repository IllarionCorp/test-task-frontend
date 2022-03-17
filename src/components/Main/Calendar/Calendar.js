import React from 'react';
import CalendarTable from './CalendarTable/CalendarTable';
import './Calendar.css';


export default function Calendar(props) {
    const startDay = props.startDay.clone();
    const enMonths = props.months;
    const [yearArr, setYearArr] = React.useState([]);
    
    function visibleCheker(e) {
        const month = document.querySelector('#months');
        const year =  document.querySelector('#years');
        console.log(e.target.className)
        if (e.target === document.querySelector('.calendar__month-active')) {
            month.classList.add('date-menu_visible');
        }

        if (e.target === document.querySelector('.calendar__year-active')) {
            yearFill()
            year.classList.add('date-menu_visible');
        }
    }

    function setUnvisible() {
        const month = document.querySelector('#months');
        const year =  document.querySelector('#years');

        month.classList.remove('date-menu_visible');
        year.classList.remove('date-menu_visible');
    }



   function handleSwitchDate(e) {
        
       console.log(e.target.textContent)
       if (e.target.id === 'month') {
           props.switchDate(document.querySelector('.calendar__year-active').textContent.substring(0, 4), e.target.textContent)
       }

       if (e.target.id === 'year') {
            props.switchDate(e.target.textContent, document.querySelector('.calendar__month-active').textContent);
    }
    setUnvisible()
   }

   function yearFill() {
    const startYear = startDay.clone().subtract(6, 'year');
    const arr = [];

    for (let i = 0; i < 12; i++ ) {
         arr[i] = startYear.add(1, 'year').format('YYYY');
    }
    setYearArr(arr);
}



    return (
        <section className='calendar'>
            <nav className='calendar__nav'>
                <h2 className="calendar__month-active" onMouseEnter={visibleCheker} onMouseLeave={setUnvisible}>
                    {startDay.format('MMMM')}
                    <ul id='months' className={`date-menu`} >
                        {
                                enMonths.map((month, id) => {
                                    return (
                                        <div key={id}>
                                            <a id="month" href='#' className='date-menu__list' onClick={handleSwitchDate}>{month}</a>
                                        </div> 
                                    ); 
                                })   
                        }      
                    </ul> 
                </h2>
                <h2 className='calendar__year-active' onMouseEnter={visibleCheker} onMouseLeave={setUnvisible}>
                    {startDay.format('YYYY') + ''}
                    <ul id='years' className={`date-menu`} >
                        {
                                yearArr.map((year, id) => {
                                    return (
                                        <div key={id}>
                                            <a id="year" href='#' className='date-menu__list' onClick={handleSwitchDate} >{year}</a>
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