import type { NextPage } from "next";
import Head from "next/head";
import { Box, Center } from "@chakra-ui/react";
import NavBar from "../components/navBar/navBar";
import HeroTabs from "../components/heroTabs/heroTabs";
import Hero from "../components/hero/hero";
import HeroDownload from "../components/heroDownload/heroDownload";
import FrequentlyQuestions from "../components/frequentlyQuestions/frequentlyQuestions";
import Footer from "../components/footer/footer";
import ContactUs from "../components/contactUs/contactUs";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center >
        <NavBar />
      </Center>
      <Center p={"5"}>
        <Box>
          <Hero />
        </Box>
      </Center>
      <Center>
        <Box>
          <HeroTabs />
        </Box>
      </Center>
      <Center p={"5"}>
        <Box>
          <HeroDownload />
        </Box>
      </Center>

      <Box >
        <FrequentlyQuestions />
      </Box>
      <Box >
        <ContactUs />
      </Box>
      <Box >
        <Footer />
      </Box>
      

      
    </div>
  );
};

export default Home;
