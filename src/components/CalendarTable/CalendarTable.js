import CalendarCell from '../CalendarCell/CalendarCell';
import './CalendarTable.css';

export default function CalendarTable(props) {
    const startDay = props.startDay.clone().subtract();
    const daysArr = [...Array(42)].map(() => startDay.add(1, 'day').clone());
    console.log(daysArr); 
    return (
        <div className='calendar-table'>
            {daysArr.map((day, id) => {
                return (
                    <div key={id}>
                        <CalendarCell data={day.format('D')} />
                    </div>
                );        
            })}
        </div>    
    );
}