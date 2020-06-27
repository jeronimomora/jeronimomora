import { ExperienceType } from "./types";

const fictivCge1 = {
  title: "Computational Geometry Engineer I",
  institution: "Fictiv",
  city: "San Francisco, CA",
  date: "September 2018 - November 2018",
};

const fictivCge2 = {
  title: "Computational Geometry Engineer II",
  institution: "Fictiv",
  city: "San Francisco, CA",
  date: "November 2018 - Present",
};

const llnl = {
  title: "Engineering Intern",
  institution: "Livermore National Laboratory",
  city: "Livermore, CA",
  date: "May 2014 - August 2017 (Seasonal)",
};

const ucdavis = {
  title: "Undergraduate Research Assistant II",
  institution: "UC Davis",
  city: "Davis, CA",
  date: "October 2015 - June 2016",
};

const jobs: readonly ExperienceType[] = Object.freeze([
  fictivCge2,
  fictivCge1,
  llnl,
  ucdavis,
]);

export default jobs;
