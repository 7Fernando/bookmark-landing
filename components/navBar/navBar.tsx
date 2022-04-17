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

const NavBar = ():JSX.Element => {
  const [display, changeDisplay] = useState("none");
  return (
    <Flex>
      {/* Desktop */}
      <Flex
        w="90vw"
        pt="10"
        pb="10"
        justifyContent={"space-between"}
        display={["none", "none", "flex", "flex"]}
      >
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
      </Flex>

      {/* Mobile */}

      <Center
        display={["flex", "flex", "none", "none"]}
        pt="5"
        pl="5"
        pr="5"
        w="100vw"
        justifyContent={"space-between"}
      >
        <Box
          aria-label="logo2"
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
