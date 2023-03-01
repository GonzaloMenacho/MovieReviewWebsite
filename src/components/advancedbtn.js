import AdvancedPopup from "./advancedpopup";
import React, { useState } from "react";

export default function AdvancedBtn() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
      <button className="advanced-btn" onClick={togglePopup}>
        Advanced
      </button>
      {isOpen && <AdvancedPopup />}
    </>
  );
}
