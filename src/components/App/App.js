import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";
import moment from "moment";
import AddPopup from "../AddPopup/AddPopup";
import TimePopup from "../TimePopup/TimePopup";

moment.updateLocale({ week: { dow: 1 } });

export default function App() {
  const [startDay, setStartDay] = React.useState(moment());

  const [i, setI] = React.useState(0);

  const enMonths = [...Array(12)].map((_, i) =>
    moment().month(i).format("MMMM")
  );
  const [isAddPopupOpen, seIsAddPopupOpen] = React.useState(false);
  const [isTimePopupOpen, setIsTimePopupOpen] = React.useState(false);
  const [unitForTimePopup, setUnitForTimePopup] = React.useState("");
  const [meetings, setMeetings] = React.useState([]);

  function switchDate(year, month) {
    setStartDay(moment(`${year}-${month}`));
  }

  function handleAddPopupClick() {
    seIsAddPopupOpen(true);
    console.log(meetings);
  }

  function handleTimePopupOpen() {
    setIsTimePopupOpen(true);
  }

  function closeAllPopups() {
    seIsAddPopupOpen(false);
    setIsTimePopupOpen(false);
  }

  function hendleAddMeeting(meeting) {
    setMeetings([meeting, ...meetings]);
  }

  function handleDeleteMeeting(idList) {
    idList.forEach((currentId) => {
      setMeetings(meetings.filter((meeting) => meeting.id !== currentId));
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
      <TimePopup
        isOpened={isTimePopupOpen}
        isClose={closeAllPopups}
        startDay={startDay}
        event={unitForTimePopup}
        meetings={meetings}
        setMeetings={setMeetings}
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
        handleTimePopupOpen={handleTimePopupOpen}
        setUnitForTimePopup={setUnitForTimePopup}
      />
    </>
  );
}
