import Calendar from "./Calendar/Calendar.js";
import Toolbar from "./Toolbar/Toolbar.js";
import "./Main.css";
import React from "react";

export default function Main(props) {
    const [meetings, setMeetings] = (props.meetings);
    const [currentUnit, setCurrentUnit] = React.useState(null);

  function dragStartHandler(e, meeting) {
    setCurrentUnit(meeting)
  }

  function dragEndHandler(e) {
    e.target.style.background = 'rgb(134, 236, 134)';
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = 'grey';
  }

  function dropHandler(e, meeting) {
    e.preventDefault();
    console.log(props.meetings)
    props.setMeetings(props.meetings.map((c) => {
        console.log(c)
        if (c.id === meeting.id) {
          return {...c, id: currentUnit.id}
        }

        if (c.id === currentUnit.id) {
          return  {...c, id: meeting.id}
        }
    }))
  }
  function sortUnits(a, b) {
      if(a.id > b.id) {
          return 1;
      } else {
          return -1;
      }
  }

  return (
    <main className="main">
      <Calendar
        startDay={props.startDay}
        months={props.months}
        switchDate={props.switchDate}
      />
      <Toolbar
        handleAddPopupClick={props.handleAddPopupClick}
        meetings={props.meetings}
        handleDeleteMeeting={props.handleDeleteMeeting}
        dragStartHandler={dragStartHandler}
        dragEndHandler={dragEndHandler}
        dragOverHandler={dragOverHandler}
        dropHandler={dropHandler}
        sortUnits={sortUnits}
      />
    </main>
  );
}
