import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import styles from "./speaker-picture.module.scss";
import { ColorNames } from "../pages/_app";
import Polygons from "./polygons";
import { useEffect, useState } from "react";

type SpeakerPictureProps = {
  image?: StaticImageData | string;
  color?: ColorNames;
  align?: "left" | "right";
  decorationAlign?: "left" | "right";
  alt?: string;
  className?: string;
  [key: string]: any;
};

const breakpoints = [
  [0, 374],
  [375, 799],
  [800, 1023],
  [1024, 1279],
  [1280, 1919],
  [1920, Infinity],
];

function SpeakerPicture({
  image = undefined,
  color = "primary",
  align = "left",
  decorationAlign = "right",
  alt = "",
  className = "",
  ...props
}: SpeakerPictureProps) {
  const [lowerBreakpoint, setLowerBreakpoint] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      const currentBreakpointRange = breakpoints.find(
        (b) => window.innerWidth >= b[0] && window.innerWidth <= b[1],
      );
      setLowerBreakpoint(currentBreakpointRange[0]);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (typeof image === "undefined") {
    return null;
  }

  return (
    <div
      className={classNames(
        styles.image,
        styles[`image-${align}`],
        className,
        "x-container",
      )}
    >
      <Image src={image} alt={alt} fill />
      <Polygons
        type={`speaker-background-${align}`}
        className={styles[`background-${align}`]}
      />
      <Polygons
        type="team-image-decoration"
        breakpoint={lowerBreakpoint}
        className={styles[`decoration-${decorationAlign}`]}
      />
    </div>
  );
}

export default SpeakerPicture;
