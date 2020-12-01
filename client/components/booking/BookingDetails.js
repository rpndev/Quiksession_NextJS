import React from "react";
import "./Booking.module.css";

export default function BookingDetails(props) {
  return (
    <div>
      <div className="card">
        <div className="text-center user-data">
          <img
            className="card-img-top rounded-circle w200"
            src="https://mcmprodaaas.s3.amazonaws.com/s3fs-public/styles/adaptive/public/profile-placeholder.png?itok=FCDqaoiV"
            alt="User"
          />
          <span>{props.userName}</span>
        </div>
        {props.yRoom.length === 0 && (
          <div id="no-defects">No Services selected</div>
        )}
        {props.yRoom.length > 0 && (
          <div>
            <div className="card-body">
              <h4 className="card-title">{props.yDate}</h4>
              <span>at {props.yTime}</span>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>{props.yRoom[0].roomName}</b> <br />
                {props.yService[0].serviceName}
              </li>
              <li className="list-group-item">Total price {props.sumTotal}$</li>
            </ul>
          </div>
        )}
        <div className="card-body">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={props.backToRooms}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block"
            onClick={props.thankYouScreen}
          >
            Confirm Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
