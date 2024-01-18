import React from "react";
import classNames from "classnames";

const Skeleton = ({ times, className }) => {
  const outerBoxClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-300",
    "rounded",
    "mb-3",
    className
  );
  const innerBoxClassNames = classNames(
    "animation-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-300",
    "via-gray-100",
    "to-gray-300"
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div className={outerBoxClassNames} key={i}>
          <div className={innerBoxClassNames}></div>
        </div>
      );
    });

  return <div className="">{boxes}</div>;
};

export default Skeleton;
