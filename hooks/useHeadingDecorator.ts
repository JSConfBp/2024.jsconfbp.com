import React, { useContext } from "react";
import classnames from "classnames";

const colors = ["purple", "orange", "lightpurple", "lightorange"];

const pickColor = (count) => {
  return colors[count % colors.length];
};

const pickSide = (count) => {
  return count % 2 > 0 ? "right" : "left";
};

export const useHeadingDecorator = () => {
  const headings = React.createContext({ h2: 0, count: 0 });
  const h = useContext(headings);

  const setClassName = (params?: { side: "left" | "right"; color: string }) =>
    classnames(
      `decorated`,
      `decorated-${params?.side || pickSide(h.count)}`,
      `decorated-${params?.color || pickColor(h.count)}`
    );

  function setDefaultClasses() {
    let className = "";

    if (h.h2 % 2 === 0) {
      className = setClassName();
      h.count += 1;
    }
    h.h2 += 1;
    return className;
  }

  function setClasses(params?: { side: "left" | "right"; color: string }) {
    const className = setClassName(params);
    h.count += 1;
    return className;
  }

  return [setDefaultClasses, setClasses];
};
