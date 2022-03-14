import Meeting from '../Meeting/Meeting';
import './Toolbar.css';

export default function Toolbar() {
    return (
        <div className='toolbar'>
            <div className='buttons'>
                <button className='buttons__button' type='button'>Добавить</button>
                <button className='buttons__button' type='button'>Удалить</button>    
            </div>
            <div className='list-meetings'>
                <h2 className='list-meetings'>Список встреч</h2>
                <Meeting />  
            </div>
        </div>
    );
}