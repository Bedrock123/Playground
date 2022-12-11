import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import React from "react";
import {
  BuilderComponent,
  builder,
  useIsPreviewing,
  Builder,
} from "@builder.io/react";
import {
  Image as MantineImage,
  Container,
  Button,
  Box,
  Title,
  Text,
  Group,
  Flex,
  TextProps,
  MediaQuery,
  Center,
  AspectRatio,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { NextSeo } from "next-seo";
import GearPhoto from "../public/gear.jpg";
import Image from "next/image";
import { CldImage, CldOgImage, CldUploadButton } from "next-cloudinary";

// Replace with your Public API Key
builder.init("ba16820fb19645988d2e2371ef081734");
export async function getStaticProps({ params }) {
  // Fetch the first page from Builder that matches the current URL.
  // Use the `userAttributes` field for targeting content.
  // For more, see https://www.builder.io/c/docs/targeting-with-builder
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (params?.page?.join("/") || ""),
      },
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  //  Fetch all published pages for the current model.
  //  Using the `fields` option will limit the size of the response
  //  and only return the `data.url` field from the matching pages.
  const pages = await builder.getAll("page", {
    fields: "data.url", // only request the `data.url` field
    options: { noTargeting: true },
    limit: 0,
  });

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  };
}

export default function Page({ page }) {
  const router = useRouter();
  //  This flag indicates if you are viewing the page in the Builder editor.
  const isPreviewing = useIsPreviewing();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  //  Add your error page here to return if there are no matching
  //  content entries published in Builder.
  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        {/* Add any relevant SEO metadata or open graph tags here */}
        <title>{page?.data.title}</title>
        <meta name="description" content={page?.data.descripton} />
      </Head>
      <div style={{ padding: 50, textAlign: "center" }}>
        {/* Put your header or main layout here */}
        Your header
      </div>

      {/* Render the Builder page */}
      <BuilderComponent model="page" content={page} />

      <div style={{ padding: 50, textAlign: "center" }}>
        {/* Put your footer or main layout here */}
        Your footer
      </div>
    </>
  );
}

//  This is an example of registering a custom component to be used in Builder.io.
//  You would typically do this in the file where the component is defined.

const MyCustomComponent = (props) => (
  <div>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
  </div>
);

//  This is a minimal example of a custom component, you can view more complex input types here:
//  https://www.builder.io/c/docs/custom-react-components#input-types
Builder.registerComponent(MyCustomComponent, {
  name: "ExampleCustomComponent",
  inputs: [
    { name: "title", type: "string", defaultValue: "I am a React component!" },
    {
      name: "description",
      type: "string",
      defaultValue: "Find my source in /pages/[...page].js",
    },
  ],
});

// Register a custom insert menu to organize your custom componnets
// https://www.builder.io/c/docs/custom-components-visual-editor#:~:text=than%20this%20screenshot.-,organizing%20your%20components%20in%20custom%20sections,-You%20can%20create
Builder.register("insertMenu", {
  name: "My Components",
  items: [{ item: "ExampleCustomComponent", name: "My React Component" }],
});

const Hero = (props) => {
  return (
    <Container size={1024} pt={100}>
      <Title
        fz={{ base: "60px", md: "93px" }}
        lh={{ base: "60px", md: "104px" }}
        weight={700}
        order={2}
        variant="gradient"
        gradient={{ from: "yellow", to: "cyan", deg: 45 }}
        mt="0.2rem"
        sx={{
          letterSpacing: "-.025em",
          backgroundImage:
            "linear-gradient(to right, #f06844 0%, #ee4c54 25%, #d45e95 50%, #9c6ca6 75%, #6583c1 100%)",
        }}
      >
        {props.title}
      </Title>
      <Title order={3} size="h1" lh="40px" mt="sm" mb={100}>
        when you choose to check out with <br /> Apple Card Monthly
        Installments.<sup style={{ fontSize: "20px" }}>1</sup>
      </Title>
      <AspectRatio ratio={4 / 4}>
        <CldImage
          width="992"
          height="992"
          src="v1670557212/fernando-hernandez-y-vmHk8ys8c-unsplash_lawyqt.jpg"
          alt="My Image"
          autoColor={true}
          placeholder="blur"
        />
      </AspectRatio>
    </Container>
  );
};

Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    { name: "title", type: "string", defaultValue: "I am a React component!" },
    {
      name: "image",
      type: "string",
      defaultValue:
        "v1670557212/fernando-hernandez-y-vmHk8ys8c-unsplash_lawyqt.jpg",
    },
  ],
});

// Register a custom insert menu to organize your custom componnets
// https://www.builder.io/c/docs/custom-components-visual-editor#:~:text=than%20this%20screenshot.-,organizing%20your%20components%20in%20custom%20sections,-You%20can%20create
Builder.register("insertMenu", {
  name: "My Components",
  items: [{ item: "ExampleCustomComponent", name: "My React Component" }],
});
