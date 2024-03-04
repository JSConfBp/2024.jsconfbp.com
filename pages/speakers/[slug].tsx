import Divider from "../../ui/divider";
import TalkAbstract from "../../ui/talk-abstract";
import SpeakerDetails from "../../ui/speaker-details";

import TALKS from "../../data/talks";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

import styles from './speakers.module.scss'
import classNames from "classnames";

export const getStaticPaths = (async () => {
  // We want to generate the published speaker pages at build time
  return {
    paths: TALKS.filter(t => t.published).map(t => ({ params: { slug: t.slug } })),
    // https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths#generating-paths-on-demand
    fallback: false,
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async (context) => {
  // We load the data for the speaker page at build time
  // The getStaticProps loads the full data based on the params sent by the getStaticPaths
  // https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths#where-can-i-use-getstaticpaths
  //   - getStaticPaths must be used with getStaticProps
  const data = TALKS.find(t => context.params.slug === t.slug);
  console.log(data)
  return { props: { data } }
}) satisfies GetStaticProps<{
  data: typeof TALKS[number]
}>

export default function SpeakerPage({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
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
      <Divider>
        <h1 className={classNames("text-center", styles['speaker-topic'])}>
          {talk.title}
        </h1>
      </Divider>

      <TalkAbstract>
        {talk.abstract}
      </TalkAbstract>

      <SpeakerDetails
        name={speaker.name}
        image={speaker.profilePicturePath}
        imageAlign="right"
        location={speaker.location}
        socialMediaHandle={speaker.socialMediaHandle}
        socialMediaUrl={speaker.socialMediaUrl}
        website={speaker.website}
        work={speaker.work}
        workURL={speaker.workURL}
      >
        {speaker.bio}
      </SpeakerDetails>
    </>
  )
}
