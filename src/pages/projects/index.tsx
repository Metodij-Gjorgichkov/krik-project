import { ProjectsType } from "@/types/types";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";

interface Props {
  finishedProjectsData: ProjectsType[];
  currentProjectsData: ProjectsType[];
}

const Projects = ({ finishedProjectsData, currentProjectsData }: Props) => {
  return (
    <div className="projects container py-5">
      <div className="row">
        <div className="col-12 py-5 text-center font-weight-800">
          <h2>Проекти</h2>
        </div>
        <div className="col-12 mb-3">
          <h4 className="font-weight-800">Тековни</h4>
        </div>

        {currentProjectsData.map((proj) => {
          return (
            <div className="col-12 col-md-4 mb-3">
              <Link href={`projects/${proj.id}`}>
                <img src={proj.img} alt={proj.desc} className="border-radius" />
              </Link>
            </div>
          );
        })}

        <div className="col-12 mb-3 mt-5">
          <h4 className="font-weight-800">Завршени</h4>
        </div>

        {finishedProjectsData.map((proj) => {
          return (
            <div className="col-12 col-md-4 mb-3">
              <Link href={`projects/${proj.id}`}>
                <img src={proj.img} alt={proj.desc} className="border-radius" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

export const getServerSideProps: GetServerSideProps = async () => {
  let finishedProjectsRes = await fetch(
    "http://localhost:5001/projects?isFinished=true"
  );
  let finishedProjectsData = await finishedProjectsRes.json();

  let currentProjectsRes = await fetch(
    "http://localhost:5001/projects?isFinished=false"
  );
  let currentProjectsData = await currentProjectsRes.json();

  return {
    props: {
      finishedProjectsData,
      currentProjectsData,
    },
  };
};
