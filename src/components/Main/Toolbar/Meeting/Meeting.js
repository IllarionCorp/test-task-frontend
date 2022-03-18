import React from "react";
import "./Meeting.css";

export default function Meeting(props) {


  function hendleMeetingClick() {
    if (!props.isClick) {
      props.setIsClick(true);
    } else {
      props.setIsClick(false);
    }
  }

//   React.useEffect(() => {
//     props.handleDeleteMeeting(props.id, isClick);
//   }, []);

  console.log(props.id);
  return (
    <div className="meeting" onClick={hendleMeetingClick}>
      <p
        className={`meeting__name${props.isClick ? " meeting__name_active" : ""}`}
        draggable={true}
        onDragStart={(e) => props.dragStartHandler(e, props.meeting)}
        onDragLeave={(e) => props.dragEndHandler(e)}
        onDragEnd={(e) => props.dragEndHandler(e)}
        onDragOver={(e) => props.dragOverHandler(e)}
        onDrop={(e) => props.dropHandler(e, props.meeting)}
      >
        {props.meeting.name}
      </p>
      <p
        className={`meeting__author${props.isClick ? " meeting__author_active" : ""}`}
      >
        {props.meeting.fio}
      </p>
    </div>
  );
}
