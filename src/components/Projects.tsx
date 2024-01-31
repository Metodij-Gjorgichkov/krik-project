import React from "react";

const Projects = () => {
  return (
    <div className="container-fluid py-3 projects-border">
      <div className="row d-flex justify-content-center align-items-center color-red py-2">
        <div className="col-12 col-sm-4 text-center mb-4 mb-sm-0">
          <p className="font-size-32 font-weight-600 mb-1">320+</p>
          <span className="font-size-20">Проекти</span>
        </div>
        <div className="col-12 col-sm-4 text-center mb-sm-0">
          <p className="font-size-32 font-weight-600 mb-1">580+</p>
          <span className="font-size-20">Волонтери</span>
        </div>
        <div className="col-12 col-sm-4 text-center mb-sm-0">
          <p className="font-size-32 font-weight-600 mb-1">25+</p>
          <span className="font-size-20">Партнери</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
