import React from "react";
import "./Booking.module.css";

export default function Service(props) {
  const selectedService = (k) => {
    props.selectedService(k);
  };
  return (
    <div className="">
      <ul className="list-group">
        {props.service.map((el, i) => {
          return (
            <li
              className="list-group-item list-group-item-action"
              key={i}
              onClick={() => selectedService(el)}
            >
              <a href="#">{el.serviceName}</a>
              <span className="d-none">{el.price}</span>
            </li>
          );
        })}
      </ul>

      <div className="row justify-content-between">
        <div className="col-3">
          <button
            className="aligh-right btn-primary btn mt-4"
            onClick={props.roomPrev}
          >
            Prev
          </button>
        </div>
        <div className="col-3 text-right">
          <button
            className="aligh-right btn-primary btn mt-4"
            onClick={props.serviceNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
