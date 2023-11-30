import { useEffect, useState } from "react";

export function getTrianglesWithColorAndFill(paths: string[]) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return paths.map((path, index) => {
    const color = Math.random() < 0.5 ? "var(--primary, #07BDBD)" : "var(--secondary, #9E19EF)";
    const hasFill = Math.random() < 0.5;
    return (
      <>
        {isMounted && <path key={index} d={path} stroke={color} fill={hasFill ? color : "var(--background)"} />}
      </>
    );
  });
}
