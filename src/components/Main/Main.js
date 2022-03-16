import { Route, Router, Routes } from 'react-router-dom';
import Calendar from '../Calendar/Calendar.js';
import Toolbar from '../Toolbar/Toolbar.js';
import './Main.css';

export default function Main(props) {
    const enMonth = props.months.en;

    return (
        <main className='main'>
           
            <Routes>
                {
                    enMonth.map((month, id) => {
                        return (
                            <Route key={id} path={`/${month}`}  element={
                                <Calendar startDay={props.startDay} months={props.months} monthId={id} />
                            } />
                        );
                    })
                }
            </Routes>
                
            <Toolbar />
        </main>
    );
}