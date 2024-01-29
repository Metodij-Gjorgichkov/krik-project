import VolunteersCards from "@/components/VolunteersCards";
import { VolunteersType } from "@/types/types";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  data: VolunteersType[];
}

const Volunteers = ({ data }: Props) => {
  const handleOnClick = (text: string) => {
    router.push({
      pathname: "/volunteers",
      query: {
        term: text,
      },
    });
  };

  const router = useRouter();
  return (
    <div className="darker-white">
      <div className="container">
        <div className="row position-relative p-5 text-center font-weight-800">
          <div className="col-6">
            <p
              className={`pb-2 cursor-pointer ${
                Object.keys(router.query).length === 0 ||
                router.query.term === "long"
                  ? "border-bottom-active"
                  : ""
              }`}
              onClick={() => {
                handleOnClick("long");
              }}
            >
              Долг Рок
            </p>
          </div>
          <div className="col-6">
            <p
              className={`pb-2 cursor-pointer ${
                router.query.term === "short" && "border-bottom-active"
              }`}
              onClick={() => {
                handleOnClick("short");
              }}
            >
              Краток рок
            </p>
          </div>
          <div className="service-hr"></div>
        </div>

        <div className="row">
          {data.map((volunteer) => {
            return <VolunteersCards {...volunteer} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Volunteers;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let data: VolunteersType[];
  let res: Response;

  if (query.term) {
    res = await fetch(`http://localhost:5001/volunteers?term=${query.term}`);
  } else {
    res = await fetch(`http://localhost:5001/volunteers?term=long`);
  }
  data = await res.json();

  return {
    props: {
      data,
    },
  };
};
