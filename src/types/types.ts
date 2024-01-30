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
