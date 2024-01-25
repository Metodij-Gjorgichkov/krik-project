import { title } from "process";
import React from "react";

const OurServices = () => {
  const OurServicesType = [
    {
      title: "01 Мултифункционален центар Крикни",
      desc: "Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus volutpat. ",
    },
    {
      title: "02 Независни станбени единици",
      desc: "Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus volutpat. ",
    },
    {
      title: "03 советувалиште за Млади и Родители",
      desc: "Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus volutpat. ",
    },
  ];
  return (
    <div className="our-services container py-5">
      <div className="row">
        <div className="col-12  mb-5">
          <h2 className="font-weight-800">Најнови вести</h2>
        </div>
        <div className="col-6">
          <img
            src="/images/Homepage/homepage_uslugi_cardimg.jpg"
            alt="services"
            className="our-serices-img border-radius"
          />
        </div>
        <div className="col-6">
          {OurServicesType.map((service) => {
            return (
              <div className="right-column mb-3">
                <h4>{service.title}</h4>
                <span
                  className="d-block pb-3"
                  style={{ borderBottom: "1px solid black" }}
                >
                  {service.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
