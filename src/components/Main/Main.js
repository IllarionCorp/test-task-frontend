import Calendar from '../Calendar/Calendar.js';
import Toolbar from '../Toolbar/Toolbar.js';
import './Main.css';

export default function Main(props) {
    return (
        <main className='main'>
            <Calendar weekDays={props.weekDays} months={props.months} month={props.month} />
            <Toolbar />
        </main>
    );
}