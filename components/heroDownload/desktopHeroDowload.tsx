import { Flex, Text, Heading, Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import logoChrome from "../../assets/logo-chrome.svg";
import logoFirefox from "../../assets/logo-firefox.svg";
import logoOpera from "../../assets/logo-opera.svg";
import dots from "../../assets/bg-dots.svg";
const DesktopHeroDownload = (): JSX.Element => {
  return (
    <>
      <Center>
        <Box>
          <Heading
            as="h3"
            color="brand.veryDarkBlue"
            display={"flex"}
            textAlign="center"
            justifyContent={"center"}
            pt="5"
            fontWeight={"650"}
          >
            Download the extension
          </Heading>
          <Text
            color="brand.grayishBlue"
            display={"flex"}
            textAlign="center"
            pb="10"
            pt="5"
            pr="5"
            pl="5"
            fontWeight={"500"}
          >
            {" "}
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </Text>
          <Flex>
            <Box
              boxShadow="xl"
              pt="6"
              height={"350px"}
              width={"250px"}
              mr="8"
              ml="8"
              rounded="md"
              textAlign="center"
              mb="8"
            >
              <Box pb="5">
                <Image src={logoChrome} alt="logoChrome" />
              </Box>
              <Heading as="h4" size="sm" color="brand.veryDarkBlue">
                Add to Chrome
              </Heading>
              <Text color="brand.grayishBlue" fontWeight={"500"} p="3">
                Minimum version 62
              </Text>
              <Box
                width={"80%"}
                display="flex"
                textAlign={"center"}
                ml="10%"
                pt="5"
              >
                <Box mb="3">
                  <Image src={dots} alt="dots" />
                </Box>
              </Box>
              <Box
                as="button"
                bg="brand.softBlue"
                color="white"
                mt="3"
                _active={{
                  bg: "brand.softBlue",
                  color: "white",
                }}
                _focus={{
                  bg: "brand.softBlue",
                  color: "white",
                }}
                p="3"
                borderRadius={"5"}
                pr="5"
                pl="5"
                fontWeight={"500"}
                _hover={{
                  color: "brand.softBlue",
                  bg: "white",
                  border: "2px",
                  borderColor: "brand.softBlue",
                }}
              >
                Add & Install Extension
              </Box>
            </Box>

            <Box
              boxShadow="xl"
              pt="6"
              pb="10"
              mr="8"
              ml="8"
              rounded="md"
              textAlign="center"
              mb="8"
              my="55"
              height={"350px"}
              width={"250px"}
            >
              <Box pb="5">
                <Image src={logoFirefox} alt="logoFirefox" />
              </Box>
              <Heading as="h4" size="sm" color="brand.veryDarkBlue">
                Add to Firefox
              </Heading>
              <Text color="brand.grayishBlue" fontWeight={"500"} p="3">
                Minimum version 55
              </Text>
              <Box
                width={"80%"}
                display="flex"
                textAlign={"center"}
                ml="10%"
                pt="5"
              >
                <Box mb="3">
                  <Image src={dots} alt="dots" />
                </Box>
              </Box>
              <Box
                as="button"
                bg="brand.softBlue"
                color="white"
                mt="3"
                _active={{
                  bg: "brand.softBlue",
                  color: "white",
                }}
                _focus={{
                  bg: "brand.softBlue",
                  color: "white",
                }}
                p="3"
                borderRadius={"5"}
                pr="5"
                pl="5"
                fontWeight={"500"}
                _hover={{
                  color: "brand.softBlue",
                  bg: "white",
                  border: "2px",
                  borderColor: "brand.softBlue",
                }}
              >
                Add & Install Extension
              </Box>
            </Box>

            <Box
              boxShadow="xl"
              pt="6"
              pb="10"
              mr="8"
              ml="8"
              rounded="md"
              textAlign="center"
              my="85"
              width={"250px"}
            >
              <Box pb="5">
                <Image src={logoOpera} alt="logoOpera" />
              </Box>
              <Heading as="h4" size="sm" color="brand.veryDarkBlue">
                Add to Opera
              </Heading>
              <Text color="brand.grayishBlue" fontWeight={"500"} p="3">
                Minimum version 46
              </Text>
              <Box
                width={"80%"}
                display="flex"
                textAlign={"center"}
                ml="10%"
                pt="5"
              >
                <Box mb="3">
                  <Image src={dots} alt="dots" />
                </Box>
              </Box>
              <Box
                as="button"
                bg="brand.softBlue"
                color="white"
                mt="3"
                _active={{
                  bg: "brand.softBlue",
                  color: "white",
                }}
                _focus={{
                  bg: "brand.softBlue",
                  color: "white",
                }}
                p="3"
                borderRadius={"5"}
                pr="5"
                pl="5"
                fontWeight={"500"}
                _hover={{
                  color: "brand.softBlue",
                  bg: "white",
                  border: "2px",
                  borderColor: "brand.softBlue",
                }}
              >
                Add & Install Extension
              </Box>
            </Box>
          </Flex>
        </Box>
      </Center>
    </>
  );
};
export default DesktopHeroDownload;
