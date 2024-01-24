import React, { useState } from "react";

const AccessibilityBtn = () => {
  const [accessibility, setAccessibility] = useState<boolean>(false);
  const [activeToggle, setActiveToggle] = useState<boolean>(false);

  const handleOnMouseLeave = () => {
    setAccessibility(!accessibility);
  };

  const AccessibilityType = [
    {
      img: "/icons/cursorSize.png",
      title: "Cursor Size",
    },
    {
      img: "/icons/screenReader.png",
      title: "Screen Reader",
    },
    {
      img: "/icons/contrast.png",
      title: "Contrast",
    },
    {
      img: "/icons/readingMask.png",
      title: "Reading Mask",
    },
    {
      img: "/icons/pauseAnimation.png",
      title: "Pause Animation",
    },
    {
      img: "/icons/saturation.png",
      title: "Saturation",
    },
  ];

  return (
    <>
      <button
        onClick={() => setAccessibility(!accessibility)}
        className="accessibility-btn text-white bg-red py-2"
      >
        Пристапност
      </button>

      {accessibility && (
        <div
          onMouseLeave={handleOnMouseLeave}
          className="accessibility-btn content border-radius"
        >
          <p className="text-center text-white bg-red py-2 mb-0">Пристапност</p>

          <div className="bg-white text-dark pb-2 py-2 px-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="darker-white p-2 mr-3 border-radius font-weight-600">
                  XL
                </span>
                <span className="darker-white p-2 border-radius font-weight-600">
                  Oversized widget
                </span>
              </div>
              <div onClick={() => setActiveToggle(!activeToggle)}>
                {activeToggle ? (
                  <img
                    src="/icons/on.png"
                    alt="on-icon"
                    style={{ width: "50px" }}
                    className="toggledButton"
                  />
                ) : (
                  <img
                    src="/icons/off.png"
                    alt="off-icon"
                    style={{ width: "50px" }}
                    className="toggledButton"
                  />
                )}
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center flex-wrap mt-3 px-3">
              {AccessibilityType.map((acc, index) => {
                return (
                  <div
                    key={index}
                    className="darker-white text-center border-radius"
                    style={{ width: "40%", marginBottom: "10px" }}
                  >
                    <img src={acc.img} alt="cursorSize" />
                    <p className="mb-0">{acc.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityBtn;
