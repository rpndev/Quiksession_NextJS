import React from "react";
import AddToCalendar from "react-add-to-calendar";
import "./Booking.module.css";

export default function ThankYou(props) {
  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5>
              Thank you for making an appointment with <b>{props.userName}</b>{" "}
              at <b>Amazing Lash</b>.
            </h5>
            <h5>Can't wait to see you!</h5>
            <br />
            <AddToCalendar
              event={{
                title: `Booked By ${props.subject}`,
                description:
                  "This is the sample event provided as an example only",
                startTime: props.startTime,
                endTime: props.endTime,
              }}
              // buttonTemplate={{ "calendar-plus-o": "left" }}
            />
            <br />
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block"
              onClick={() => {
                document.location.href = "/";
              }}
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
