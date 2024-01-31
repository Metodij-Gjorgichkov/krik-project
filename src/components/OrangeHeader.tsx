import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const OrangeHeader = () => {
  const [categoryValue, setCategoryValue] = useState<string>("За нас");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleOnSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setCategoryValue(selectedValue);
    handleMenuClose();
    router.push({
      pathname: selectedValue,
    });
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const menuVars = {
    initial: {
      x: 600,
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.7,
      },
    },
    exit: {
      x: 600,
      transition: {
        duration: 0.9,
      },
    },
  };

  return (
    <>
      <div className="orange-header bg-orange font-mulish font-weight-800">
        <div className="container">
          <div className="row py-1">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <img
                  onClick={() => {
                    setCategoryValue("За нас");
                    router.push({ pathname: "/" });
                    handleMenuClose();
                  }}
                  src="/icons/krik-logo.png"
                  alt="krik-logo"
                  className="krik-logo"
                  style={{ cursor: "pointer" }}
                />

                <nav className="d-none d-sm-block">
                  <ul className="d-flex align-items-center">
                    <li>
                      <select
                        style={{ backgroundColor: "transparent" }}
                        value={categoryValue}
                        onChange={(
                          event: React.ChangeEvent<HTMLSelectElement>
                        ) => handleOnSelectChange(event)}
                      >
                        <option value="/">За нас</option>
                        <option value="/forKrik">За крик</option>
                        <option value="Нашиот тим">Нашиот тим</option>
                        <option value="volunteers">Волонтери</option>
                        <option disabled>Архива</option>
                      </select>
                    </li>
                    <li className="px-2 mr-3">
                      <Link className="inline-block" href="/services">
                        Услуги
                      </Link>
                    </li>
                    <li className="px-2 mr-3">
                      <Link href={"/projects"} className="inline-block">
                        Проекти
                      </Link>
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
                </nav>
                <div
                  className="d-sm-none"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <GiHamburgerMenu size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="container fixed-menu py-5"
          >
            <div className="row">
              <div className="col-12 text-center text-white">
                <nav>
                  <ul>
                    <li className="mb-5">
                      <select
                        value={categoryValue}
                        onChange={(
                          event: React.ChangeEvent<HTMLSelectElement>
                        ) => handleOnSelectChange(event)}
                      >
                        <option value="/">За нас</option>
                        <option value="/forKrik">За крик</option>
                        <option value="Нашиот тим">Нашиот тим</option>
                        <option value="volunteers">Волонтери</option>
                        <option disabled>Архива</option>
                      </select>
                    </li>
                    <li className="mb-5">
                      <Link
                        className="inline-block text-white"
                        href="/services"
                        onClick={handleMenuClose}
                      >
                        Услуги
                      </Link>
                    </li>
                    <li className="mb-5">
                      <Link
                        href={"/projects"}
                        className="inline-block text-white"
                        onClick={handleMenuClose}
                      >
                        Проекти
                      </Link>
                    </li>
                    <li className="mb-5">
                      <a
                        className="inline-block text-white"
                        href="#footer"
                        onClick={handleMenuClose}
                      >
                        Контакт
                      </a>
                    </li>
                    <li className="mb-5">
                      <a
                        className="inline-block bg-black border-radius text-white font-weight-400 px-2 py-1"
                        href="#"
                      >
                        Донирај
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OrangeHeader;
