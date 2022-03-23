import Calendar from "./Calendar/Calendar.js";
import moment from "moment";
import Toolbar from "./Toolbar/Toolbar.js";
import "./Main.css";
import React from "react";

export default function Main(props) {
  const [currentUnit, setCurrentUnit] = React.useState(null);

  function dragStartHandler(e, meeting) {
    setCurrentUnit(meeting);
  }

  function dragEndHandler(e) {
    e.target.style.background = "rgb(134, 236, 134)";
  }

  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.classList.contains("meeting__name")) {
      e.target.style.background = "grey";
    }
    console.log(e.target);
  }

  function dropHandler(e, meeting) {
    e.preventDefault();
    console.log(props.meetings);
    props.setMeetings(
      props.meetings.map((c) => {
        console.log(c);
        if (c.id === meeting.id) {
          e.target.style.background = "rgb(134, 236, 134)";
          return { ...c, id: currentUnit.id };
        }

        if (c.id === currentUnit.id) {
          e.target.style.background = "rgb(134, 236, 134)";
          return { ...c, id: meeting.id };
        }
        // return c;
      })
    );
  }

  function dropMeetingsHandler(e, data) {
    if (e.target.classList.contains("calendar-cell")) {
      props.setMeetings(
        props.meetings.map((c) => {
          if (c.id === currentUnit.id && moment().isSameOrBefore(data, 'day')) {
            props.setUnitForTimePopup(c);
            props.handleTimePopupOpen();
            return { ...c, time: data.format('X') };
          } else if(c.id === currentUnit.id) {
            alert('Вы выбрали прошедший день')
          }
          return c;
        })
      );
    }
    if (e.target.classList.contains("meetings") || e.target.classList.contains('meeting__name')) {
      props.setMeetings(
        props.meetings.map((c) => {
          if (c.id === currentUnit.id) {
            return { ...c, time: NaN, start: null, end: null };
          }
          return c;
        })
      );
    }
  }

  function sortUnits(a, b) {
    if (a.id > b.id) {
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
        meetings={props.meetings}
        dragStartHandler={dragStartHandler}
        dropMeetingsHandler={dropMeetingsHandler}
        dragOverHandler={dragOverHandler}
        dropHandler={dropHandler}
        // handleTimePopupOpen={props.handleTimePopupOpen}
        setUnitForTimePopup={props.setUnitForTimePopup}
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
        onDrop={dropMeetingsHandler}
      />
    </main>
  );
}
