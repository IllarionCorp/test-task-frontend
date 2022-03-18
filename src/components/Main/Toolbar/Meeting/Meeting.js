import React from "react";
import "./Meeting.css";

export default function Meeting(props) {
  const [isClick, setIsClick] = React.useState(false);

  function hendleMeetingClick() {
    if (!isClick) {
      setIsClick(true);
    } else {
      setIsClick(false);
    }
  }

//   React.useEffect(() => {
//     props.handleDeleteMeeting(props.id, isClick);
//   }, []);

  console.log(props.id);
  return (
    <div className="meeting" onMouseDown={hendleMeetingClick}>
      <p
        className={`meeting__name${isClick ? " meeting__name_active" : ""}`}
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
        className={`meeting__author${isClick ? " meeting__author_active" : ""}`}
      >
        {props.meeting.fio}
      </p>
    </div>
  );
}
