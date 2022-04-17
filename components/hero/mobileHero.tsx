import { Button, Flex, Text, Heading, Box, Center } from "@chakra-ui/react";
import computerImg from "../../assets/illustration-hero.svg";
import Image from "next/image";

const MobileHero = (): JSX.Element => {
  return (
    <>
      <Box mt="5">
        <Image src={computerImg} alt="computerImg " />
      </Box>
      <Center w="100vw" p="2.5">
        <Box flexWrap="wrap">
          <Center>
            <Box mt="8" left={"0"} right={"0"}>
              <Heading
                as="h1"
                display={"flex"}
                flexWrap="wrap"
                color={"brand.veryDarkBlue"}
                p="4"
                textAlign={"center"}
                justifyContent={"center"}
              >
                A Simple Bookmark Manager
              </Heading>

              <Text
                fontSize="l"
                color={"brand.grayishBlue"}
                fontWeight={"500"}
                textAlign={"center"}
                p="5"
              >
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </Text>
            </Box>
          </Center>
          <Center display={"flex"} textAlign={"center"}>
            <Box mt="8" left={"0"} right={"0"}>
              <Button
                bg={"brand.softBlue"}
                variant="solid"
                color="white"
                boxShadow="xl"
                p="6"
                rounded="md"
                m="2"
              >
                {" "}
                Get it on Chrome
              </Button>

              <Button
                bg={"white"}
                variant="solid"
                boxShadow="md"
                p="6"
                rounded="md"
              >
                {" "}
                Get it on Firefox
              </Button>
            </Box>
          </Center>
        </Box>
      </Center>
    </>
  );
};
export default MobileHero;
