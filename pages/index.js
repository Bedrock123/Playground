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
function MenuLink({ link }) {
  return (
    <Text
      color="white"
      size="xs"
      sx={{
        opacity: 0.7,
        cursor: "pointer",
        transition: "opacity 0.2s",
        "&:hover": {
          opacity: 1,
        },
      }}
    >
      {link}
    </Text>
  );
}

function TopMenu() {
  return (
    <Box component="header" bg="black">
      <Container size={1024} h={44}>
        <Flex align="center" justify="space-between" py={0}>
          <MantineImage
            width={14}
            height={44}
            src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
            alt="Apple Logo"
            sx={{
              opacity: 0.7,
              cursor: "pointer",
              transition: "opacity 0.2s",
              "&:hover": {
                opacity: 1,
              },
            }}
          />
          <MenuLink link="Store" />
          <MenuLink link="Mac" />
          <MenuLink link="iPad" />
          <MenuLink link="iPhone" />
          <MenuLink link="Watch" />
          <MenuLink link="AirPods" />
          <MenuLink link="TV & Home" />
          <MenuLink link="Only on Apple" />
          <MenuLink link="Accesories" />
          <MenuLink link="Support" />
          <Box
            px={4}
            sx={{
              backgroundImage:
                "url(https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_large.svg)",
              width: "15px",
              backgroundRepeat: "no-repeat",

              backgroundSize: "15px 88px",
              height: "44px",
              opacity: 0.7,
              cursor: "pointer",
              transition: "opacity 0.2s",
              "&:hover": {
                opacity: 1,
              },
            }}
          />
          <Box
            px={4}
            sx={{
              backgroundImage:
                "url(https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg)",
              width: "15px",
              backgroundRepeat: "no-repeat",

              backgroundSize: "13px 44px",
              height: "44px",
              opacity: 0.7,
              cursor: "pointer",
              transition: "opacity 0.2s",
              "&:hover": {
                opacity: 1,
              },
            }}
          />
        </Flex>
      </Container>
    </Box>
  );
}

function TopNavLink({ link }) {
  return (
    <Text
      size="xs"
      sx={{
        opacity: 0.98,
        cursor: "pointer",
        fontSize: "12px",
        transition: "all 0.2s",
        "&:hover": {
          transition: "all 0.2s",
          opacity: 1,
          color: "#06c",
        },
      }}
    >
      {link}
    </Text>
  );
}

function TopNav() {
  const [scroll, scrollTo] = useWindowScroll();
  const atTop = scroll.y > 44;

  return (
    <Box
      h={52}
      component="nav"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        backgroundColor: atTop ? "rgba(255,255,255,0.72)" : "#f5f5f7",
        borderBottom: atTop ? "1px solid #d7d7d7" : "1px solid #f5f5f7",
        transition: "all 0.2s",
        backdropFilter: atTop ? "saturate(180%) blur(20px)" : "",
      }}
    >
      <Container size={1024}>
        <Flex justify="space-between" align="center" h={52}>
          <Title size="21px" weight={600}>
            Apple Card
          </Title>
          <Group spacing={23}>
            <TopNavLink link="Overview" />
            <TopNavLink link="Features" />
            <TopNavLink link="Family" />
            <TopNavLink link="Monthly Installments" />
            <TopNavLink link="How-To-Videos" />
            <Button size="xs" radius="xl" color="dark" compact px="xs">
              Apply now
            </Button>
          </Group>
        </Flex>
      </Container>
    </Box>
  );
}

const Hero = ({ title, image }) => {
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
        {title}
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

export default function Home({ posts, image }) {
  return (
    <Box mih={"200vh"}>
      <CldOgImage
        src="v1670557212/fernando-hernandez-y-vmHk8ys8c-unsplash_lawyqt.jpg"
        tint="100:0000FF:0p:FF1493:100p"
        blur="2000"
        overlays={[
          {
            text: {
              color: "white",
              fontFamily: "Source Sans Pro",
              fontSize: 200,
              fontWeight: "bold",
              text: "Next Cloudinary",
            },
          },
        ]}
        alt="Next Cloudinary over picture of a turtle on top of a galaxy"
        twitterTitle="Next Cloudinary"
      />
      <NextSeo
        title="Apple Card - Monthly Installments"
        description="A short description goes here."
      />
      <TopMenu />
      <TopNav />
      <Hero title={posts[0].title} image={image} />
    </Box>
  );
}
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
// Get static props
export async function getStaticProps() {
  // Get a list of news articles from a free API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // Get rando image from unsplash
  const res2 = await fetch(
    "https://source.unsplash.com/random/1024x768?nature"
  );
  const image = await res2.url;

  console.log("SERVER SIDE RENDERING");
  return {
    props: {
      posts: [posts[Math.floor(Math.random() * posts.length)]],
      image: image,
    },
    revalidate: 10, // In seconds
  };
}
