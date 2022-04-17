import { Flex } from "@chakra-ui/react";
import DesktopHero from "./desktopHero";
import MobileHero from "./mobileHero";
const Hero = (): JSX.Element => {
  return (
    <Flex>
      {/* Desktop version */}
      <Flex
        // minW={"900px"}
        display={["none", "none", "flex", "flex"]}
        justifyContent="space-between"
      >
        <DesktopHero />
      </Flex>

      {/* Mobile version */}
      <Flex
        display={["flex", "flex", "none", "none"]}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <MobileHero />
      </Flex>
    </Flex>
  );
};
export default Hero;
