import React from "react";
import Meeting from "./Meeting/Meeting";
import "./Toolbar.css";

export default function Toolbar(props) {
    

  return (
    <section className="toolbar">
      <div className="buttons">
        <button
          className="buttons__button"
          type="button"
          onClick={props.handleAddPopupClick}
        >
          Добавить
        </button>
        <button
          className="buttons__button"
          type="button"
          onClick={props.handleDeleteMeeting}
        >
          Удалить
        </button>
      </div>
      <div className="list-meetings">
        <h2 className="list-meetings__title">Список встреч</h2>
        {props.meetings.sort(props.sortUnits).map((meeting, id) => {
            meeting.id = id;

          return (
            <Meeting
              key={id}
              meeting={meeting}
              handleDeleteMeeting={props.handleDeleteMeeting}
              id={meeting.id}
              dragStartHandler={props.dragStartHandler}
              dragEndHandler={props.dragEndHandler}
              dragOverHandler={props.dragOverHandler}
              dropHandler={props.dropHandler}
              isClick={props.isClick}
              setIsClick={props.setIsClick}
            />
          );
        })}
      </div>
    </section>
  );
}