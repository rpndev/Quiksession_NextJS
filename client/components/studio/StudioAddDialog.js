import React, { useState } from "react";
import RoomAdd from "./steps/room/RoomAdd";
import ServiceAdd from "./steps/service/ServiceAdd";
import EquipAdd from "./steps/equip/EquipAdd";
import EngineerAdd from "./steps/engineer/EngineerAdd";
import StudioAdd from "./steps/studio/StudioAdd";
import { Container } from "@material-ui/core";
import ResultForm from "./steps/result/ResultForm";
function useFormProgress() {
  const [currentStep, setCurrentStep] = useState(1);
  const goForward = () => {
    setCurrentStep(currentStep + 1);
  };
  const goBack = () => {
    setCurrentStep(currentStep - 1);
  };
  const reset = () => {
    setCurrentStep(1);
  };
  return [currentStep, goForward, goBack, reset];
}

function StudioAddDialog({ onConfirm }) {
  const [currentStep, goForward, goBack, reset] = useFormProgress();

  const renderSwitch = (step) => {
    switch (step) {
      case 1:
        return <StudioAdd goForward={goForward} />;
      case 2:
        return <RoomAdd goForward={goForward} goBack={goBack} />;
      case 3:
        return <ServiceAdd goForward={goForward} goBack={goBack} />;
      case 4:
        return <EquipAdd goForward={goForward} goBack={goBack} />;
      case 5:
        return <EngineerAdd goForward={goForward} goBack={goBack} />;
      case 6:
        return <ResultForm reset={reset} onConfirm={onConfirm} />;
      default:
        console.log("This is a multi-step form");
    }
  };

  return <Container>{renderSwitch(currentStep)}</Container>;
}

export default StudioAddDialog;
