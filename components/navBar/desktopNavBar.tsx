import { useState } from "react";
import {
  Center,
  Flex,
  Button,
  IconButton,
  Divider,
  Tag,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Image from "next/image";
import logo from "../../assets/logo-bookmark.svg";
import logo2 from "../../assets/logo-bookmark2.svg";
import iconTwitter from "../../assets/icon-twitter.svg";
import iconFacebook from "../../assets/icon-facebook.svg";

const DesktopNavBar = (): JSX.Element => {
  return (
    <>
      <Tag size="sm" colorScheme="transparent" borderRadius="full">
        <Image src={logo2} alt="photo" />
      </Tag>
      <Box>
        <Button variant={"ghost"} _hover={{ color: "brand.softRed" }}>
          Features
        </Button>
        <Button variant={"ghost"} _hover={{ color: "brand.softRed" }}>
          Pricing
        </Button>
        <Button variant={"ghost"} _hover={{ color: "brand.softRed" }}>
          Contact
        </Button>

        <Button
          variant={"solid"}
          bg="brand.softRed"
          color="white"
          w="110px"
          _hover={{
            bg: "white",
            color: "brand.softRed",
            borderColor: "brand.softRed",
            border: "2px",
          }}
          fontWeight="500"
        >
          Login
        </Button>
      </Box>
    </>
  );
};
export default DesktopNavBar;
