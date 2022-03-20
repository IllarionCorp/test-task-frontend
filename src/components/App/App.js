import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";
import moment from "moment";
import AddPopup from "../AddPopup/AddPopup";

moment.updateLocale({ week: { dow: 1 } });

export default function App() {
  const [startDay, setStartDay] = React.useState(moment());
  const startActiveMonthQuery = startDay.clone().format('X');
  const endActiveMonthQuery = startDay.clone().add(42, 'days').format('X');


    const [i, setI] = React.useState(0);

  const enMonths = [...Array(12)].map((_, i) =>
    moment().month(i).format("MMMM")
  );
  const [isAddPopupOpen, seIsAddPopupOpen] = React.useState(false);
  const [meetings, setMeetings] = React.useState([]);

  function switchDate(year, month) {
    setStartDay(moment(`${year}-${month}`));
  }

  function handleAddPopupClick() {
    seIsAddPopupOpen(true);
    console.log(meetings);
  }

  function closeAllPopups() {
    seIsAddPopupOpen(false);
  }

  function hendleAddMeeting(meeting) {
    setMeetings([meeting, ...meetings]);
  }

 function handleDeleteMeeting(idList) {
     idList.forEach(currentId => {
        setMeetings(meetings.filter(meeting => meeting.id !== currentId))
     });
 }

  return (
    <>
      <AddPopup
        isOpened={isAddPopupOpen}
        isClose={closeAllPopups}
        onAddMeeting={hendleAddMeeting}
        i={i}
        setI={setI}
      />
      <Header />
      <Main
        startDay={startDay}
        months={enMonths}
        switchDate={switchDate}
        handleAddPopupClick={handleAddPopupClick}
        meetings={meetings}
        setMeetings={setMeetings}
        handleDeleteMeeting={handleDeleteMeeting}
      />
    </>
  );
}
