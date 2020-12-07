import React from "react";
// import Calendar from "react-calendar";
import Calendar from "react-calendar/dist/entry.nostyle";
import "./Booking.module.css";
import "react-calendar/dist/Calendar.css";

export default function DateTime(props) {
  const selectedTime = (i) => {
    props.selectedTime(i);
  };
  const tileDisabled = ({ activeStartDate, date, view }) => {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    return date < d;
  };

  return (
    <>
      <div className="pb-3">
        <Calendar
          onChange={props.onChange}
          value={props.date}
          tileDisabled={tileDisabled}
        />
      </div>

      {props.dateSelectedLi ? (
        <div className="time-list">
          <select
            name="startTime"
            id="startTime"
            onChange={() => selectedTime(1)}
          >
            {props.timings.map((el, i) => {
              /*
                <li key={i} onClick={() => selectedTime(el)}>
                  <a href="#"> {el.time}</a>
                </li>                */
              if (el.time) {
                return (
                  <option key={i} value={i}>
                    {i % 12 ? i % 12 : 12}:00 {i >= 12 ? "PM" : "AM"}{" "}
                  </option>
                );
              }
              // else {
              //   return (
              //     <option key={i} value={i} disabled>{ i % 12 ? i % 12 : 12 }:00 {i >= 12 ? 'PM' : 'AM' } </option>
              //   );
              // }
            })}
          </select>
        </div>
      ) : null}

      <div className="row justify-content-between">
        <div className="col-3">
          <button
            className="aligh-right btn-primary btn mt-4"
            onClick={props.engineerPrev}
          >
            Prev
          </button>
        </div>
        <div className="col-3 text-right">
          <button
            className="aligh-right btn-primary btn mt-4"
            // disabled={!props.yTime}
            onClick={props.dtNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
