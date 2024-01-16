import React from "react";

const BlackHeader = () => {
  return (
    <div className="black-header bg-black ">
      <div className="container">
        <div className="row py-3 font-monserat font-weight-600 d-flex justify-content-between align-items-center text-white">
          <div className="col-6">
            <div className="d-flex align-items-center">
              <h5 className="text-uppercase mb-0 mr-5">newsletter</h5>
              <input
                type="text"
                placeholder="SEARCH"
                className="bg-transparent pl-2"
              />
            </div>
          </div>
          <div className="col-6 text-right">
            <span className="mr-5">En/Mkd</span>
            <span>E-Shop</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackHeader;
