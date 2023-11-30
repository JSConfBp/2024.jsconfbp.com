function getColor(color: "primary" | "secondary") {
  switch (color) {
    case "primary":
      return "var(--primary, #07BDBD)";
    case "secondary":
      return "var(--secondary, #9E19EF)";
  }
}

export function getTrianglesWithColorAndFill(paths: string[]) {
  return paths.map((path, index) => {
    const color = getColor(Math.random() < 0.5 ? "primary" : "secondary");
    const hasFill = Math.random() < 0.5;
    return (
      <path key={index} d={path} stroke={color} fill={hasFill ? color : "var(--background)"} />
    );
  });
}
