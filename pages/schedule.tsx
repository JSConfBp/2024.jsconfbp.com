import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize as MDXSerialize } from "next-mdx-remote/serialize";
import TALKS, {
  ScheduleData,
  TalkData,
  isScheduleData,
  isTalkData,
} from "../data/talks";

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
      <h1>day 1</h1>
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
      <h1>day 2</h1>
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
    </>
  );
}
