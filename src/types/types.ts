export interface ServicesType {
  title: string;
  desc: string;
}
export interface VolunteersType {
  id: number;
  name: string;
  yearsAndCountry: string;
  term: string;
  image: string;
  biography: string;
  projects: {
    title: string;
    img: string;
    date: string;
    desc: string;
    proj_name: string;
  }[];
}
export interface ProjectsType {
  id: number;
  isFinished: boolean;
  img: string;
  title: string;
  desc: string;
  project_purpose: string;
  project_purpose_desc: string;
  intentedTo: string;
  intentedToDesc: string;
  indentedToPic: string;
  intrestedPeople: string;
  project_images: [];
}
export interface OurTeamType {
  id: string;
  name: string;
  image: string;
  desc: string;
  linkedin: string;
}
export interface ManagmentBoardType {
  id: string;
  image: string;
  name: string;
  position: string;
  desc: string;
}
