import React, { useEffect } from "react";
import "./Booking.module.css";

export default function Room(props) {
  const selectedRoom = (i) => {
    props.selectedRoom(i);
  };
  useEffect(() => {}, []);
  return (
    <div className="">
      <ul className="list-group">
        {props.rooms &&
          props.rooms.map((el, i) => {
            return (
              <li
                className="list-group-item list-group-item-action"
                key={i}
                onClick={() => selectedRoom(el)}
              >
                <a href="#">{el.roomName}</a>
                <span className="d-none">{el.price}</span>
              </li>
            );
          })}
      </ul>

      <div className="row justify-content-between">
        <div className="col-3" />
        <div className="col-3 text-right">
          <button
            className="aligh-right btn-primary btn mt-4"
            onClick={props.roomNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
