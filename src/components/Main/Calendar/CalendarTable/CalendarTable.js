import React from "react";
import CalendarCell from "./CalendarCell/CalendarCell";
import "./CalendarTable.css";

export default function CalendarTable(props) {
  const startDay = props.startDay
    .clone()
    .startOf("month")
    .startOf("week")
    .subtract();
  const daysArr = [...Array(42)].map(() => startDay.add(1, "day").clone());
  const isSelectedMonth = (daySelect) =>
    props.startDay.isSame(daySelect, "month");

  const [eventsList, setEventsList] = React.useState([
      {
        name: 'arg',
        fio: 'jkjjh',
        id: 0,
        time: 'kknkn' 
    },
    {
        name: 'arg',
        fio: 'jkjjh',
        id: 1,
        time: 'kknkoojokn' 
    },
  ]);

  return (
    <div className="calendar-table">
      {daysArr.map((day, id) => {
        return (
          <div key={id}>
            <CalendarCell
              data={day.format("D")}
              dayId={day.day()}
              isSelectedMonth={() => isSelectedMonth(day)}
              board={id}
              eventsList={eventsList}
            />
          </div>
        );
      })}
    </div>
  );
}