import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize as MDXSerialize } from "next-mdx-remote/serialize";
import TALKS, {
  ScheduleData,
  TalkData,
  isScheduleData,
  isTalkData,
} from "../data/talks";
import Divider from "../ui/divider";
import SocialShare from "../ui/social-share";
import Link from "next/link";

export const getStaticProps = async () => {
  const data = TALKS.filter((t) => t.published || t.scheduleOnly);

  const subTitleMdxPromises = data.map((e) =>
    MDXSerialize(e.schedule.subTitle),
  );

  const subTitleMdx = await Promise.all(subTitleMdxPromises);

  const dataWithMdx = data.map((e, ind) => ({
    ...e,
    schedule: {
      ...e.schedule,
      subTitleMdx: subTitleMdx[ind],
    },
  }));

  return {
    props: {
      data: dataWithMdx,
    },
  };
};

export default function SchedulePage({
  data,
}: {
  data: ((TalkData | ScheduleData) & {
    schedule: { subTitleMdx: MDXRemoteSerializeResult };
  })[];
}) {
  return (
    <>
      <SocialShare title="Schedule" />

      <Divider>
        <h1>Schedule</h1>
      </Divider>

      <h2 className="center-title">26 June, 2024</h2>
      <p>
        We offer{" "}
        <Link href="https://jsconfbp.com/workshops">
          several, free workshops for ticket holders
        </Link>
        . Check them out and pick one if you already have your ticket!
      </p>
      <p>
        This is the most final, and up-to date schedule for JSConf Budapest. You
        can access this schedule on this site, or:
      </p>
      <ul>
        <li>
          an{" "}
          <a href="https://schedule-2022.jsconfbp.com/">
            offline-first mobile webapp
          </a>
        </li>
        <li>
          <a href="https://docs.google.com/spreadsheets/d/1PTEAA79nUXK1ZbL5TcUIkNkVlWTKsbcmLwjKdjWqp8g/edit?usp=sharing">
            Google Spreadsheet
          </a>
        </li>
        <li>
          Calendar entries:{" "}
          <a href="https://calendar.google.com/calendar/embed?src=c_fq457u3pan7k9hn4c98q657gc4%40group.calendar.google.com&amp;ctz=Europe%2FBudapest">
            gcal
          </a>
          ,{" "}
          <a href="https://calendar.google.com/calendar/ical/c_fq457u3pan7k9hn4c98q657gc4%40group.calendar.google.com/public/basic.ics">
            ical
          </a>
        </li>
      </ul>
      <p>Note: these are possibly subject to further, small changes</p>
      <h2 className="center-title">27 June, 2024 - Day #1</h2>

      {data
        .filter((e) => e.schedule.day === 1)
        .map((e) => {
          if (isTalkData(e)) {
            return (
              <>
                <div>{e.schedule.hours}</div>
                <div>{e.talk.title}</div>
                <div>{e.slug}</div>
                <div>{e.speaker.name}</div>
              </>
            );
          } else if (isScheduleData(e)) {
            return (
              <>
                <div>{e.schedule.hours}</div>
                <div>{e.schedule.title}</div>
                {e.schedule.subTitleMdx.compiledSource.length !== 0 ? (
                  <MDXRemote {...e.schedule.subTitleMdx} />
                ) : (
                  <></>
                )}
              </>
            );
          } else {
            return <></>;
          }
        })}

      <h2 className="center-title">28 June, 2024 - Day #2</h2>

      {data
        .filter((e) => e.schedule.day === 2)
        .map((e) => {
          if (isTalkData(e)) {
            return (
              <>
                <div>{e.schedule.hours}</div>
                <div>{e.talk.title}</div>
                <div>{e.slug}</div>
                <div>{e.speaker.name}</div>
              </>
            );
          } else if (isScheduleData(e)) {
            return (
              <>
                <div>{e.schedule.hours}</div>
                <div>{e.schedule.title}</div>
                {e.schedule.subTitleMdx.compiledSource.length !== 0 ? (
                  <MDXRemote {...e.schedule.subTitleMdx} />
                ) : (
                  <></>
                )}
              </>
            );
          } else {
            return <></>;
          }
        })}

      <h2 className="center-title">29 June, 2024</h2>

      <p>
        <strong>Community Hike</strong>
      </p>
      <p>
        We plan to put together a hike in the Buda mountains, for which
        everybody is welcome to join!
      </p>
      <p>
        <a href="https://ti.to/jsconf-bp/community-trip-2022">
          You can register for the trip here.
        </a>
      </p>
    </>
  );
}
