import React from "react";

const Partners = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12  mb-5">
            <h2 className="font-weight-800">Партнери</h2>
          </div>
        </div>
      </div>

      <div className="container-fluid mb-5 pb-5">
        <div className="row">
          <div className="col-12 partners-img text-center py-3">
            <img src="/icons/partners/partner-1.png" className="mr-5" />
            <img src="/icons/partners/partner-2.png" className="mr-5" />
            <img src="/icons/partners/partner-3.png" className="mr-5" />
            <img src="/icons/partners/partner-4.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
