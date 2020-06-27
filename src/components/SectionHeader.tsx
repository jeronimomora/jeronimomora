import React, { Ref } from "react";
import Typography from "@material-ui/core/Typography";
import "../styles/SectionHeader.css";

type PropsType = {
  header: string;
};

const SectionHeader = React.forwardRef(
  (props: PropsType, ref: Ref<HTMLDivElement>) => (
    <div ref={ref} className="section-header">
      <Typography variant="h4">{props.header || "Section header"}</Typography>
    </div>
  )
);

export default SectionHeader;
