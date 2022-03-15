import CalendarCell from '../CalendarCell/CalendarCell';
import './CalendarTable.css';

export default function CalendarTable(props) {
    return (
        <div className='calendar-table'>
            {props.weekDays.map((day, id) => {
                return (
                    <div key={id}>
                        <CalendarCell data={day} />
                    </div>
                );        
            })}
        </div>    
    );
}