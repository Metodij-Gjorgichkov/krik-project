import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GetServerSideProps } from "next";
import { ManagmentBoardType, OurTeamType } from "@/types/types";
import Link from "next/link";

interface Props {
  data: OurTeamType[];
  dataBoard: ManagmentBoardType[];
}

const OurTeam = ({ data, dataBoard }: Props) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // @ts-ignore
    afterChange: (current) => setActiveSlide(current),
  };

  const getCenterImageIndex = () => {
    return (activeSlide + 1) % data.length;
  };

  const goToNext = () => {
    const isLastIndex = currentIndex === data.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };
  const goToPrevious = () => {
    const isFistIndex = currentIndex === 0;
    const newIndex = isFistIndex ? data.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const centerImageIndex = getCenterImageIndex();
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 py-3 text-center">
            <h2 className="font-weight-800 mb-5">
              Запознајте го <br /> Нашиот Тим
            </h2>
            <div className="d-none d-md-block">
              <Slider {...settings}>
                {data.map((d, index) => {
                  return (
                    <>
                      <Link key={index} href={`/ourTeam/${d.id}`}>
                        <img
                          src={d.image}
                          alt={d.name}
                          className={`border-radius mb-5 ${
                            centerImageIndex === index ? "scale-image" : ""
                          }`}
                          style={{ width: "100%", display: "block" }}
                        />
                      </Link>
                      <p>{d.name}</p>
                      <span className="d-block mb-4">{d.desc}</span>
                      {centerImageIndex === index && (
                        <>
                          <a href={d.linkedin} className="d-block mb-3">
                            <button className="our-team-linkedin-btn">
                              Linkedin
                            </button>
                          </a>
                        </>
                      )}
                    </>
                  );
                })}
              </Slider>
            </div>
            <div className="d-md-none">
              <img
                src={data[currentIndex].image}
                alt=""
                className="border-radius mb-4"
              />
              <div className="icons-content d-flex justify-content-center align-items-center text-center mb-3">
                <img
                  onClick={goToPrevious}
                  src="/icons/leftArrow.png"
                  alt="left arrow"
                  className="mr-2"
                  style={{ width: "35px" }}
                />
                <img
                  onClick={goToNext}
                  src="/icons/rightArrow.png"
                  alt="right arrow"
                  style={{ width: "35px" }}
                />
              </div>
              <div className="content">
                <h2>{data[currentIndex].name}</h2>
                <span className="d-block mb-2">{data[currentIndex].desc}</span>
                <a href={data[currentIndex].linkedin} className="d-block mb-3">
                  <button className="our-team-linkedin-btn">Linkedin</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-12 text-center">
            <h2 className="font-weight-800 mb-5">Членови на Управниот Одбор</h2>
          </div>
        </div>
      </div>
      {dataBoard.map((data, index) => {
        return (
          <div
            className={`container-fluid py-3 ${
              index === dataBoard.length - 1 ? "mb-5" : ""
            }`}
            style={{
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
            }}
          >
            <div
              className="row d-flex align-items-center"
              style={{ margin: "0 auto", width: "65%" }}
            >
              <div className="col-12 col-md-4 mb-md-3">
                <img src={data.image} alt={data.name} />
              </div>
              <div className="col-12 col-md-8 mb-md-3">
                <p>{data.name}</p>
                <span className="d-block">{data.position}</span>

                <span className="d-block">{data.desc}</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default OurTeam;

export const getServerSideProps: GetServerSideProps = async () => {
  let res: Response = await fetch("http://localhost:5001/our_team");
  let data: OurTeamType[] = await res.json();

  let resBoard: Response = await fetch(
    "http://localhost:5001/members_of_the_management_board"
  );
  let dataBoard: ManagmentBoardType[] = await resBoard.json();

  return {
    props: {
      data,
      dataBoard,
    },
  };
};
