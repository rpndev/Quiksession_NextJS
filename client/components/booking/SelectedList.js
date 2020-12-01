import React from "react";
import "./Booking.module.css";

export default function SelectedList(props) {
  const deleteItem = (i) => {
    props.deleteItem(i);
  };

  return (
    <div className="selectedlist">
      <ul className="list-group">
        {props.yRoom.length > 0 && <h6>Room:</h6>}
        {props.yRoom.map((el, i) => {
          return (
            <li className="list-group-item list-group-item-action" key={i}>
              {el.roomName}
              <span className="close" onClick={() => deleteItem(el)}>
                &times;
              </span>
            </li>
          );
        })}

        {props.yService.length > 0 && <h6>Service:</h6>}
        {props.yService.map((el, i) => {
          return (
            <li className="list-group-item list-group-item-action" key={i}>
              {el.serviceName}
              <span className="close" onClick={() => deleteItem(el)}>
                &times;
              </span>
            </li>
          );
        })}

        {props.yEquip.length > 0 && <h6>Equipment:</h6>}
        {props.yEquip.map((el, i) => {
          return (
            <li className="list-group-item list-group-item-action" key={i}>
              {el.equipName}
              <span className="close" onClick={() => deleteItem(el)}>
                &times;
              </span>
            </li>
          );
        })}

        {props.yEngineer.length > 0 && <h6>Engineer:</h6>}
        {props.yEngineer.map((el, i) => {
          return (
            <li className="list-group-item list-group-item-action" key={i}>
              {el.engineerName}
              <span className="close" onClick={() => deleteItem(el)}>
                &times;
              </span>
            </li>
          );
        })}
        {/* 
        {props.yDate.length > 0 && <h6>Date & Time:</h6>}
        {props.dateSelectedLi ? (
          <li className="list-group-item list-group-item-action">
            <a href="/#">{props.yDate}</a>
          </li>
        ) : null}

        {props.yTime.length > 0 && (
          <li className="list-group-item list-group-item-action">
            <a href="/#">{props.yTime}</a>
          </li>
        )} */}
      </ul>
    </div>
  );
}
