import {
  Container,
  Button,
  Box,
  Title,
  Text,
  AspectRatio,
} from "@mantine/core";
import owlPhoto from "../public/owl.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <Box h="100%" w="100%">
      <Container mt="xl" size="sm" py="xl">
        <Title size="h2" mb="lg">
          To Whom To May Concern.
        </Title>
        <Text size="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          magna massa, bibendum a condimentum in, mollis at massa. Sed eget
          ligula placerat, tempus massa vitae, consectetur eros. Etiam lacinia
          rutrum diam sed condimentum. Fusce a risus lorem. Sed faucibus feugiat
          mauris, a vehicula eros congue cursus. Donec porttitor non justo vel
          ornare. Vestibulum rhoncus dui ac aliquet maximus. Praesent luctus
          justo vel iaculis interdum. Phasellus luctus ullamcorper molestie.
          Vivamus vel nisi eu massa faucibus accumsan. Sed tristique tellus
          nibh, quis lobortis dolor pellentesque ac. Morbi pretium sem ex. Nulla
          volutpat, ex ut suscipit accumsan, lacus leo interdum felis, ac cursus
          quam mauris in ex. Quisque semper leo justo, et maximus nibh interdum
          vel. Sed fermentum tristique felis vitae finibus. Vestibulum porta
          risus non ligula rhoncus varius. Sed ut libero quis nulla mollis
          ullamcorper non ut ex. Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas. Nullam sit amet pretium
          enim. Vivamus tempus laoreet tristique.
          <br />
          <br />
          <AspectRatio ratio={16 / 11}>
            <Image
              src={owlPhoto}
              alt="Photo of an owl on a branch"
              placeholder="blur"
              draggable="false"
              fill
              quality={70}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </AspectRatio>
          <br />
          <br />
          Fusce consectetur dignissim augue, et mollis elit efficitur at.
          Maecenas cursus nisl venenatis nisi convallis, vel euismod lectus
          pellentesque. Sed dictum mauris vitae tristique hendrerit. Vestibulum
          mattis eros vel neque elementum feugiat. Sed id sagittis ipsum.
          Praesent eget faucibus mauris. Nunc at dolor semper nunc rutrum
          imperdiet et ut erat. Phasellus ex purus, ullamcorper nec dignissim
          id, lobortis ac justo. Integer cursus lorem felis, non faucibus dolor
          tincidunt sit amet. Quisque vestibulum sollicitudin pretium. Quisque
          in dapibus sem. Praesent ut egestas tortor. Fusce nec dui non augue
          porta pharetra vel at dolor. Curabitur suscipit leo elit, et congue
          sem venenatis id. Nullam vitae ante sem. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Praesent ac dapibus justo. Donec a orci ipsum. Nulla massa neque,
          cursus quis convallis in, dictum at eros. Suspendisse imperdiet
          fringilla nisl, imperdiet maximus justo venenatis at.
          <br />
          <br />
          Suspendisse quis ultricies mauris. Curabitur ac purus at mi egestas
          blandit. Cras in erat quis erat lacinia hendrerit ut sit amet erat.
          Nunc quis lacinia dui. Donec sit amet turpis et ante faucibus aliquet
          eu eu justo. Sed sed posuere sapien. Fusce feugiat, augue sed dapibus
          pellentesque, tortor neque tincidunt nulla, vel mollis nunc magna non
          enim. Vestibulum nec viverra nisi. Mauris ac vulputate ligula. Morbi
          in maximus urna. Morbi faucibus nisl quis dui finibus fringilla.
          Vivamus vel mauris nec magna ultricies dignissim vel eget tortor. Sed
          sollicitudin lectus lorem, sit amet tincidunt odio tempor ac. Fusce
          aliquet efficitur consectetur. Aliquam gravida purus nibh, ac egestas
          nisl mattis sit amet. Vestibulum sit amet dignissim mi, nec elementum
          purus. Morbi tempus volutpat justo
        </Text>
        <br />
        <Text italic={true}>- Zachary Bedrosian</Text>
      </Container>
    </Box>
  );
}
