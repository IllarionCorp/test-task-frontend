import React from "react";
import moment from "moment";
import "./CalendarCell.css";
import EventInCalendar from "./EventInCalendar/EventInCalendar";

export default function CalendarCell(props) {
  const [isWeekend, setIsWeekend] = React.useState(false);
  console.log(moment().isSame(props.data))
  function dragEndHandler(e) {
    e.target.style.background = "greenyellow";
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = "grey";
  }

  function weekendCheker() {
    if (props.data.day() === 6 || props.data.day() === 0) {
      setIsWeekend(true);
    }
  }

  React.useEffect(() => {
    weekendCheker();
  }, []);

  return (
    <div
      className={`calendar-cell${
        !props.isSelectedMonth() ? " calendar-cell_blue" : ""
      }${
        moment().isSame(props.data, 'day') ? ' calendar-cell_current' : ''
      }`}
      onDrop={(e) => {
        props.dropMeetingsHandler(e, props.data);
      }}
      onDragOver={(e) => props.dragOverHandler(e)}
    >
      <h3
        className={`calendar-cell__title${
          isWeekend ? " calendar-cell__title_blue" : ""
        }`}
      >
        {props.data.format("D")}
      </h3>
      <div className="events">
        {console.log(props.meetings)}
        {props.meetings.map((event, id) => {
          if (
            event.time >= props.data.format("X") &&
            event.time <= props.data.clone().endOf("day").format("X")
          ) {
            return (
              <EventInCalendar
                key={id}
                event={event}
                dragEndHandler={dragEndHandler}
                dragOverHandler={dragOverHandler}
                dragStartHandler={props.dragStartHandler}
                dropHandler={props.dropHandler}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
