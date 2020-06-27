import { ExperienceType } from "./types";

const msMechanicalEngineering = {
  title: "M.S. Mechanical Engineering",
  institution: "UC Berkeley",
  city: "Berkeley, CA",
  date: "September 2016 - May 2018",
};

const bsMechanicalEngineering = {
  title: "B.S. Mechanical Engineering",
  institution: "UC Davis",
  city: "Davis, CA",
  date: "October 2015 - June 2016",
};

const degrees: readonly ExperienceType[] = Object.freeze([
  msMechanicalEngineering,
  bsMechanicalEngineering,
]);

export default degrees;
