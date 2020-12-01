import React from "react";
import "./Booking.module.css";

export default function Equip(props) {
  const selectedEquip = (j) => {
    props.selectedEquip(j);
  };
  return (
    <div className="">
      <ul className="list-group">
        {props.equip.map((el, i) => {
          return (
            <li
              className="list-group-item list-group-item-action"
              key={i}
              onClick={() => selectedEquip(el)}
            >
              <a href="#">{el.equipName}</a>
              <span className="d-none">{el.price}</span>
            </li>
          );
        })}
      </ul>

      <div className="row justify-content-between">
        <div className="col-3">
          <button
            className="aligh-right btn-primary btn mt-4"
            onClick={props.servicePrev}
          >
            Prev
          </button>
        </div>
        <div className="col-3 text-right">
          <button
            className="aligh-right btn-primary btn mt-4"
            onClick={props.equipNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
