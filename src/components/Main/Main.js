import Calendar from '../Calendar/Calendar.js';
import Toolbar from '../Toolbar/Toolbar.js';
import './Main.css';

export default function Main(props) {
    // const year = document.querySelector('.calendar__year-active').textContent;
    // const month = document.querySelector('.calendar__month-active');
    return (
        <main className='main'>
            <Calendar startDay={props.startDay} months={props.months} switchDate={props.switchDate}   />
            <Toolbar handleAddPopupClick={props.handleAddPopupClick} meetings={props.meetings} />
        </main>
    );
}