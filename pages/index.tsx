import {
  Image,
  Container,
  Button,
  Box,
  Title,
  Text,
  Flex,
  TextProps,
} from "@mantine/core";

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

export default function Home() {
  return (
    <Box>
      <NextSeo
        title="Apple Card - Monthly Installments"
        description="A short description goes here."
      />
      <Box component="header" bg="black">
        <Container size={1024}>
          <Flex align="center" justify="space-between" py={9}>
            <Image
              width={17}
              height={27}
              src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
              alt="Apple Logo"
              sx={{
                opacity: 0.7,
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
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
