import { Box, Flex, Text, Icon, Button, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../assets/logo-bookmark.svg";
import iconFacebook from "../../assets/icon-facebook.svg";
import iconTwitter from "../../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <Box>
      {/* Desktop version  */}
      <Box
        bg="brand.veryDarkBlue"
        pt="5"
        mt="-20"
        display={["none", "none", "block", "block"]}
      >
        <Flex justifyContent={"space-between"}>
          <Box display="flex" flexDir={"row"} pl="15">
            <Box p="7">
              <Image src={logo} alt="logo"></Image>
            </Box>
            <Box color="white" fontWeight={"500"} p="5">
              <Button
                size="md"
                letterSpacing={"2px"}
                _hover={{ color: "brand.softRed" }}
                variant="ghost"
              >
                FEATURES
              </Button>
            </Box>
            <Box color="white" fontWeight={"500"} p="5">
              <Button
                size="md"
                letterSpacing={"2px"}
                _hover={{ color: "brand.softRed" }}
                variant="ghost"
              >
                PRICING
              </Button>
            </Box>
            <Box color="white" fontWeight={"500"} p="5">
              <Button
                size="md"
                letterSpacing={"2px"}
                _hover={{ color: "brand.softRed" }}
                variant="ghost"
              >
                CONTACT
              </Button>
            </Box>
          </Box>

          <Flex pr="20">
            <Box
              pb="5"
              pt="5"
              mr="5"
              _hover={{ color: "brand.softRed", fill: "red" }}
            >
              <Image src={iconFacebook} alt="logo" />
            </Box>
          
            <Box pb="5" pt="5">
              <Image src={iconTwitter} alt="logo"></Image>
            </Box>
          </Flex>
        </Flex>
      </Box>
      {/* Mobile version */}
      <Box
        bg="brand.veryDarkBlue"
        pt="20"
        pb="10"
        mt="-20"
        display={["block", "block", "none", "none"]}
      >
        <Flex flexDir={"column"} textAlign="center">
          <Box pb="5">
            <Image src={logo} alt="logo"></Image>
          </Box>
          <Box color="white" fontWeight={"500"} p="5">
            <Text size="md" letterSpacing={"2px"}>
              FEATURES
            </Text>
          </Box>
          <Box color="white" fontWeight={"500"} p="5">
            <Text size="md" letterSpacing={"2px"}>
              PRICING
            </Text>
          </Box>
          <Box color="white" fontWeight={"500"} p="5">
            <Text size="md" letterSpacing={"2px"}>
              CONTACT
            </Text>
          </Box>
          <Flex justifyContent={"center"}>
            <Box pb="5" pt="5" mr="5">
              <Image src={iconFacebook} alt="logo"></Image>
            </Box>
            <Box pb="5" pt="5">
              <Image src={iconTwitter} alt="logo"></Image>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
