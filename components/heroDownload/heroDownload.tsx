import { Flex, Box } from "@chakra-ui/react";
import DesktopHeroDownload from "./desktopHeroDowload";
import MobileHeroDownload from "./mobileHeroDownload";

const HeroDownload = (): JSX.Element => {
  return (
    <Box>
      {/* Desktop version */}
      <Flex display={["none", "none", "flex", "flex"]}>
        <DesktopHeroDownload />
      </Flex>

      {/* Mobile version */}
      <Flex display={["flex", "flex", "none", "none"]}>
        <MobileHeroDownload />
      </Flex>
    </Box>
  );
};
export default HeroDownload;
