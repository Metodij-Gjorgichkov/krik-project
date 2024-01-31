import React from "react";

const Events = () => {
  return (
    <div
      className="container pt-5 pt-sm-0 pb-5"
      style={{ marginTop: "-120px" }}
    >
      <div className="row content px-0">
        <div
          className="col-12 col-md-6 p-5 d-flex justify-content-center flex-column align-items-center bg-black"
          style={{ borderRadius: "10px" }}
        >
          <h6 className="mb-3 color-orange text-uppercase font-weight-600">
            Наскоро
          </h6>
          <p className="mb-4 text-white">Нижеме заедно</p>
          <p className="text-white px-2 mb-4">
            Проектот „Еднакви можности за девојчињата и младите жени во Северна
            Македонија” го спроведуваат Националниот младински совет на
            Македонија и Stella Network, со финансиска поддршка од страна на
            Британската амбасада во Скопје.{" "}
          </p>
          <div className="d-flex justify-content-center ">
            <button className="bg-orange px-3 px-md-5 py-2 mr-3 border-0 border-radius d-block">
              Види повеќе
            </button>
            <button className="bg-purple ml-auto px-3 px-md-5 py-2 border-0 border-radius d-block">
              Пријави се
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6 px-0">
          <img
            src="/images/Homepage/homepage_nastan_750x655px.jpg"
            alt="event"
            style={{
              borderRadius: "10px",
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
