import './EventInCalendar.css';

export default function EventInCalendar(props) {
    return(
        <div className='event'>
                <h4 className='event__title'>{props.event.name}</h4>
                <p className='event__time'>{props.event.time}</p>
        </div>
    );
}   