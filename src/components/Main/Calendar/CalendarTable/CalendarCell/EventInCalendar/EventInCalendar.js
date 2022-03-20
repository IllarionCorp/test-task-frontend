import React from "react";
import "./EventInCalendar.css";

export default function EventInCalendar(props) {
  const [isClick, setIsClick] = React.useState(false);

  function handleMeetingClick() {
    if (!isClick) {
      setIsClick(true);
      props.getCurrentId(props.meeting.id);
    } else {
      setIsClick(false);
    }
  }

  return (
    <div
      className={`event${isClick ? " event_active" : ""}`}
      onMouseUp={handleMeetingClick}
      draggable
      onDragStart={(e) => props.dragStartHandler(e, props.event)}
      onDragLeave={(e) => props.dragEndHandler(e)}
      onDragEnd={(e) => props.dragEndHandler(e)}
      onDragOver={(e) => props.dragOverHandler(e)}
      onDrop={(e) => props.dropHandler(e, props.event)}
    >
      <h4 className="event__title">{props.event.name}</h4>
      <p className="event__time">{props.event.time}</p>
    </div>
  );
}
