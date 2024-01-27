import React from "react";

const OurServices = () => {
  const OurServicesType = [
    {
      title: "01 Мултифункционален центар Крикни",
      img: "/icons/blackArrow.png",
      desc: "Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus volutpat. ",
    },
    {
      title: "02 Независни станбени единици",
      img: "/icons/redArrow.png",
      desc: "Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus volutpat. ",
    },
    {
      title: "03 советувалиште за Млади и Родители",
      img: "/icons/redArrow.png",
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
          {OurServicesType.map((service, index) => {
            return (
              <div key={index} className="right-column mb-3">
                <div className="d-flex align-items-center justify-content-between">
                  <h4>{service.title}</h4>
                  <img
                    src={service.img}
                    alt={service.title}
                    style={{ width: "40px" }}
                    className="cursor-pointer"
                  />
                </div>
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
