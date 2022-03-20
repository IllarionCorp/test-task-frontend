import React from "react";
import "./CalendarCell.css";
import EventInCalendar from "./EventInCalendar/EventInCalendar";

export default function CalendarCell(props) {
  const [isWeekend, setIsWeekend] = React.useState(false);
  const [currentUnit, setCurrentUnit] = React.useState(null);

  function dragStartHandler(e, event) {
    setCurrentUnit(event);
  }

  function dragEndHandler(e) {
    e.target.style.background = "greenyellow";
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = "grey";
  }

  function dropHandler(e) {
    e.preventDefault();
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
      }`}
      onDrop={(e) => props.dropMeetingsHandler(e, props.data.format("X"))}
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
        {props.meetings
          .filter(
            (meeting) =>
              meeting.time >= props.data.format("X") &&
              meeting.time <= props.data.clone().endOf("day").format("X")
          )
          .map((event, id) => {
            return (
              <EventInCalendar
                key={id}
                event={event}
                eventId={id}
                dragStartHandler={dragStartHandler}
                dragEndHandler={dragEndHandler}
                dragOverHandler={dragOverHandler}
                dropHandler={dropHandler}
              />
            );
          })}
      </div>
    </div>
  );
}
