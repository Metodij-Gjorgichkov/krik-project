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
