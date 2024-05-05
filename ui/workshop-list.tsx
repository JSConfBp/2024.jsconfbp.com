import Link from "next/link";
import styles from "./workshop-list.module.scss";

import WORKSHOPS from "../data/workshops";
import Polygons from "./polygons";
import { SeatCount } from "./seat-count";

type WorkshopListProps = {
  workshops: typeof WORKSHOPS;
};

function WorkshopList({ workshops }: WorkshopListProps) {
  return (
    <div className={`md-row mb-1 mt-4 ${styles["workshop-list"]}`}>
      {workshops.map(({ slug, title, summary, sponsor }, i) => {
        return (
          <div className={`${styles["workshop-list-item"]}`} key={slug}>
            <h3 className={styles.title}>
              <Link href={`/workshops/${slug}`}>{title}</Link>
            </h3>

            <p className={styles.summary}>{summary}</p>

            <Link
              href={`/workshops/${slug}`}
              className={styles["metadata-link"]}
            >
              <div className={styles["metadata"]}>
                <span className={styles.date}>June 26th</span>
                <span className={styles.seats}>
                  Seats: <SeatCount workshopKey={sponsor.name.toUpperCase()} />{" "}
                </span>
                <Polygons type="workshop-decor" className={styles.decor} />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default WorkshopList;
