import Divider from "../../ui/divider";
import TalkAbstract from "../../ui/talk-abstract";
import SpeakerDetails from "../../ui/speaker-details";

import TALKS, { TalkData } from "../../data/talks";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

import styles from "./speakers.module.scss";
import classNames from "classnames";
import SocialShare from "../../ui/social-share";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize as MDXSerialize } from "next-mdx-remote/serialize";

export const getStaticPaths = (async () => {
  // We want to generate the published speaker pages at build time
  return {
    paths: TALKS.filter((t) => t.published).map((t) => ({
      params: { slug: t.slug },
    })),
    // https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths#generating-paths-on-demand
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  // We load the data for the speaker page at build time
  // The getStaticProps loads the full data based on the params sent by the getStaticPaths
  // https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths#where-can-i-use-getstaticpaths
  //   - getStaticPaths must be used with getStaticProps
  const data = TALKS.find(
    (t) => t.published && context.params.slug === t.slug,
  ) as TalkData; // we have 2 shapes of data TalkData and ScheduleData, and all published talks have the shape of TalkData

  const abstractMdxSerialized = await MDXSerialize(data.talk.abstract);
  const bioMdxSerialized = await MDXSerialize(data.speaker.bio);

  return {
    props: {
      data: {
        ...data,
        speaker: {
          ...data.speaker,
          bioMdxSerialized,
        },
        talk: {
          ...data.talk,
          abstractMdxSerialized,
        },
      },
    },
  };
}) satisfies GetStaticProps<{
  data: TalkData & {
    speaker: {
      bioMdxSerialized: MDXRemoteSerializeResult;
    };
    talk: {
      abstractMdxSerialized: MDXRemoteSerializeResult;
    };
  };
}>;

export default function SpeakerPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  // not sure why we need this, but in dev mode, data is often undefined
  if (!data) return null;

  const { published, speaker, talk } = data;

  if (!published) {
    router.push("/404");
    return null;
  }

  return (
    <>
      <SocialShare
        title={`${talk.title} by ${speaker.name}`}
        socialShareImage={talk.socialShareImage}
      />
      <Divider>
        <h1 className={classNames("text-center", styles["speaker-topic"])}>
          {talk.title}
        </h1>
      </Divider>

      <TalkAbstract>
        <MDXRemote {...talk.abstractMdxSerialized} />
      </TalkAbstract>

      <SpeakerDetails
        name={speaker.name}
        image={speaker.profilePicturePath}
        imageAlign={speaker.imageAlign as "left" | "right"}
        location={speaker.location}
        socialMediaHandle={speaker.socialMediaHandle}
        socialMediaUrl={speaker.socialMediaUrl}
        website={speaker.website}
        work={speaker.work}
        workURL={speaker.workURL}
      >
        <MDXRemote {...speaker.bioMdxSerialized} />
      </SpeakerDetails>
    </>
  );
}
