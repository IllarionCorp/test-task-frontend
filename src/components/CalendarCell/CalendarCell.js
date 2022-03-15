import './CalendarCell.css';

export default function CalendarCell(props) {
    return (
        <div className='calendar-cell'>
            <h3 className='calendar-cell__title'>{props.data}</h3>   
        </div>
    );
}