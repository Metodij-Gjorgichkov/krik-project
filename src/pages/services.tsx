import { ServicesType } from "@/types/types";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";

interface ServiceData {
  data: ServicesType[];
}

const Services = ({ data }: ServiceData) => {
  const router = useRouter();

  const handleOnClick = (text: string) => {
    router.push({
      pathname: "/services",
      query: {
        title: text,
      },
    });
  };

  console.log(data);
  return (
    <div className="container my-5">
      <div className="row p-5 text-center font-weight-800">
        <div className="col-4">
          <p
            className={`pb-2 cursor-pointer ${
              Object.keys(router.query).length === 0 ||
              router.query.title === "Центар Крикни"
                ? "border-bottom-active"
                : ""
            }`}
            onClick={() => {
              handleOnClick("Центар Крикни");
            }}
          >
            Центар Крикни
          </p>
        </div>
        <div className="col-4">
          <p
            className={`pb-2 cursor-pointer ${
              router.query.title === "Независни станбени единици" &&
              "border-bottom-active"
            }`}
            onClick={() => {
              handleOnClick("Независни станбени единици");
            }}
          >
            Независни станбени единици
          </p>
        </div>
        <div className="col-4">
          <p
            className={`pb-2 cursor-pointer ${
              router.query.title === "Советувалиште" && "border-bottom-active"
            }`}
            onClick={() => {
              handleOnClick("Советувалиште");
            }}
          >
            Советувалиште
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <h2 className="mb-4">{data.map((typ) => typ.title)}</h2>
        </div>
        <div className="col-12">
          <p>{data.map((typ) => typ.desc)}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let data: ServicesType[];
  let res: Response;

  if (query.title) {
    res = await fetch(`http://localhost:5001/services?title=${query.title}`);
  } else {
    res = await fetch(`http://localhost:5001/services?title=Центар%20Крикни`);
  }
  data = await res.json();

  console.log(data);

  return {
    props: {
      data,
    },
  };
};
