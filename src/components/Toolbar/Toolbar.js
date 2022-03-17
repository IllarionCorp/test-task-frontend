import Meeting from '../Meeting/Meeting';
import './Toolbar.css';

export default function Toolbar(props) {
    console.log(props.meetings)
    return (
        <section className='toolbar'>
            <div className='buttons'>
                <button className='buttons__button' type='button' onClick={props.handleAddPopupClick}>Добавить</button>
                <button className='buttons__button' type='button'>Удалить</button>    
            </div>
            <div className='list-meetings'>
                <h2 className='list-meetings__title'>Список встреч</h2>
                {
                    props.meetings.map((meeting, id) => {
                        return (<Meeting key={id} meeting={meeting} />);
                    })
                }
            </div>
        </section>
    );
}