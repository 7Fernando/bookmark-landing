import { Button, Flex, Text, Heading, Box, Center } from "@chakra-ui/react";
import computerImg from "../../assets/illustration-hero.svg";
import Image from "next/image";

const DesktopHero = (): JSX.Element => {
  return (
    <>
      <Box flexWrap="wrap" w="35%">
        <Heading display={"flex"} flexWrap="wrap" p="5">
          A Simple Bookmark Manager
        </Heading>
        <Text fontSize="l" color={"brand.grayishBlue"} fontWeight={"500"} p="5">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </Text>
        <Button
          bg={"brand.softBlue"}
          variant="solid"
          color="white"
          boxShadow="xl"
          p="6"
          rounded="md"
          m="2"
          _hover={{ color: "brand.softBlue", bg: "white", border: "2px" }}
        >
          {" "}
          Get it on Chrome
        </Button>
        <Button
          bg={"white"}
          color="brand.veryDarkBlue"
          variant="solid"
          boxShadow="md"
          p="6"
          rounded="md"
          _hover={{ border: "2px" }}
        >
          {" "}
          Get it on Firefox
        </Button>
      </Box>
      <Box mt="5">
        <Image src={computerImg} alt="computerImg" />
      </Box>{" "}
    </>
  );
};
export default DesktopHero;