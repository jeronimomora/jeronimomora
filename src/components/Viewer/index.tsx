import React, { useRef } from "react";
import { useViewer } from "./logic";

const Viewer = (props: {}) => {
  const divRef = useRef<HTMLDivElement>(null);

  useViewer(divRef);

  return (
    <div
      style={{
        width: "75%",
        minHeight: "300px",
      }}
      ref={divRef}
    ></div>
  );
};

export default Viewer;
