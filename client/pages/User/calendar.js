import "./calendar.css";
import React, { useEffect, useState } from "react";
import { STUDIOS_URL, BOOK_URL } from "../../constants/urls";

import {
  createBook,
  deleteBook,
  updateBook,
  // getBook,
} from "../../services";
import {
  TimelineViews,
  TimelineMonth,
  Agenda,
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  ResourcesDirective,
  ResourceDirective,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

import { extend } from "@syncfusion/ej2-base";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import SideLayout from "../../components/SideLayout";
import ChargeForm from "../../components/ChargeForm";
/**
 * schedule timeline resource grouping sample
 */
export default function TimelineGrouping(props) {
  const [isOpen, setOpen] = useState(false);
  const [auth, setAuth] = useState(null);
  let chargeId = null;
  let isChangable = true;
  const [studios, setStudios] = useState([]);
  const [bookData, setBookData] = useState([]);
  const fields = { text: "text", value: "id" };
  const projectData = [];
  const categoryData = [];
  // const abortController = new AbortController();
  const authHeaderConfig = (auth) => {
    const { accessToken } = auth.token;
    const requestConfig = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      // signal: abortController.signal,
    };
    return requestConfig;
  };
  const onPopupOpen = (args) => {
    if (args.type == "QuickInfo") args.cancel = true;
    isChangable = args.data.isChangable === true ? true : false;
  };
  const onChange = (e) => {
    if (e && e.itemData) {
      var sbtn = document.getElementsByClassName("e-event-save")[0];
      console.log(sbtn);
      console.log(chargeId);
      if (e.itemData.text === "Charge") {
        if (chargeId == null) sbtn.disabled = true;
        else sbtn.disabled = false;
        document.getElementById("charge").style.display = "contents";
      } else {
        document.getElementById("charge").style.display = "none";
        sbtn.disabled = false;
      }
    }
  };
  const onPay = (param) => {
    chargeId = param;
    var sbtn = document.getElementsByClassName("e-event-save")[0];
    document.getElementById("chargeId").value = chargeId;
    if (param) sbtn.disabled = false;
    console.log(param);
  };

  // function checkProject(value) {
  //   console.log(JSON.stringify(value));
  //   return value;
  // }

  const editorTemplate = (props) => {
    return props !== undefined ? (
      <table
        className="custom-event-editor"
        style={{ width: "100%", cellpadding: "5" }}
      >
        <tbody>
          <tr>
            <td className="e-textlabel">Subject</td>
            <td style={{ colspan: "4" }}>
              <input
                id="Summary"
                className="e-field e-input"
                type="text"
                name="Subject"
                value="Not Available"
              />
              <input
                className="e-field e-input"
                type="text"
                style={{ display: "none" }}
                id="chargeId"
                name="chargeId"
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">From</td>
            <td style={{ colspan: "4" }}>
              <DateTimePickerComponent
                id="StartTime"
                format="dd/MM/yy hh:mm a"
                data-name="StartTime"
                step={60}
                value={new Date(props.startTime || props.StartTime)}
                className="e-field"
              ></DateTimePickerComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">To</td>
            <td style={{ colspan: "4" }}>
              <DateTimePickerComponent
                id="EndTime"
                format="dd/MM/yy hh:mm a"
                data-name="EndTime"
                step={60}
                value={new Date(props.endTime || props.EndTime)}
                className="e-field"
              ></DateTimePickerComponent>
            </td>
          </tr>
          <tr style={{ display: "none" }}>
            <td className="e-textlabel">ProjectId</td>
            <td style={{ colspan: "4" }}>
              <DropDownListComponent
                placeholder="Choose Project"
                data-name="ProjectId"
                className="e-field"
                style={{ width: "100%" }}
                dataSource={projectData}
                fields={fields}
                value={props.ProjectId}
              ></DropDownListComponent>
            </td>
          </tr>
          <tr style={{ display: "none" }}>
            <td className="e-textlabel">TaskId</td>
            <td style={{ colspan: "4" }}>
              <DropDownListComponent
                placeholder="Choose Task"
                data-name="TaskId"
                className="e-field"
                style={{ width: "100%" }}
                dataSource={categoryData}
                fields={fields}
                value={props.TaskId}
              ></DropDownListComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Reason</td>
            <td style={{ colspan: "4" }}>
              <textarea
                id="Description"
                className="e-field e-input"
                name="Description"
                rows={3}
                cols={50}
                style={{
                  width: "100%",
                  height: "60px !important",
                  resize: "vertical",
                }}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Status</td>
            <td style={{ colspan: "4" }}>
              <DropDownListComponent
                id="EventType"
                placeholder="Choose status"
                data-name="EventType"
                className="e-field"
                style={{ width: "100%" }}
                dataSource={["Charge", "No-Charge"]}
                change={onChange}
                value="No-Charge"
                enabled={!isChangable}
              ></DropDownListComponent>
            </td>
          </tr>
          <tr id="charge" style={{ display: "none" }}>
            <td className="e-textlabel">Charge</td>
            <td style={{ colspan: "4" }}>
              <ChargeForm
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                onPay={onPay}
              />
            </td>
          </tr>
        </tbody>
      </table>
    ) : (
      <div></div>
    );
  };
  const onActionBegin = async (e) => {
    switch (e.requestType) {
      case "eventCreate":
        try {
          await createBook(e.data[0]);
          chargeId = null;
          document.getElementById("chargeId").value = "";
        } catch (e) {
          console.log(e.message);
        }
        break;
      case "eventRemove":
        try {
          await deleteBook(e.data[0]._id);
        } catch (e) {
          console.log(e.message);
        }
        break;
      case "eventChange":
        try {
          await updateBook(e.data._id, e.data);
        } catch (e) {
          console.log(e.message);
        }
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    let studioData = [];
    const auth = JSON.parse(localStorage.getItem("auth"));
    setAuth(auth);
    async function fetchStudioData() {
      await fetch(STUDIOS_URL, authHeaderConfig(auth))
        .then((results) => results.json())
        .then((data) => {
          data.forEach((item) => {
            studioData.push(item);
          });
        })
        .catch((e) => {
          // if (e.response.status === 401) {
          //   localStorage.removeItem("auth");
          // }
          // const message = e.response ? e.response.data.message : e.message;
          // throw new Error(e);
          console.log(e);
        });
      if (auth.user.role === "owner") {
        let newData = [];
        await studioData.forEach((item) => {
          if (item.owner.id === auth.user.id) {
            newData.push(item);
          }
        });
        setStudios(newData);
        return;
      }
      setStudios(studioData);
    }
    async function fetchBookData() {
      try {
        await fetch(BOOK_URL, authHeaderConfig(auth))
          .then((result) => result.json())
          .then((data) => {
            data.forEach((item) => {
              item.Id = item._id;
              item.IsReadonly = false;
              if (item.BookStatus === "Booked") {
                item.IsReadonly = true;
              } else {
                item.IsBlock = false;
              }
              if (item.isChangable) {
                item.IsReadonly = false;
              }
            });
            setBookData(extend([], data, null, true));
          });
      } catch (e) {
        // if (e.response.status === 401) {
        //   localStorage.removeItem("auth");
        // }
        // const message = e.response ? e.response.data.message : e.message;
        // throw new Error(e);
        console.log(e);
      }
    }
    fetchStudioData();
    fetchBookData();
    // fetchOwnerData();
    // return () => {
    //   abortController.abort();
    // };
  }, []);

  if (studios) {
    studios.forEach((studio, index) => {
      projectData.push({
        text: studio.name,
        id: studio.id,
        value: studio.id,
        color: "#" + Math.random().toString(16).slice(-6),
      });
      studio.room.forEach((room, i) => {
        categoryData.push({
          text: room.roomName,
          id: room._id,
          groupId: studio.id,
          color: "#" + Math.random().toString(16).slice(-6),
        });
      });
    });
  }
  return (
    <SideLayout>
      <div className="schedule-control-section">
        <div className="col-lg-12 control-section">
          <div className="control-wrapper">
            <ScheduleComponent
              id="schedule"
              cssClass="timeline-resource-grouping"
              width="100%"
              height="650px"
              selectedDate={new Date()}
              currentView="TimelineWeek"
              eventSettings={{
                dataSource: bookData,
                fields: {
                  subject: {
                    title: "Event Name",
                    name: "Subject",
                    default: "Not Available",
                  },
                },
              }}
              group={{ resources: ["Projects", "Categories"] }}
              actionBegin={(e) => onActionBegin(e)}
              editorTemplate={editorTemplate}
              rowAutoHeight={true}
              popupOpen={(e) => onPopupOpen(e)}
              cssClass="schedule-cell-dimension"
              timeScale={{ enable: true, interval: 60, slotCount: 1 }}
            >
              <ResourcesDirective>
                <ResourceDirective
                  field="ProjectId"
                  title="Choose Project"
                  name="Projects"
                  allowMultiple={false}
                  dataSource={projectData}
                  textField="text"
                  idField="id"
                  allowGroupEdit={false}
                  colorField="color"
                ></ResourceDirective>
                <ResourceDirective
                  field="TaskId"
                  title="Category"
                  name="Categories"
                  allowMultiple={true}
                  dataSource={categoryData}
                  textField="text"
                  idField="id"
                  groupIDField="groupId"
                  colorField="color"
                ></ResourceDirective>
              </ResourcesDirective>
              <ViewsDirective>
                <ViewDirective option="TimelineDay" />
                <ViewDirective option="TimelineWeek" />
                <ViewDirective option="TimelineWorkWeek" />
                <ViewDirective option="TimelineMonth" />
                <ViewDirective option="Agenda" />
              </ViewsDirective>
              <Inject
                services={[
                  TimelineViews,
                  TimelineMonth,
                  Agenda,
                  Resize,
                  DragAndDrop,
                ]}
              />
            </ScheduleComponent>
          </div>
          <div className="mb-5 pb-5"></div>
        </div>
      </div>
    </SideLayout>
  );
}
