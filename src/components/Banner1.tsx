import React from "react";
import PurpleButton from "./PurpleButton";

const Banner1 = () => {
  return (
    <div className="banner1 bg-image">
      <div className="container h-100">
        <div
          className="row d-flex justify-content-center align-items-start h-100"
          style={{ paddingTop: "70px" }}
        >
          <div className="col-12">
            <h1
              className="text-center font-monserat text-uppercase font-weight-600"
              style={{ marginBottom: "80px" }}
            >
              Промената доаѓа <br /> од младите
            </h1>

            <div className="who-we-are text-center font-mulish">
              <h4 className="font-weight-800 mb-4">Кои Сме Ние?</h4>
              <span className="d-block mb-4">
                Центарот за младински активизам Крик е <br />
                невладина, непрофитна организација <br /> основана од млади
                луѓе, предводена од <br /> млади луѓе и работи за и со млади
                луѓе.
              </span>

              <PurpleButton title="Повеќе за нас" padding="110px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
