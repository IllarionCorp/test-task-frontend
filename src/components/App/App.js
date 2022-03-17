import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";
import moment from "moment";
import AddPopup from "../AddPopup/AddPopup";

moment.updateLocale({ week: { dow: 1 } });

export default function App() {
  const [startDay, setStartDay] = React.useState(moment());
  const enMonths = [...Array(12)].map((_, i) =>
    moment().month(i).format("MMMM")
  );
  const [isAddPopupOpen, seIsAddPopupOpen] = React.useState(false);
  const [meetings, setMeetings] = React.useState([]);
  const [isActive, setIsActive] = React.useState(false);
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

  function handleDeleteMeeting(id) {
    setMeetings(meetings.filter((c) => c.id !== id && c));
  }

  console.log(meetings.map((c, id) => id))

  return (
    <>
      <AddPopup
        isOpened={isAddPopupOpen}
        isClose={closeAllPopups}
        onAddMeeting={hendleAddMeeting}
      />
      <Header />
      <Main
        startDay={startDay}
        months={enMonths}
        switchDate={switchDate}
        handleAddPopupClick={handleAddPopupClick}
        meetings={meetings}
        handleDeleteMeeting={handleDeleteMeeting}
        setMeetings={setMeetings}
      />
    </>
  );
}
