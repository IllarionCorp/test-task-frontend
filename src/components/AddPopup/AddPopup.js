import React from 'react';
import Popup from '../Popup/Popup';
import './AddPopup.css';

export default function AddPopup(props) {
    const [name, setName] = React.useState('');
    const [fio, setFio] = React.useState(0);
    const [i, setI] = React.useState(props.i)

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleFioChange(e) {
        setFio(e.target.value);
    }

   
    function hadleSubmit(e) {
        e.preventDefault();
        
        props.onAddMeeting({
            name: name,
            fio: fio,
            id: null,
            time: null
        });
        props.setI(i + 1)
        props.isClose();
    }

    React.useEffect(() => {
        setName('')
        setFio('')
    }, [props.isOpened])

    return (
        <Popup name='Новая встреча' isOpened={props.isOpened} isClose={props.isClose} onSubmit={hadleSubmit} >
            <div className='inputs'>
                <label className='container-form__label'>Название</label>                  
                <input id='name-input' type='text' className='container-form__input' name='name' required value={name} onChange={handleNameChange} />
            </div>
            <div className='inputs'>
                <label className='container-form__label'>ФИО</label>
                <input id='FIO-input' type='text' className='container-form__input' name='author' required value={fio} onChange={handleFioChange} />
            </div>
            <div className='inputs'>
                <label className='container-form__label'>Описание</label>
                <textarea id='description-input' className='container-form__input' name='description'/>
            </div>   
        </Popup>
    );
}
