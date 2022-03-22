import React from "react";
import Popup from "../Popup/Popup";
import "./TimePopup.css";

export default function TimePopup(props) {
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");

  function handleTimeStart(e) {
    setStart(e.target.value);
  }

  function handleDuration(e) {
    setEnd(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    

    

    if (start.valueAsNumber < end.valueAsNumber) {
      props.setMeetings(
        props.meetings.map((c) => {
          if (c.id === props.event.id) {
            return { ...c, start: start, end: end };
          }
          // return c;
        })
      );
      props.isClose();
    } else {
      alert("Укажите корректный промежуток"); 
    }
  }

  React.useEffect(() => {
    console.log(props.event);
    setStart("");
    setEnd("");
  }, [props.isOpened]); 

  return (
    <Popup
      name="Время встречи"
      isOpened={props.isOpened}
      isClose={props.isClose}
      onSubmit={handleSubmit}
    >
      <div className="inputs">
        <label className="container-form__label">Время начал</label>
        <input
          id="time-start-input"
          type="time"
          className="container-form__input"
          name="name"
          required
          value={start}
          onChange={handleTimeStart}
        />
      </div>
      <div className="inputs">
        <label className="container-form__label">Время конца</label>
        <input
          id="duration-input"
          type="time"
          className="container-form__input"
          name="author"
          required
          value={end}
          onChange={handleDuration}
        />
      </div>
    </Popup>
  );
}
