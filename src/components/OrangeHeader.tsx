import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const OrangeHeader = () => {
  const [categoryValue, setCategoryValue] = useState<string>("За нас");
  const router = useRouter();

  const handleOnSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setCategoryValue(selectedValue);

    router.push({
      pathname: selectedValue,
    });
  };
  return (
    <div className="orange-header bg-orange font-mulish font-weight-800">
      <div className="container">
        <div className="row py-1">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <img
                onClick={() => {
                  setCategoryValue("За нас");
                  router.push({ pathname: "/" });
                }}
                src="/icons/krik-logo.png"
                alt="krik-logo"
                className="krik-logo"
                style={{ cursor: "pointer" }}
              />

              <ul className="d-flex align-items-center">
                <li>
                  <select
                    value={categoryValue}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                      handleOnSelectChange(event)
                    }
                  >
                    <option value="/">За нас</option>
                    <option value="/forKrik">За крик</option>
                    <option value="Нашиот тим">Нашиот тим</option>
                    <option value="Волонтери">Волонтери</option>
                    <option disabled>Архива</option>
                  </select>
                </li>
                <li className="px-2 mr-3">
                  <Link className="inline-block" href="/services">
                    Услуги
                  </Link>
                </li>
                <li className="px-2 mr-3">
                  <a className="inline-block" href="#">
                    Проекти
                  </a>
                </li>
                <li className="px-2 mr-3">
                  <a className="inline-block" href="#footer">
                    Контакт
                  </a>
                </li>
                <li className="px-2 mr-3">
                  <a
                    className="inline-block bg-black border-radius text-white font-weight-400 px-2 py-1"
                    href="#"
                  >
                    Донирај
                  </a>
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
