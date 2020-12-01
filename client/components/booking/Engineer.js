import React from "react";
import "./Booking.module.css";

export default function Engineer(props) {
  const selectedEngineer = (j) => {
    props.selectedEngineer(j);
  };
  return (
    <div className="">
      <ul className="list-group">
        {props.engineer.map((el, i) => {
          return (
            <li
              className="list-group-item list-group-item-action"
              key={i}
              onClick={() => selectedEngineer(el)}
            >
              <a href="#">{el.engineerName}</a>
              <span className="d-none">{el.price}</span>
            </li>
          );
        })}
      </ul>

      <div className="row justify-content-between">
        <div className="col-3">
          <button
            className="aligh-right btn-primary btn mt-4"
            onClick={props.equipPrev}
          >
            Prev
          </button>
        </div>
        <div className="col-3 text-right">
          <button
            className="aligh-right btn-primary btn mt-4"
            onClick={props.engineerNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
