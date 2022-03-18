import React from 'react';
import './CalendarCell.css';
import EventInCalendar from './EventInCalendar/EventInCalendar';

export default function CalendarCell(props) {
    const [isWeekend, setIsWeekend] = React.useState(false)

    function weekendCheker() {
        if(props.dayId === 6 || props.dayId === 0) {
            setIsWeekend(true)
        }
    }

    React.useEffect(() => {
        weekendCheker()
    }, [])

    return (
        <div className={`calendar-cell${!props.isSelectedMonth() ? ' calendar-cell_blue' : ''}`}>
            <h3 className={`calendar-cell__title${isWeekend ? ' calendar-cell__title_blue' : ''}`}>{props.data}</h3>   
            <div className='events'>
                {
                    props.eventsList.map((event, id) => {
                        return(
                            <EventInCalendar key={id} event={event} eventId={id} />
                        );
                    })
                }
            </div>
        </div>
    );
}