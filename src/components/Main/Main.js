import Calendar from "./Calendar/Calendar.js";
import Toolbar from "./Toolbar/Toolbar.js";
import "./Main.css";
import React from "react";

export default function Main(props) {
    const meetings = props.meetings
    const [currentUnit, setCurrentUnit] = React.useState('');

  function dragStartHandler(e, id) {
    setCurrentUnit(id)
  }

  function dragEndHandler(e) {
    e.target.style.background = 'rgb(134, 236, 134)';
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = 'grey';
  }

  function dropHandler(e, id) {
    e.preventDefault();
    console.log(props.meetings)
    meetings.map(c => {
        console.log(c);
        if (c.id === id) {
            // props.setMeetings([...c, currentUnit])
            
        }

        if (c.id === currentUnit) {
            // props.setMeetings([...c, id])
            console.log(c.id)
        }
    })
  }
  function sortUnits(a, b) {
      if(a > b) {
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
