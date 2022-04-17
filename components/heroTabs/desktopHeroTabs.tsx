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
const DesktopHeroTabs = (): JSX.Element => {
  return (
    <>
      <Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          color="brand.veryDarkBlue"
          mb="5"
        >
          <Heading fontWeight="600">Features</Heading>
        </Box>
        <Center>
          <Box
            display={"flex"}
            alignItems={"flex-end"}
            textAlign="center"
            width={"450px"}
          >
            <Text color={"brand.grayishBlue"}>
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </Text>
          </Box>
        </Center>
        <Box>
          <Tabs isLazy>
            <TabList
              display={"flex"}
              justifyContent="center"
              mt="8"
              width={"50"}
            >
              <Flex textAlign={"center"}>
                <Tab
                  _selected={{
                    color: "brand.veryDarkBlue",
                    borderBottomColor: "brand.softRed",
                    boxShadow: "none",
                    bg: "white",
                  }}
                  _hover={{ color: "brand.softRed" }}
                  fontWeight="500"
                >
                  Simple Bookmarking
                </Tab>
                <Tab
                  _selected={{
                    color: "brand.veryDarkBlue",
                    borderBottomColor: "brand.softRed",
                    boxShadow: "none",
                    bg: "white",
                  }}
                  fontWeight="500"
                  _hover={{ color: "brand.softRed" }}
                >
                  Speedy Searching
                </Tab>
                <Tab
                  _selected={{
                    color: "brand.veryDarkBlue",
                    borderBottomColor: "brand.softRed",
                    boxShadow: "none",
                    bg: "white",
                  }}
                  fontWeight="500"
                  _hover={{ color: "brand.softRed" }}
                >
                  Easy Sharing
                </Tab>
              </Flex>
            </TabList>
            <TabPanels>
              <TabPanel textAlign={"center"} justifyContent={"center"} mt="8">
                <Center>
                  <Flex>
                    <Box mb="12">
                      <Image src={tab1} alt="tab1" />
                    </Box>
                    <Box textAlign={"justify"} width="550px" pl="100">
                      <Heading mb="5"> Bookmark in one click</Heading>
                      <Text mb="5" color="brand.grayishBlue" fontWeight={"500"}>
                        {" "}
                        Organize your bookmarks however you like. Our simple
                        drag-and-drop interface gives you complete control over
                        how you manage your favourite sites.
                      </Text>
                      <Button
                        bg="brand.softBlue"
                        color="white"
                        fontWeight={"500"}
                      >
                        More Info
                      </Button>
                    </Box>
                  </Flex>
                </Center>
              </TabPanel>

              <TabPanel textAlign={"center"} justifyContent={"center"} mt="8">
                <Flex>
                  <Box mb="12">
                    <Image src={tab2} alt="tab1" />
                  </Box>
                  <Box textAlign={"justify"} width="550px" pl="100">
                    <Heading mb="5"> Intelligent search</Heading>
                    <Text mb="5" color="brand.grayishBlue" fontWeight={"500"}>
                      {" "}
                      Our powerful search feature will help you find saved sites
                      in no time at all. No need to trawl through all of your
                      bookmarks.
                    </Text>
                    <Button
                      bg="brand.softBlue"
                      color="white"
                      fontWeight={"500"}
                    >
                      More Info
                    </Button>
                  </Box>
                </Flex>
              </TabPanel>
              <TabPanel textAlign={"center"} justifyContent={"center"} mt="8">
                <Flex>
                  <Box mb="12">
                    <Image src={tab3} alt="tab1" />
                  </Box>
                  <Box textAlign={"justify"} width="550px" pl="100">
                    <Heading mb="5">Share your bookmarks</Heading>
                    <Text mb="5" color="brand.grayishBlue" fontWeight={"500"}>
                      {" "}
                      Easily share your bookmarks and collections with others.
                      Create a shareable link that you can send at the click of
                      a button.
                    </Text>
                    <Button
                      bg="brand.softBlue"
                      color="white"
                      fontWeight={"500"}
                    >
                      More Info
                    </Button>
                  </Box>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};
export default DesktopHeroTabs;
