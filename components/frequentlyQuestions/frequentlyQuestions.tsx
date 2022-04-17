import {
  Flex,
  Box,
} from "@chakra-ui/react";
import DesktopFrequentlyQuestions from "./desktopFrequenlyQuestions";
import MobileFrequentlyQuestions from "./mobileFrequentlyQuestions";

export const FrequentlyQuestions = () => {
  return (
    <Box>
      {/* //Desktop version */}
      <Flex display={["none", "none", "block", "block"]} width="100%">
        <DesktopFrequentlyQuestions />
      </Flex>

      {/* Mobile version */}
      <Box width={"90vw"} ml="5vw" display={["block", "block", "none", "none"]}>
        <MobileFrequentlyQuestions />
      </Box>
    </Box>
  );
};

export default FrequentlyQuestions;
