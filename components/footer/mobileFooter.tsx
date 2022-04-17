import { Box, Flex, Text, Icon, Button, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../assets/logo-bookmark.svg";
import iconFacebook from "../../assets/icon-facebook.svg";
import iconTwitter from "../../assets/icon-twitter.svg";

const MobileFooter = () => {
  return (
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
  );
};

export default MobileFooter;