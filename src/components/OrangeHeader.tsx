import React from "react";

const OrangeHeader = () => {
  return (
    <div className="orange-header bg-orange font-mulish font-weight-800">
      <div className="container">
        <div className="row py-1">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <img
                src="/icons/krik-logo.png"
                alt="krik-logo"
                className="krik-logo"
              />

              <ul className="d-flex align-items-center">
                <li>
                  <select>
                    <option value="За нас" selected disabled>
                      За нас
                    </option>
                    <option value="За крик">За крик</option>
                    <option value="Нашиот тим">Нашиот тим</option>
                    <option value="Волонтери">Волонтери</option>
                    <option value="Архива">Архива</option>
                  </select>
                </li>
                <li className="px-2 mr-3">
                  <a href="#">Услуги</a>
                </li>
                <li className="px-2 mr-3">
                  <a href="#">Проекти</a>
                </li>
                <li className="px-2 mr-3">
                  <a href="#">Контакт</a>
                </li>
                <li className="px-2 mr-3">
                  <a href="#">Донирај</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrangeHeader;
