import CalendarTable from '../CalendarTable/CalendarTable';
import './Calendar.css';

export default function Calendar() {
    return (
        <section className='calendare'>
            <h2 className='calendare__date'>Декабрь 2021</h2>
            <CalendarTable />
        </section>
    );
}