import './Popup.css';

export default function Popup(props) {
    return (
        <div className={`popup${props.isOpened ? ' popup_opened': ''}`}>
            <div className='container'>
               <h2 className='container__header'>{props.name}</h2>
               <form className='container-form' onSubmit={props.onSubmit}>
                        {props.children}
                        <div className='container-buttons'>
                        <button id='submit-btn' type='submit' className='container-buttons__button'>
                            Сохранить
                        </button>
                        <button id='reset-btn' type='reset'  className='container-buttons__button' onClick={() => {
                            props.isClose()
                        }}>
                            Отмена
                        </button>  
                        </div> 
                </form>
            </div>    
        </div>
    );
}