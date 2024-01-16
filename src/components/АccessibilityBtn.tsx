import React, { useState } from "react";

const AccessibilityBtn = () => {
  const [accessibility, setAccessibility] = useState<boolean>(false);
  const handleOnMouseLeave = () => {};
  return (
    <>
      <button
        onClick={() => setAccessibility(!accessibility)}
        className="accessibility-btn text-white bg-red py-2"
      >
        Пристапност
      </button>

      <div
        onMouseLeave={handleOnMouseLeave}
        className="accesibility-btn content"
      ></div>
    </>
  );
};

export default AccessibilityBtn;
