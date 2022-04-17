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
const MobileHeroTabs = (): JSX.Element => {
  return (
    <>
      <Box>
        <Heading color={"brand.veryDarkBlue"} textAlign="center" p="3">
          Features
        </Heading>
        <Text
          color={"brand.grayishBlue"}
          textAlign="center"
          fontWeight={"550"}
          p="3"
        >
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </Text>

        <Box>
          <Tabs isLazy pt="8">
            <Flex justifyContent={"center"}>
              <Divider width="300px" bg="brand.grayishBlue" />
            </Flex>
            <TabList borderBottom={"white"}>
              <Flex flexDir={"column"}>
                <Flex
                  width={"100vw"}
                  textAlign={"center"}
                  justifyContent={"center"}
                >
                  <Tab
                    _selected={{
                      color: "brand.veryDarkBlue",
                      borderBottomColor: "red",
                      boxShadow: "none",
                      bg: "white",
                    }}
                    fontWeight="500"
                    p="3"
                  >
                    Simple Bookmarking
                  </Tab>
                </Flex>
                <Flex justifyContent={"center"}>
                  <Divider width="300px" bg="brand.grayishBlue" />
                </Flex>
                <Flex
                  width={"100vw"}
                  textAlign={"center"}
                  justifyContent={"center"}
                >
                  <Tab
                    _selected={{
                      color: "brand.veryDarkBlue",
                      borderBottomColor: "red",
                      boxShadow: "none",
                      bg: "white",
                    }}
                    fontWeight="500"
                    p="3"
                  >
                    Speedy Searching
                  </Tab>
                </Flex>
                <Flex justifyContent={"center"}>
                  <Divider width="300px" bg="brand.grayishBlue" />
                </Flex>
                <Flex
                  width={"100vw"}
                  textAlign={"center"}
                  justifyContent={"center"}
                >
                  <Tab
                    _selected={{
                      color: "brand.veryDarkBlue",
                      borderBottomColor: "red",
                      boxShadow: "none",
                      bg: "white",
                    }}
                    fontWeight="500"
                    p="3"
                  >
                    Easy Sharing
                  </Tab>
                </Flex>
                <Flex justifyContent={"center"}>
                  <Divider width="300px" bg="brand.grayishBlue" mb="8" />
                </Flex>
              </Flex>
            </TabList>
            <TabPanels>
              <TabPanel textAlign={"center"} justifyContent={"center"} mt="8">
                <Box mb="12">
                  <Image src={tab1} alt="tab1" />
                </Box>

                <Heading mb="5"> Bookmark in one click</Heading>
                <Text mb="5" color="brand.grayishBlue" fontWeight={"500"}>
                  {" "}
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </Text>
                <Button bg="brand.softBlue" color="white" fontWeight={"500"}>
                  More Info
                </Button>
              </TabPanel>
              <TabPanel textAlign={"center"} justifyContent={"center"} mt="8">
                <Box mb="12">
                  <Image src={tab2} alt="tab2" />
                </Box>
                <Heading mb="5">Intelligent search</Heading>
                <Text mb="5" color="brand.grayishBlue" fontWeight={"500"}>
                  {" "}
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </Text>
                <Button bg="brand.softBlue" color="white" fontWeight={"500"}>
                  More Info
                </Button>
              </TabPanel>
              <TabPanel textAlign={"center"} justifyContent={"center"} mt="8">
                <Box mb="12">
                  <Image src={tab3} alt="tab3" />
                </Box>
                <Heading mb="5">Share your bookmarks</Heading>
                <Text mb="5" color="brand.grayishBlue" fontWeight={"500"}>
                  {" "}
                  Easily share your bookmarks and collections with others.
                  Create a shareable link that you can send at the click of a
                  button.
                </Text>
                <Button bg="brand.softBlue" color="white" fontWeight={"500"}>
                  More Info
                </Button>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};
export default MobileHeroTabs;
