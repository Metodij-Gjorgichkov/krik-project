import React from "react";

const NewestNews = () => {
  return (
    <div className="newestNews container">
      <div className="row">
        <div className="col-12 mb-5">
          <h2 className="font-weight-800">Најнови вести</h2>
        </div>

        <div className="col-12 position-relative">
          <div className="d-flex align-items-center">
            <img
              src="/images/Homepage/homepage_card_2.jpg"
              alt=""
              className="border-radius"
              style={{ width: "400px" }}
            />
            <div className="img-content p-3">
              <div className="d-flex align-items-center pb-3">
                <a href="#" className="text-white mr-3 px-1">
                  еко-action
                </a>
                <img src="/images/Homepage/dateIcon.png" alt="date" />
                <span className="text-white ml-1">25.08.2023</span>
              </div>
              <span className="text-white d-block mb-1">
                Lorem ipsum dolor sit amet consectetur. Curabitur cursus quis
                id.
              </span>

              <span className="d-block text-white">Види повеќе</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewestNews;
