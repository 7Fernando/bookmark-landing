import {
  Box,
  Flex,
  Text,
  Heading,
  Input,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { ContactUsProps } from "./types";

const DesktopContactUs = ({
  handlerSubmit,
  isError,
  input,
  handleInputChange,
}: ContactUsProps) => {
  return (
    <Box width={"70vw"} ml="15vw" textAlign="center" justifyContent={"center"}>
      <Box mb="45">
        <Text letterSpacing={"3px"} mb="30">
          35,000+ already joined
        </Text>
        <Heading fontWeight={"500"} width="20%" ml="40%" size="md">
          Stay up-to-date with what we’re doing
        </Heading>
      </Box>

      <FormControl isInvalid={isError}>
        <Flex justifyContent={"center"}>
          <Flex flexDirection={"column"}>
            <Input
              id="email"
              type="email"
              value={input}
              onChange={(e) => handleInputChange(e)}
              bg="white"
              color="brand.veryDarkBlue"
              mb="0"
              placeholder="Enter your email address"
              width={"100%"}
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
                width={"100%"}
                pl="1%"
              >
                Whoops, make sure it is an email
              </FormErrorMessage>
            )}
          </Flex>
          <Box>
            <Box
              as="button"
              bg="brand.softRed"
              color="white"
              type="submit"
              _active={{
                bg: "brand.softRed",
                color: "white",
              }}
              _focus={{
                bg: "brand.softRed",
                color: "white",
              }}
              borderRadius={"5"}
              pt="2"
              pb="2"
              pl="6"
              pr="6"
              fontWeight={"500"}
              onClick={() => handlerSubmit()}
              ml="5"
            >
              {" "}
              Contact Us
            </Box>
          </Box>
        </Flex>
      </FormControl>
    </Box>
  );
};
export default DesktopContactUs;
