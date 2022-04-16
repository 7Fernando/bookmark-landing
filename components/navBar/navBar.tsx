import { useState } from "react";
import {
  Center,
  Flex,
  Button,
  IconButton,
  Divider,
  Tag,
  Avatar,
  TagLabel,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Image from "next/image";
import logo from "../../assets/logo-bookmark.svg";
import logo2 from "../../assets/logo-bookmark2.svg";
import iconTwitter from "../../assets/icon-twitter.svg";
import iconFacebook from "../../assets/icon-facebook.svg";

const NavBar = () => {
  const [display, changeDisplay] = useState("none");
  return (
    <Flex position="relative" justify="end">
      <Flex position="sticky" top="2em" ml="1rem" align="center">
        {/* Desktop */}
        {/* <Flex bg="red" mr="350">
          <Image
            aria-label="Logo Bookmark"
            src={logo2}
            onClick={() => changeDisplay("flex")}
            //   display={["flex", "flex", "none", "none"]}
            color="red"
          />
        </Flex> */}
        <Flex display={["none", "none", "flex", "flex"]} mr="20">
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={8}
              mr="8"
              w="100%"
              _hover={{ color: "brand.softRed" }}
            >
              FEATURES
            </Button>
          </NextLink>

          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={8}
              mr="8"
              w="100%"
              _hover={{ color: "brand.softRed" }}
            >
              PRICING
            </Button>
          </NextLink>

          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={8}
              mr="8"
              w="100%"
              _hover={{ color: "brand.softRed" }}
            >
              CONTACT
            </Button>
          </NextLink>

          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="outline"
              aria-label="Login"
              my={8}
              w="100%"
              bg="brand.softRed"
              color="white"
              _hover={{
                color: "brand.softRed",
                borderColor: "brand.softRed",
                bg: "white",
              }}
              pl="10"
              pr="10"
            >
              LOGIN
            </Button>
          </NextLink>
        </Flex>

        {/* Mobile */}

        {/* <Flex bg="red" mr="5" display={["flex", "flex", "none", "none"]}>
          <Image
            aria-label="Logo Bookmark"
            src={logo2}
            // onClick={() => changeDisplay("flex")}
            //   display={["flex", "flex", "none", "none"]}
            color="red"
          />
        </Flex> */}
        <Center display={["flex", "flex", "none", "none"]} pt="5" pr="5">
          <Box
            aria-label="logo2"
            mr={"125"}
            ml="15"
            onClick={() => changeDisplay("flex")}
            display={["flex", "flex", "none", "none"]}
          >
            <Image aria-label="logo2" src={logo2} />
          </Box>
          <IconButton
            aria-label="Open Menu"
            bg="white"
            size="lg"
            icon={<HamburgerIcon />}
            onClick={() => changeDisplay("flex")}
            display={["flex", "flex", "none", "none"]}
          />
        </Center>
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        color={"white"}
        textTransform={"uppercase"}
        letterSpacing="-12%"
        bgColor="brand.veryDarkBlue"
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        zIndex={20}
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="space-between" p="10">
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
      </Flex>
    </Flex>
  );
};

export default NavBar;
