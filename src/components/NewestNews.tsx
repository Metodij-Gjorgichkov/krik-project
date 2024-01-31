import React from "react";
import PurpleButton from "./PurpleButton";

const NewestNews = () => {
  const NewsTypes = [
    {
      img: "/images/Homepage/homepage_card_2.jpg",
      title: "еко-action",
      date: "22.02.2023",
      description:
        "Lorem ipsum dolor sit amet consectetur. Curabitur cursus quis id.",
    },
    {
      img: "/images/Homepage/homepage_card_2.jpg",
      title: "еко-action",
      date: "22.02.2023",
      description:
        "Lorem ipsum dolor sit amet consectetur. Curabitur cursus quis id.",
    },
    {
      img: "/images/Homepage/homepage_card_2.jpg",
      title: "еко-action",
      date: "22.02.2023",
      description:
        "Lorem ipsum dolor sit amet consectetur. Curabitur cursus quis id.",
    },
    {
      img: "/images/Homepage/homepage_card_2.jpg",
      title: "еко-action",
      date: "22.02.2023",
      description:
        "Lorem ipsum dolor sit amet consectetur. Curabitur cursus quis id.",
    },
    {
      img: "/images/Homepage/homepage_card_2.jpg",
      title: "еко-action",
      date: "22.02.2023",
      description:
        "Lorem ipsum dolor sit amet consectetur. Curabitur cursus quis id.",
    },
  ];
  return (
    <>
      <div className="newestNews container">
        <div className="row">
          <div className="col-12 mb-5">
            <h2 className="font-weight-800">Најнови вести</h2>
          </div>
        </div>

        <div className="scroll-section">
          {NewsTypes.map((news) => {
            return (
              <div className="card-30 position-relative">
                <img
                  className="border-radius"
                  src={news.img}
                  alt={news.description}
                />

                <div className="img-content px-3 text-white">
                  <a
                    className="bg-orange text-dark mr-2 border-radius px-2"
                    href="#"
                  >
                    {news.title}
                  </a>
                  <span>25.02.2023</span>

                  <p className="py-2 mb-0">{news.description}</p>

                  <a className="text-white" href="#">
                    Види повеќе
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="d-block text-center text-md-right mt-5">
          <PurpleButton title="Види за цел месец" padding="20px" />
        </div>
      </div>
    </>
  );
};

export default NewestNews;
