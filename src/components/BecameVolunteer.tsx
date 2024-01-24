import React from "react";

const BecameVolunteer = () => {
  return (
    <div className="become-volunteer container py-5">
      <div className="row">
        <div className="col-8 pl-0">
          <img
            src="/images/Homepage/volunteerVideo.png"
            alt="video"
            className="border-radius"
            style={{ height: "250px", width: "100%" }}
          />
        </div>
        <div className="col-4 bg-black border-radius p-4">
          <h5 className="text-white">
            Стани <br /> Волонтер
          </h5>

          <small className="py-3 text-white d-block">
            Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu
            ut.
          </small>

          <button className="bg-black mt-3 text-white">Придружи ни се</button>
        </div>
      </div>
    </div>
  );
};

export default BecameVolunteer;
