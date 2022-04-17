import {
  Button,
  Flex,
  Text,
  Heading,
  Box,
  Center,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import tab1 from "../../assets/illustration-features-tab-1.svg";
import tab2 from "../../assets/illustration-features-tab-2.svg";
import tab3 from "../../assets/illustration-features-tab-3.svg";
import DesktopHeroTabs from "./desktopHeroTabs";
import MobileHeroTabs from "./mobileHeroTabs";
const HeroTabs = (): JSX.Element => {
  return (
    <Center>
      {/* Desktop version */}
      <Flex display={["none", "none", "flex", "flex"]}>
        <DesktopHeroTabs />
      </Flex>

      {/* Mobile version */}
      <Flex display={["flex", "flex", "none", "none"]}>
        <MobileHeroTabs />
      </Flex>
    </Center>
  );
};
export default HeroTabs;
