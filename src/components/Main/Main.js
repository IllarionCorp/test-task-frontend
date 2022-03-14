import Calendar from '../Calendar/Calendar.js';
import Toolbar from '../Toolbar/Toolbar.js';
import './Main.css';

export default function Main() {
    return (
        <main className='main'>
            <Calendar />
            <Toolbar />
        </main>
    );
}