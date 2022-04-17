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
import DesktopNavBar from "./desktopNavBar";
import MobileNavBar from "./mobileNavBar";
const NavBar = (): JSX.Element => {
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
        <DesktopNavBar />
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
        h="100vh "
        pos="fixed"
        top="0"
        left="0"
        zIndex={20}
        overflowY="auto"
        flexDir="column"
        
      >
        <MobileNavBar changeDisplay={changeDisplay} />
      </Flex>
    </Flex>
  );
};

export default NavBar;
