import { Box } from "@chakra-ui/react";
import DesktopFooter from "./desktopFooter";
import MobileFooter from "./mobileFooter";

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
        <DesktopFooter/>
      </Box>
      
      {/* Mobile version */}
      <Box
        bg="brand.veryDarkBlue"
        pt="20"
        pb="10"
        mt="-20"
        display={["block", "block", "none", "none"]}
      >
        <MobileFooter/>
      </Box>
    </Box>
  );
};

export default Footer;
