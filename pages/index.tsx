import { createClient } from "contentful";
import {
  fetchBySlug,
  ExperienceRoot,
  createExperience,
} from "@contentful/experiences-sdk-react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_API_TOKEN!;
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!;
const environment = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT!;
const experienceTypeId = "landingPage";
const localeCode = "en-US";

const client = createClient({
  space,
  environment,
  accessToken,
  host: "preview.contentful.com",
});

function Experience({
  experienceJSON,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //Recreate the experience object from the serialized JSON
  const experience = createExperience(experienceJSON);

  return (
    <main style={{ width: "100%" }}>
      <ExperienceRoot experience={experience} locale={"en-US"} />
    </main>
  );
}

export const getServerSideProps = async ({}: GetServerSidePropsContext) => {
  const experience = await fetchBySlug({
    client,
    slug: "test", //could be fetched from the context
    experienceTypeId,
    localeCode,
  });

  //Serialize the experience manually
  const experienceJSON = JSON.stringify(experience);

  return {
    props: {
      experienceJSON: experienceJSON,
    },
  };
};

export default Experience;
