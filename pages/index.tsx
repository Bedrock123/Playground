import {
  Image,
  Container,
  Button,
  Box,
  Title,
  Text,
  Group,
  Flex,
  TextProps,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { NextSeo } from "next-seo";

function MenuLink({ link }: { link: string }) {
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
          <Image
            width={14}
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
            px="xs"
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
            px="xs"
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

function TopNavLink({ link }: { link: string }) {
  return (
    <Text
      size="xs"
      sx={{
        opacity: 0.88,
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
        backdropFilter: atTop && "saturate(180%) blur(20px)",
        transition: "all 0.2s",
      }}
    >
      <Container size={1024}>
        <Flex justify="space-between" align="center" h={52}>
          <Title size="21px" weight={600}>
            Apple Card
          </Title>
          <Group spacing="23px">
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

export default function Home() {
  return (
    <Box mih={"200vh"}>
      <NextSeo
        title="Apple Card - Monthly Installments"
        description="A short description goes here."
      />
      <TopMenu />
      <TopNav />
      <Container size={1024} pt={100}>
        <Title
          size={"93px"}
          lh="98px"
          weight={700}
          variant="gradient"
          gradient={{ from: "yellow", to: "cyan", deg: 45 }}
          mt="0.2rem"
          sx={{
            letterSpacing: "-.015em",
          }}
        >
          Pay for your new Apple products over time, interest free
        </Title>
      </Container>
    </Box>
  );
}
