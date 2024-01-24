import React from "react";

const Projects = () => {
  return (
    <div className="container-fluid py-3 projects-border">
      <div className="row py-2">
        <div className="col-12">
          <div className="d-flex justify-content-center align-items-center color-red">
            <div className="text-center" style={{ marginRight: "120px" }}>
              <p className="font-size-32 font-weight-600 mb-1">320+</p>
              <span className="font-size-20">Проекти</span>
            </div>
            <div className="text-center" style={{ marginRight: "120px" }}>
              <p className="font-size-32 font-weight-600 mb-1">580+</p>
              <span className="font-size-20">Волонтери</span>
            </div>
            <div className="text-center">
              <p className="font-size-32 font-weight-600 mb-1">25+</p>
              <span className="font-size-20">Партнери</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
