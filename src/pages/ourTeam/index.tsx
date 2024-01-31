import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GetServerSideProps } from "next";
import { OurTeamType } from "@/types/types";

interface Props {
  data: OurTeamType[];
}

const OurTeam = ({ data }: Props) => {
  const [activeSlide, setActiveSlide] = useState(0);

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

  const centerImageIndex = getCenterImageIndex();
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 py-3 text-center">
          <h2 className="font-weight-800 mb-5">
            Запознајте го <br /> Нашиот Тим
          </h2>
          <Slider {...settings}>
            {data.map((d, index) => {
              return (
                <>
                  <img
                    src={d.image}
                    alt={d.name}
                    className={`border-radius mb-5 ${
                      centerImageIndex === index ? "scale-image" : ""
                    }`}
                    style={{ width: "100%", display: "block" }}
                  />
                  <p>{d.name}</p>
                  <span className="d-block mb-4">{d.desc}</span>
                  {centerImageIndex === index && (
                    <>
                      <a href={d.linkedin} className="d-block mb-3">
                        <button className="bg-success">Linkedin</button>
                      </a>
                    </>
                  )}
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

export const getServerSideProps: GetServerSideProps = async () => {
  let res: Response = await fetch("http://localhost:5001/our_team");
  let data: OurTeamType[] = await res.json();

  return {
    props: {
      data,
    },
  };
};
