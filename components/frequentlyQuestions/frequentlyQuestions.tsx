import {
  Heading,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Center,
  Button,
} from "@chakra-ui/react";

export const FrequentlyQuestions = () => {
  return (
    <Box> 
      {/* //Desktop version */}
      <Flex display={["none", "none", "block", "block"]} width="100%">
        <Box width={"40vw"} ml="30vw">
          <Center>
            <Heading pb="5" textAlign={"center"} color="brand.veryDarkBlue">
              Frequently Asked Questions
            </Heading>
          </Center>
          <Center width={"95%"} ml="2.5%">
            <Text
              pb="5"
              textAlign={"center"}
              color="brand.grayishBlue"
              fontWeight={"500"}
            >
              Here are some of our FAQs. If you have any other questions you’d
              like answered please feel free to email us.
            </Text>
          </Center>
          <Box>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ color: "brand.softRed" }}>
                    <Box
                      flex="1"
                      textAlign="left"
                      color="brand.veryDarkBlue"
                      fontWeight={"500"}
                      _hover={{ color: "brand.softRed" }}
                    >
                      What is Bookmark?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  color="brand.grayishBlue"
                  fontWeight={"500"}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  tincidunt justo eget ultricies fringilla. Phasellus blandit
                  ipsum quis quam ornare mattis.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ color: "brand.softRed" }}>
                    <Box
                      flex="1"
                      textAlign="left"
                      color="brand.veryDarkBlue"
                      fontWeight={"500"}
                      _hover={{ color: "brand.softRed" }}
                    >
                      How can I request a new browser?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  color="brand.grayishBlue"
                  fontWeight={"500"}
                >
                  Vivamus luctus eros aliquet convallis ultricies. Mauris augue
                  massa, ultricies non ligula. Suspendisse imperdiet. Vivamus
                  luctus eros aliquet convallis ultricies. Mauris augue massa,
                  ultricies non ligula. Suspendisse imperdie tVivamus luctus
                  eros aliquet convallis ultricies. Mauris augue massa,
                  ultricies non ligula. Suspendisse imperdiet.F
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ color: "brand.softRed" }}>
                    <Box
                      flex="1"
                      textAlign="left"
                      color="brand.veryDarkBlue"
                      fontWeight={"500"}
                      _hover={{ color: "brand.softRed" }}
                    >
                      Is there a mobile app?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  color="brand.grayishBlue"
                  fontWeight={"500"}
                >
                  Sed consectetur quam id neque fermentum accumsan. Praesent
                  luctus vestibulum dolor, ut condimentum urna vulputate eget.
                  Cras in ligula quis est pharetra mattis sit amet pharetra
                  purus. Sed sollicitudin ex et ultricies bibendum.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ color: "brand.softRed" }}>
                    <Box
                      flex="1"
                      textAlign="left"
                      color="brand.veryDarkBlue"
                      fontWeight={"500"}
                      _hover={{ color: "brand.softRed" }}
                    >
                      What about other Chromium browsers?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  color="brand.grayishBlue"
                  fontWeight={"500"}
                >
                  Integer condimentum ipsum id imperdiet finibus. Vivamus in
                  placerat mi, at euismod dui. Aliquam vitae neque eget nisl
                  gravida pellentesque non ut velit.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Center m="12">
              <Box
                as="button"
                bg="brand.softBlue"
                color="white"
                _active={{
                  bg: "brand.softBlue",
                  color: "white",
                }}
                _focus={{
                  bg: "brand.softBlue",
                  color: "white",
                }}
                borderRadius={"5"}
                p="3"
                pr="5"
                pl="5"
                fontWeight={"500"}
              >
                {" "}
                More Info
              </Box>
            </Center>
          </Box>
        </Box>
      </Flex>

      {/* Mobile version */}

      <Box width={"90vw"} ml="5vw" display={["block", "block", "none", "none"]}>
        <Box>
          <Center>
            <Heading pb="5" textAlign={"center"} color="brand.veryDarkBlue">
              Frequently Asked Questions
            </Heading>
          </Center>
          <Center>
            <Text
              pb="10"
              textAlign={"center"}
              color="brand.grayishBlue"
              fontWeight={"500"}
            >
              Here are some of our FAQs. If you have any other questions you’d
              like answered please feel free to email us.
            </Text>
          </Center>
          <Box>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ color: "brand.softRed" }}>
                    <Box
                      flex="1"
                      textAlign="left"
                      color="brand.veryDarkBlue"
                      fontWeight={"500"}
                    >
                      What is Bookmark?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box color="brand.grayishBlue" fontWeight={"500"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce tincidunt justo eget ultricies fringilla. Phasellus
                    blandit ipsum quis quam ornare mattis.
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ color: "brand.softRed" }}>
                    <Box
                      flex="1"
                      textAlign="left"
                      color="brand.veryDarkBlue"
                      fontWeight={"500"}
                    >
                      How can I request a new browser?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box color="brand.grayishBlue" fontWeight={"500"}>
                    Vivamus luctus eros aliquet convallis ultricies. Mauris
                    augue massa, ultricies non ligula. Suspendisse imperdiet.
                    Vivamus luctus eros aliquet convallis ultricies. Mauris
                    augue massa, ultricies non ligula. Suspendisse imperdie
                    tVivamus luctus eros aliquet convallis ultricies. Mauris
                    augue massa, ultricies non ligula. Suspendisse imperdiet.F
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ color: "brand.softRed" }}>
                    <Box
                      flex="1"
                      textAlign="left"
                      color="brand.veryDarkBlue"
                      fontWeight={"500"}
                    >
                      Is there a mobile app?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box color="brand.grayishBlue" fontWeight={"500"}>
                    Sed consectetur quam id neque fermentum accumsan. Praesent
                    luctus vestibulum dolor, ut condimentum urna vulputate eget.
                    Cras in ligula quis est pharetra mattis sit amet pharetra
                    purus. Sed sollicitudin ex et ultricies bibendum.
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ color: "brand.softRed" }}>
                    <Box
                      flex="1"
                      textAlign="left"
                      color="brand.veryDarkBlue"
                      fontWeight={"500"}
                    >
                      What about other Chromium browsers?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box color="brand.grayishBlue" fontWeight={"500"}>
                    Integer condimentum ipsum id imperdiet finibus. Vivamus in
                    placerat mi, at euismod dui. Aliquam vitae neque eget nisl
                    gravida pellentesque non ut velit.
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Center m="12">
              <Box
                as="button"
                bg="brand.softBlue"
                color="white"
                _active={{
                  bg: "brand.softBlue",
                  color: "white",
                }}
                _focus={{
                  bg: "brand.softBlue",
                  color: "white",
                }}
                borderRadius={"5"}
                p="3"
                pr="5"
                pl="5"
                fontWeight={"500"}
              >
                {" "}
                More Info
              </Box>
            </Center>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FrequentlyQuestions;
