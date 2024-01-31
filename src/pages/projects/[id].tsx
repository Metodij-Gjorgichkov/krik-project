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
    <div className="project-detail container py-5">
      <div className="row">
        <div className="col-12 mb-5 position-relative">
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

      <div className="col-12 col-lg-6 py-4 offset-lg-3 text-center">
        <h3 className="mb-3 font-weight-800">{projectData.title}</h3>
        <span>{projectData.desc}</span>
      </div>

      <div
        className="row mt-5 d-flex align-items-center border-radius"
        style={{ border: "1px solid black" }}
      >
        <div
          className="col-12 col-lg-4 p-5 bg-black border-radius"
          style={{ height: "230px" }}
        >
          <h3 className="text-white">{projectData.project_purpose}</h3>
        </div>
        <div className="col-12 col-lg-8 px-5">
          <span>{projectData.project_purpose_desc}</span>
        </div>
      </div>

      <div className="row mt-5 py-3 d-flex align-items-center">
        <div
          className="col-12 col-lg-8 p-5 border-radius"
          style={{ border: "1px solid black", height: "280px" }}
        >
          <h3>{projectData.intentedTo}</h3>
          <span>{projectData.intentedToDesc}</span>
        </div>
        <div className="col-12 col-lg-4">
          <img
            src={projectData.indentedToPic}
            alt="project-pic"
            style={{ width: "100%", height: "280px", display: "block" }}
          />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 px-0">
          <div
            className="border-radius position-relative mb-5"
            style={{ border: "1px solid black", height: "30px" }}
          >
            <div
              className="bg-orange border-radius"
              style={{
                width: `${projectData.intrestedPeople}%`,
                height: "100%",
              }}
            >
              <span
                className="d-block "
                style={{ position: "absolute", top: "10%", right: "20px" }}
              >
                {projectData.intrestedPeople}%
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-center mb-4">
            <p className="mb-0 mr-5">Заинтересиран/а си?</p>
            <a
              href=""
              className="d-block bg-black text-white border-radius px-2 py-1 "
            >
              Пријави се
            </a>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <p className="mb-0 mr-5">Сакаш да не поддржиш?</p>
            <a
              href=""
              className="d-block bg-danger text-white border-radius px-3 py-1 "
            >
              Донирај
            </a>
          </div>
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
