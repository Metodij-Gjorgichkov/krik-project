import { ProjectsType } from "@/types/types";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useState } from "react";

interface Props {
  projectData: ProjectsType;
}

const ProjectDetail = ({ projectData }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToNext = () => {};

  const goToPrevious = () => {};

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <img src={projectData.project_images[currentIndex]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const projectsRes = await fetch("http://localhost:5001/projects");
  const projectsData: ProjectsType[] = await projectsRes.json();

  const paths = projectsData.map((product) => {
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
  let projectData: ProjectsType | undefined = undefined;

  if (params?.id) {
    const projectRes = await fetch(
      `http://localhost:5001/projects/${params.id}`
    );
    projectData = await projectRes.json();
  }

  return {
    props: {
      projectData,
    },
  };
};
