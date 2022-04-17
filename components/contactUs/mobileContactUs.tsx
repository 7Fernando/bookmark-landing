import {
  Box,
  Text,
  Heading,
  Input,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { DesktopContactUsProps } from "./types";

const MobileContactUs = ({
  handlerSubmit,
  isError,
  input,
  handleInputChange,
}: DesktopContactUsProps) => {
  return (
    <>
      <Text textAlign={"center"} fontWeight="500" mb="35" letterSpacing={"3px"}>
        35,000+ ALREADY JOINED
      </Text>
      <Heading textAlign={"center"} size="md">
        Stay up-to-date with what we’re doing
      </Heading>

      <FormControl isInvalid={isError} textAlign={"center"}>
        <Box textAlign={"center"} pt="10">
          <Input
            id="email"
            type="email"
            value={input}
            onChange={(e) => handleInputChange(e)}
            bg="white"
            color="brand.veryDarkBlue"
            mb="0"
            placeholder="Enter your email address"
          />
          {isError && (
            <FormErrorMessage
              bg="brand.softRed"
              mt="-2"
              pb="2"
              pt="4"
              color="white"
              fontWeight={"500"}
              borderRadius="5px"
            >
              <Box ml="14">Whoops, make sure it is an email</Box>
            </FormErrorMessage>
          )}
        </Box>
        <Box
          as="button"
          bg="brand.softRed"
          color="white"
          _active={{
            bg: "brand.softRed",
            color: "white",
          }}
          _focus={{
            bg: "brand.softRed",
            color: "white",
          }}
          borderRadius={"5"}
          p="3"
          width="100%"
          fontWeight={"500"}
          mt="5"
          onClick={() => handlerSubmit()}
        >
          {" "}
          Contact Us
        </Box>
      </FormControl>
    </>
  );
};
export default MobileContactUs;
