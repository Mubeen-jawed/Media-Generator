import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const ExpandablePanel = ({ header, children }) => {
  const [expanded, setExpanded] = useState(false);

  function handleExpanded() {
    setExpanded(!expanded);
  }

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row justify-between items-center">
          {header}
        </div>

        <div className="cursor-pointer" onClick={handleExpanded}>
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div className="border-t p-2">{children}</div>}
    </div>
  );
};

export default ExpandablePanel;
