import { VolunteersType } from "@/types/types";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

interface Props {
  volunteer: VolunteersType;
}

const VolunteerDetail = ({ volunteer }: Props) => {
  return (
    <>
      <div className="container py-5">
        <div
          className="row d-flex justify-content-between align-items-center mt-5 borde-radius"
          style={{ border: "1px solid black", borderRadius: "10px" }}
        >
          <div className="col-12 col-lg-3 px-0">
            <img
              src={volunteer.image}
              alt={volunteer.name}
              className="border-radius"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-12 col-lg-9 mt-3 mt-lg-0">
            <h4>{volunteer.name}</h4>
            <p>{volunteer.biography}</p>
          </div>
        </div>
      </div>

      <div className="volunteer-detail container mb-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h3>Проекти во кои учествува</h3>
          </div>

          {volunteer.projects.map((project, index) => {
            return (
              <div
                className="col-12 col-lg-4 mb-5 volunteer-projects"
                key={index}
              >
                <button
                  className="d-block border-radius mb-4"
                  style={{ border: "1px solid black" }}
                >
                  {project.title}
                </button>
                <div className="position-relative">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="border-radius"
                  />
                </div>
                <div className="content p-3">
                  <a
                    className="bg-orange text-dark mr-2 border-radius px-2"
                    href="#"
                  >
                    {project.proj_name}
                  </a>
                  <span className="text-white">{project.date}</span>

                  <p className="py-2 mb-0 text-white ">{project.desc}</p>

                  <a className="text-white" href="#">
                    Види повеќе
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default VolunteerDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const volunteersRes = await fetch("http://localhost:5001/volunteers");
  const volunteersData: VolunteersType[] = await volunteersRes.json();

  const paths = volunteersData.map((product) => {
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
  let volunteer: VolunteersType | undefined = undefined;

  if (params?.id) {
    const volunteerRes = await fetch(
      `http://localhost:5001/volunteers/${params.id}`
    );
    volunteer = await volunteerRes.json();
  }

  return {
    props: {
      volunteer,
    },
  };
};
