import './Meeting.css';

export default function Meeting(props) {
    console.log(props.meeting)
    return (
        <div className='meeting'>
            <p className='meeting__name'>{props.meeting.name}</p>
            <p className='meeting__author'>{props.meeting.fio}</p>  
        </div>
    );
}