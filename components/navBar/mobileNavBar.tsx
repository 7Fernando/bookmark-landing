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
import { NavBarProps } from "./types";
const MobileNavBar = ({changeDisplay}: NavBarProps): JSX.Element => {
  return (
    <>
      <Flex justify="space-between" p="15">
        <Flex justify="flex-start">
          <Tag size="sm" colorScheme="transparent" borderRadius="full">
            <Image src={logo} alt="photo" />
          </Tag>
        </Flex>

        <Flex justify="flex-end">
          <IconButton
            aria-label="Open Menu"
            size="sm"
            icon={<CloseIcon color="white" />}
            bg={"#252b46"}
            onClick={() => changeDisplay("none")}
          />
        </Flex>
      </Flex>
      <Flex flexDir="column" align="center" p="10" fontWeight="bold">
        <NextLink href="/" passHref>
          <Button
            as="a"
            variant="ghost"
            aria-label="Home"
            my={5}
            w="100%"
            letterSpacing={2}
          >
            Features
          </Button>
        </NextLink>
        <Divider />
        <NextLink href="/" passHref>
          <Button
            as="a"
            variant="ghost"
            aria-label="About"
            my={5}
            w="100%"
            letterSpacing={2}
          >
            Pricing
          </Button>
        </NextLink>
        <Divider />
        <NextLink href="/" passHref>
          <Button
            as="a"
            variant="ghost"
            aria-label="Contact"
            my={5}
            w="100%"
            letterSpacing={2}
          >
            Contact
          </Button>
        </NextLink>
        <Divider />
        <NextLink href="/" passHref>
          <Button as="a" variant="outline" aria-label="Login" my={5} w="100%">
            Login
          </Button>
        </NextLink>
      </Flex>

      <Flex
        justifyContent={"space-around"}
        mt="100"
        mb="10"
        width={"50%"}
        ml="25%"
      >
        <Image src={iconFacebook} alt="iconFacebook" />
        <Image src={iconTwitter} alt="iconTwitter" />
      </Flex>
    </>
  );
};
export default MobileNavBar;
