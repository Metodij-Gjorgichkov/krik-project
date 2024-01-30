import { ProjectsType } from "@/types/types";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useState } from "react";

interface Props {
  projectData: ProjectsType;
}

const ProjectDetail = ({ projectData }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? projectData.project_images.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === projectData.project_images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="project-detail container mt-4 py-5">
      <div className="row">
        <div className="col-12 position-relative">
          <img
            src={projectData.project_images[currentIndex]}
            alt={currentIndex.toString()}
            className="project-detail-img"
          />
          {/* right arrow */}
          <img
            onClick={goToNext}
            src="/icons/rightArrow.png"
            alt="right arrow"
            className="arrow right-arrow cursor-pointer"
          />
          {/* left arrow */}
          <img
            onClick={goToPrevious}
            src="/icons/leftArrow.png"
            alt="left arrow"
            className="arrow left-arrow cursor-pointer"
          />
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
