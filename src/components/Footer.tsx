import React from "react";

const Footer = () => {
  return (
    <div
      id="footer"
      className="container-fluid bg-black"
      style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
    >
      <div className="row p-5">
        <div className="col-12 col-lg-4 text-center">
          <h3 className="text-white font-weight-800">
            Месечен <br /> билтен
          </h3>
        </div>
        <div className="col-12 col-lg-2 text-white text-center text-lg-left mb-4 mb-lg-0">
          <span>
            Lorem ipsum dolor sit <br /> amet consectetur. Non <br /> at at
            risus dolor <br /> accumsan vitae <br /> dignissim.
          </span>
        </div>
        <div className="col-12 col-lg-5">
          <a
            href="#"
            className="footer-btn py-1 px-1 d-block mb-2 border-radius text-white"
          >
            Вашата Емаил Адреса
          </a>
          <a
            href="#"
            className="bg-orange py-1 px-1 d-block border-radius text-center text-lg-left"
          >
            CTA
          </a>
        </div>

        <div className="footer-line"></div>
        <div className="col-12 col-lg-5 px-5 text-center mb-3 mb-lg-0">
          <h3 className="text-white font-weight-800">Контактирај не!</h3>
          <a
            href="#"
            className="footer-btn py-1 px-1 d-block mb-3 border-radius text-white"
          >
            Вашато Име
          </a>
          <a
            href="#"
            className="footer-btn py-1 px-1 d-block mb-3 border-radius text-white"
          >
            Вашата Емаил Адреса
          </a>
          <a
            href="#"
            className="bg-orange py-1 px-1 d-block border-radius text-center"
          >
            CTA
          </a>
        </div>
        <div className="col-12 col-lg-2 text-white text-center text-lg-left mb-3 mb-lg-0">
          <h4 className="mb-4">Приклучи се</h4>
          <span>
            Lorem ipsum dolor sit <br /> amet consectetur. Non <br /> at at
            risus dolor <br /> accumsan vitae <br /> dignissim.
          </span>
        </div>
        <div className="col-12 col-lg-5  mb-3 mb-lg-0 text-center text-white">
          <h4 className="mb-4">За Крик</h4>
          <span className="d-block mb-4">
            Lorem ipsum dolor sit amet consectetur. <br /> Non at at risus dolor
            accumsan vitae dignissim.{" "}
          </span>

          <img
            src="/icons/socialIcons/facebook.png"
            style={{ width: "48px", height: "48px" }}
            className="mr-3"
          />
          <img
            src="/icons/socialIcons/instagram.png"
            style={{ width: "48px", height: "48px" }}
            className="mr-3"
          />
          <img
            src="/icons/socialIcons/linkedin.png"
            style={{ width: "48px", height: "48px" }}
            className="mr-3"
          />
          <img
            src="/icons/socialIcons/twitter.png"
            style={{ width: "48px", height: "48px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
