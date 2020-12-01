import React, { useState, useEffect } from "react";
import Room from "./Room";
import SelectedList from "./SelectedList";
import Service from "./Service";
import Equip from "./Equip";
import Engineer from "./Engineer";
import DateTime from "./Date_time";
// import DateTime from "./Date_time";
import BookingDetails from "./BookingDetails";
import ThankYou from "./ThankYou";
import { getBook, createBooked } from "../../services";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./Booking.module.css";
const initialState = {
  userName: "",
  title: "Room",
  data: {},
  selectedData: {
    rooms: [],
    service: [],
    equip: [],
    engineer: [],
    date: "",
    time: "",
    projectId: "",
    taskId: "",
  },
  timings: [],
  durations: [],
  startHour: 1,
  date: new Date(),
  minTime: "",
  maxTime: "",
  startTime: "",
  endTime: "",
  dateSelected: false,
  timeSelected: false,
  roomStage: true,
  BookingDetails: false,
  thankYouScreen: false,

  sumTotal: "",

  //Services levels
  roomStep: true,
  serviceStep: false,
  equipStep: false,
  engineerStep: false,
  datetimeStep: false,
};
function Wrapper(props) {
  const auth = JSON.parse(localStorage.getItem("auth"));
  const [state, setState] = useState(initialState);
  const [roomType, setRoomType] = useState("");
  const [roomTitle, setRoomTitle] = useState("");
  const [engineerTitle, setEngineerTitle] = useState("");
  initialState.selectedData = {
    rooms: [],
    service: [],
    equip: [],
    engineer: [],
    date: "",
    time: "",
  };
  useEffect(() => {
    initialState.userName = auth.user.name;
    initialState.data = props.studioInfoState;
    initialState.serviceStep = false;
    var roomType1 = props.studioInfoState.studio.roomType;
    setRoomType(roomType1);
    var roomTitle1 = "Music Room";
    var engineerTitle1 = "Engineer";
    if (roomType === "photo") {
      roomTitle1 = "Video/Photo Room";
      engineerTitle1 = "Photographer";
    }
    setRoomTitle(roomTitle1);
    setEngineerTitle(engineerTitle1);
    setState((prevState) => ({ ...prevState, initialState }));
  }, []);

  const deleteItem = (index) => {
    const rooms = state.selectedData.rooms;
    if (rooms.indexOf(index) > -1) {
      rooms.splice(rooms.indexOf(index), 1);
      setState((prev) => ({
        ...prev,
        selectedData: {
          rooms: rooms,
          service: state.selectedData.service,
          equip: state.selectedData.equip,
          engineer: state.selectedData.engineer,
          date: state.selectedData.date,
          time: state.selectedData.time,
        },
      }));
    }

    const service = state.selectedData.service;
    if (service.indexOf(index) > -1) {
      service.splice(service.indexOf(index), 1);
      setState((prev) => ({
        ...prev,
        selectedData: {
          rooms: state.selectedData.rooms,
          service: service,
          equip: state.selectedData.equip,
          engineer: state.selectedData.engineer,
          date: state.selectedData.date,
          time: state.selectedData.time,
        },
      }));
    }

    const equip = state.selectedData.equip;
    if (equip.indexOf(index) > -1) {
      equip.splice(equip.indexOf(index), 1);
      setState((prev) => ({
        ...prev,
        selectedData: {
          rooms: state.selectedData.rooms,
          service: state.selectedData.service,
          equip: equip,
          engineer: state.selectedData.engineer,
          date: state.selectedData.date,
          time: state.selectedData.time,
        },
      }));
    }
  };

  //rooms selection
  const selectedRoom = async (i) => {
    var room = state.selectedData.rooms;

    if (room.indexOf(i) === -1 && room.length < 1) {
      room.push(i);
    } else if (room.indexOf(i) > -1) {
      alert(`${i.type} this room is already added`);
    }

    setState((prev) => ({
      ...prev,
      selectedData: {
        rooms: room,
        service: state.selectedData.service,
        equip: state.selectedData.equip,
        engineer: state.selectedData.engineer,
        date: state.selectedData.date,
        time: state.selectedData.time,
      },
    }));

    var books = await getBook({
      TaskId: state.selectedData.rooms[0]._id,
      date: new Date().toLocaleDateString(),
    });
    console.log(books);
    var timings = [];

    // for (var index = 0; index < books.ATimes.length; index++) {
    //   var start = new Date(books.ATimes[index].StartTime)
    //     .toTimeString()
    //     .slice(0, 5);
    //   var end = new Date(books.ATimes[index].EndTime)
    //     .toTimeString()
    //     .slice(0, 5);
    //   if (end == "00:00")
    //     end = "23:59";
    //   timings.push({
    //     projectId: books.ProjectId,
    //     taskId: books.TaskId,
    //     time: formatDate(start) + " - " + formatDate(end),
    //     minTime: new Date(books.ATimes[index].StartTime),
    //     maxTime: new Date(end),
    //   });
    // }
    for (var i = 0; i < books.AArray.length; i++) {
      timings.push({
        projectId: books.ProjectId,
        taskId: books.TaskId,
        time: books.AArray[i],
      });
    }

    setState((prev) => ({
      ...prev,
      dateSelected: true,
      timings: timings,
      selectedData: {
        rooms: room,
        timings: timings,
        dateSelected: true,
        service: state.selectedData.service,
        equip: state.selectedData.equip,
        engineer: state.selectedData.engineer,
        date: state.selectedData.date,
        time: state.selectedData.time,
      },
    }));
  };

  //Service selection
  const selectedService = (i) => {
    var allService = state.selectedData.service;
    if (allService.indexOf(i) === -1) {
      allService.push(i);
    } else if (allService.indexOf(i) > -1) {
      alert(`${i.type} this add on is already added`);
    }
    setState((prev) => ({
      ...prev,
      selectedData: {
        rooms: state.selectedData.rooms,
        service: allService,
        equip: state.selectedData.equip,
        engineer: state.selectedData.engineer,
        date: state.selectedData.date,
        time: state.selectedData.time,
      },
    }));
  };

  //Equipment selection
  const selectedEquip = (i) => {
    var allEquip = state.selectedData.equip;
    if (allEquip.indexOf(i) === -1) {
      allEquip.push(i);
    } else if (allEquip.indexOf(i) > -1) {
      alert(`${i.type} this add on is already added`);
    }
    setState((prev) => ({
      ...prev,
      selectedData: {
        rooms: state.selectedData.rooms,
        service: state.selectedData.service,
        equip: allEquip,
        engineer: state.selectedData.engineer,
        date: state.selectedData.date,
        time: state.selectedData.time,
      },
    }));
  };

  //Engineer selection
  const selectedEngineer = (i) => {
    var allEngineer = state.selectedData.engineer;
    if (allEngineer.indexOf(i) === -1) {
      allEngineer.push(i);
    } else if (allEngineer.indexOf(i) > -1) {
      alert(`${i.type} this add on is already added`);
    }
    setState((prev) => ({
      ...prev,
      selectedData: {
        rooms: state.selectedData.rooms,
        service: state.selectedData.service,
        equip: state.selectedData.equip,
        engineer: allEngineer,
        date: state.selectedData.date,
        time: state.selectedData.time,
      },
    }));
  };
  //Time Range Picker Chnage
  const minChange = async (data) => {
    var event = new Date(state.selectedData.date);
    event.setHours(data.value.getHours());
    event.setMinutes(data.value.getMinutes());
    setState((prev) => ({
      ...prev,
      startTime: event,
    }));
  };

  const maxChange = async (data) => {
    var event = new Date(state.selectedData.date);
    event.setHours(data.value.getHours());
    event.setMinutes(data.value.getMinutes());
    setState((prev) => ({
      ...prev,
      endTime: event,
    }));
  };

  function formatDate(date) {
    var time = date;
    var startTime = new Date();
    var parts = time.match(/(\d+):(\d+)/);
    if (parts) {
      var hours = parseInt(parts[1]),
        minutes = parseInt(parts[2]);
      startTime.setHours(hours, minutes, 0, 0);
    }

    var d = startTime;
    var hh = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var dd = "AM";
    var h = hh;
    if (h >= 12) {
      h = hh - 12;
      dd = "PM";
    }
    if (h == 0) {
      h = 12;
    }
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    /* if you want 2 digit hours:
    h = h<10?"0"+h:h; */

    var pattern = new RegExp("0?" + hh + ":" + m + ":" + s);
    var replacement = h + ":" + m;
    /* if you want to add seconds
    replacement += ":"+s;  */
    replacement += " " + dd;
    return replacement;
  }

  //Date selection
  const DateonChange = async (date) => {
    date = date.toLocaleDateString();
    console.log(date);
    if (state.selectedData.rooms.length === 0) {
      alert("Select Room");
      return;
    }
    var books = await getBook({
      TaskId: state.selectedData.rooms[0]._id,
      date: date,
    });
    var timings = [];
    /*
    for (var index = 0; index < books.ATimes.length; index++) {
      var start = new Date(books.ATimes[index].StartTime)
        .toTimeString()
        .slice(0, 5);
      var end = new Date(books.ATimes[index].EndTime)
        .toTimeString()
        .slice(0, 5);
      if (end == "00:00") {
        end = "23:59";
      }
      timings.push({
        projectId: books.ProjectId,
        taskId: books.TaskId,
        time: formatDate(start) + " - " + formatDate(end),
        minTime: new Date(books.ATimes[index].StartTime),
        maxTime: new Date(end),
      });
      console.log(formatDate(end));
    }*/

    for (var i = 0; i < books.AArray.length; i++) {
      timings.push({
        projectId: books.ProjectId,
        taskId: books.TaskId,
        time: books.AArray[i],
      });
    }

    // (value) => formatDate(value, 'MMMM YYYY');
    setState((prev) => ({
      ...prev,
      dateSelected: true,
      timeSelected: false,
      timings: timings,
      selectedData: {
        rooms: state.selectedData.rooms,
        service: state.selectedData.service,
        equip: state.selectedData.equip,
        engineer: state.selectedData.engineer,
        date: date,
        time: "",
      },
    }));
  };

  const durationChange = () => {
    var selected = document.getElementById("duration").value;
    var event = new Date(state.selectedData.date);
    event.setHours(state.startHour + selected * 1);

    console.log(event);

    setState((prev) => ({
      ...prev,
      endTime: event,
    }));
  };

  //Time selection
  const selectedTime = (i) => {
    var selected = document.getElementById("startTime").value;
    var event = new Date(state.selectedData.date);
    event.setHours(selected * 1);
    var event1 = new Date(state.selectedData.date);
    event1.setHours(selected * 1 + 2);
    var t = state.timings[selected * 1];
    var durations = [];
    for (i = selected * 1; i < 24; i++) {
      console.log(i);
      console.log(state.timings[i]);
      if (state.timings[i].time) {
        durations.push(i);
      } else {
        break;
      }
    }
    console.log(durations.length);
    setState((prev) => ({
      ...prev,
      timeSelected: true,
      durations: durations,
      startTime: event,
      endTime: event1,
      startHour: selected * 1,
      selectedData: {
        rooms: state.selectedData.rooms,
        service: state.selectedData.service,
        equip: state.selectedData.equip,
        engineer: state.selectedData.engineer,
        date: state.selectedData.date,
        time: t.time,
        projectId: t.projectId,
        taskId: t.taskId,
      },
    }));
  };

  const roomNext = (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      title: "Amenify",
      roomStep: false,
      serviceStep: true,
    }));
  };

  const serviceNext = (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      title: "Equipment",
      serviceStep: false,
      equipStep: true,
    }));
  };

  const roomPrev = (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      title: state.roomTitle,
      serviceStep: false,
      roomStep: true,
    }));
  };

  const servicePrev = (e) => {
    e.preventDefault();

    setState((prev) => ({
      ...prev,
      title: "Amenify",
      serviceStep: true,
      equipStep: false,
    }));
  };

  const equipNext = (e) => {
    e.preventDefault();
    // alert('equip next')
    setState((prev) => ({
      ...prev,
      title: state.engineerTitle,
      equipStep: false,
      engineerStep: true,
    }));
  };

  const equipPrev = (e) => {
    e.preventDefault();
    // alert('equip next')
    setState((prev) => ({
      ...prev,
      title: "Equipment",
      equipStep: true,
      engineerStep: false,
    }));
  };

  const engineerNext = (e) => {
    e.preventDefault();
    var cdate = new Date();
    setState((prev) => ({
      ...prev,
      title: "Date & Time",
      engineerStep: false,
      datetimeStep: true,
      selectedData: {
        rooms: state.selectedData.rooms,
        service: state.selectedData.service,
        equip: state.selectedData.equip,
        engineer: state.selectedData.engineer,
        date: cdate.toLocaleDateString(),
        time: state.selectedData.time,
      },
    }));
  };

  const engineerPrev = (e) => {
    e.preventDefault();
    // alert('equip next')
    setState((prev) => ({
      ...prev,
      title: state.engineerTitle,
      engineerStep: true,
      datetimeStep: false,
    }));
  };

  const dtNext = (e) => {
    e.preventDefault();
    const RoomTotal = state.selectedData.rooms.reduce(
      (prev, next) => prev + next.price,
      0
    );
    const ServiceTotal = state.selectedData.service.reduce(
      (prev, next) => prev + next.price,
      0
    );
    const EquipTotal = state.selectedData.equip.reduce(
      (prev, next) => prev + next.price,
      0
    );
    const EngineerTotal = state.selectedData.engineer.reduce(
      (prev, next) => prev + next.price,
      0
    );
    const sumTotal = RoomTotal + ServiceTotal + EquipTotal + EngineerTotal;
    // alert('Card block')
    setState((prev) => ({
      ...prev,
      engineerStep: false,
      roomStage: false,
      BookingDetails: true,
      sumTotal: sumTotal,
    }));
  };

  const backToRooms = () => {
    setState((prev) => ({
      ...prev,
      title: state.roomTitle,
      BookingDetails: false,
      roomStage: true,
      roomStep: true,
      serviceStep: false,
      equipStep: false,
      engineerStep: false,
      datetimeStep: false,
    }));
  };

  const thankYouScreen = () => {
    const auth_Str = localStorage.getItem("auth");
    const temp = JSON.parse(auth_Str);
    if (temp.user.credit < state.sumTotal) {
      document.getElementById("payout").click();
    } else {
      createBooked({
        ArtistId: auth.user._id,
        Subject: "Booked by " + auth.user.name,
        ProjectId: state.selectedData.projectId,
        TaskId: state.selectedData.taskId,
        IsAllDay: false,
        BookStatus: "Booked",
        StartTime: state.startTime,
        EndTime: state.endTime,
        Credits: state.sumTotal,
      });
      setState((prev) => ({
        ...prev,
        thankYouScreen: true,
        BookingDetails: false,
      }));
      temp.user.credit = temp.user.credit * 1.0 - state.sumTotal * 1.0;
      localStorage.setItem("auth", JSON.stringify(temp));
      // document.location.reload();
    }
  };

  return (
    <div className="container">
      {state.roomStage ? (
        <div className="row">
          <div className="col-md-6 left_block pt-3 pb-3 mb-3">
            <h4 className="text-center">Your Room</h4>
            <SelectedList
              yRoom={state.selectedData.rooms}
              yService={state.selectedData.service}
              yEquip={state.selectedData.equip}
              yEngineer={state.selectedData.engineer}
              yDate={state.selectedData.date}
              yTime={state.selectedData.time}
              dateSelectedLi={state.dateSelected}
              deleteItem={deleteItem}
            />
          </div>
          <div className="col-md-6 right_block">
            <h3>
              Select your <span>{state.roomTitle}</span>
            </h3>
            {state.roomStep && state.data.rooms ? (
              <Room
                rooms={state.data.rooms}
                selectedRoom={selectedRoom}
                roomNext={roomNext}
                active={state.roomActive}
              />
            ) : null}
            {state.serviceStep ? (
              <Service
                service={state.data.service}
                selectedService={selectedService}
                roomPrev={roomPrev}
                serviceNext={serviceNext}
              />
            ) : null}
            {state.equipStep ? (
              <Equip
                equip={state.data.equip}
                selectedEquip={selectedEquip}
                servicePrev={servicePrev}
                equipNext={equipNext}
              />
            ) : null}
            {state.engineerStep ? (
              <Engineer
                engineer={state.data.engineer}
                selectedEngineer={selectedEngineer}
                equipPrev={equipPrev}
                engineerNext={engineerNext}
              />
            ) : null}
            <div className="row">
              {state.datetimeStep ? (
                <div className="col-7">
                  <DateTime
                    onChange={DateonChange}
                    date={state.date}
                    dateSelectedLi={state.dateSelected}
                    selectedTime={selectedTime}
                    activeTime={state.activeTime}
                    timings={state.timings}
                    engineerPrev={engineerPrev}
                    dtNext={dtNext}
                    yTime={state.selectedData.time}
                  />
                </div>
              ) : null}
              {
                /* {state.timeSelected ? (
                <div className="col-5">
                  <h3>Select your time range</h3>
                  <div className="control-pane range">
                    <div className="control-section">
                      <div className="timepicker-control-section range">
                        <TimePickerComponent
                          change={minChange}
                          id="mintimepick"
                          min={state.minTime}
                          max={state.maxTime}
                          step={1}
                        ></TimePickerComponent>
                      </div>
                      <div className="timepicker-control-section range">
                        <TimePickerComponent
                          change={maxChange}
                          id="maxtimepick"
                          min={state.minTime}
                          max={state.maxTime}
                          step={1}
                        ></TimePickerComponent>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null} */
                state.timeSelected ? (
                  <div className="col-5">
                    <h3>Select your duration</h3>
                    <div className="control-pane range">
                      <div className="control-section">
                        <select id="duration" onChange={() => durationChange()}>
                          {state.durations.map((el, i) => {
                            return (
                              /*
                            <li key={i} onClick={() => selectedTime(el)}>
                              <a href="#"> {el.time}</a>
                            </li>                */
                              <option key={i} value={i + 2}>
                                {i + 2} hour
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                ) : null
              }
            </div>
          </div>
        </div>
      ) : null}
      {state.BookingDetails ? (
        <div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <BookingDetails
                userName={state.userName}
                yDate={state.selectedData.date}
                yTime={state.selectedData.time}
                yRoom={state.selectedData.rooms}
                yService={state.selectedData.service}
                sumTotal={state.sumTotal}
                backToRooms={backToRooms}
                thankYouScreen={thankYouScreen}
              />
            </div>
          </div>
        </div>
      ) : null}

      {state.thankYouScreen ? (
        <ThankYou
          subject={auth.user.name}
          userName={state.userName}
          startTime={state.startTime}
          endTime={state.endTime}
        />
      ) : null}
    </div>
  );
}

export default Wrapper;
