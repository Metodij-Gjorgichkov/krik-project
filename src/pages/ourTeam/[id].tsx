import { ManagmentBoardType, OurTeamType } from "@/types/types";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

interface Props {
  boardData: ManagmentBoardType;
}

const OurTeamDetail = ({ boardData }: Props) => {
  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-3">
          <img
            src={boardData.image}
            alt={boardData.name}
            style={{ width: "100%" }}
            className="mb-4 mb-md-0 border-radius"
          />
        </div>
        <div className="col-12 col-md-7">
          <h3>{boardData.name}</h3>
          <span>{boardData.desc}</span>
        </div>
      </div>
    </div>
  );
};

export default OurTeamDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const boardRes = await fetch("http://localhost:5001/our_team");
  const boardData: OurTeamType[] = await boardRes.json();

  const paths = boardData.map((product) => {
    return {
      params: {
        id: product.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  let boardData: ManagmentBoardType | undefined = undefined;

  if (params?.id) {
    const boardRes = await fetch(`http://localhost:5001/our_team/${params.id}`);
    boardData = await boardRes.json();
  }

  return {
    props: {
      boardData,
    },
  };
};
