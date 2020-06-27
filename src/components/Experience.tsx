import React from "react";
import ExperienceItem from "./ExperienceItem";
import { ExperienceType } from "../staticData/types";

type PropsType = {
  experiences: readonly ExperienceType[];
  isCompact: boolean;
};

const Experience = (props: PropsType) => (
  <div>
    {props.experiences.map((experience, index) => {
      return (
        <ExperienceItem
          key={index}
          isCompact={props.isCompact}
          {...experience}
        />
      );
    })}
  </div>
);

export default Experience;
