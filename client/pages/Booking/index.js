import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Main from "../../components/booking/Main";
import Wrapper from "../../components/booking/Wrapper";
import "./styles.css";
import { getStudio } from "../../services";

export default function BookingNew(props) {
  const [initialState, setInitialState] = useState({});
  const router = useRouter();
  const { studioId } = router.query;
  useEffect(() => {
    const getStudioInfo = async () => {
      const data = await getStudio(studioId);
      const studio = {
        name: data.name,
        address: data.address,
        phoneNumber: data.phoneNumber,
        file: data.file,
        roomType: data.roomType,
      };
      const rooms = data.room;
      const engineer = data.engineer;
      const service = data.service;
      const equip = data.equip;
      setInitialState({
        studio,
        rooms,
        service,
        equip,
        engineer,
        studioId,
      });
    };
    getStudioInfo();
  }, []);
  return (
    <>
      <div>
        <Main />
        <div className="main_wrapper">
          {initialState.studio && <Wrapper studioInfoState={initialState} />}
        </div>
      </div>
    </>
  );
}
