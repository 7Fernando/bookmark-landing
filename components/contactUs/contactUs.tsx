import {
  Button,
  Box,
  Flex,
  Text,
  Heading,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";
import handler from "../../pages/api/hello";

const ContactUs = () => {
  const [input, setInput] = useState("");
  const [errors, setErrors] = useState(false);
  const isError = errors;
  function validateName(value: string) {
    let error;
    const validation =
      !value || !/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+/gm.test(value);
    validation && (error = "Whoops, make sure it is an email");

    console.log(error);
    error !== undefined || error === "" ? setErrors(true) : setErrors(false);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
    validateName(String(e.target.value));
  };

  const handlerSubmit = () => {
    errors || input === ""
      ? alert("Invalid Email")
      : alert(" Submitted successfully"),
      setInput("");
  };

  return (
    <Box mb="55" bg="brand.softBlue" color="white" mt="20" pb="55" pt="55">
      {/* Desktop version */}
      <Flex display={["none", "none", "block", "block"]}>
        <Box
          width={"70vw"}
          ml="15vw"
          textAlign="center"
          justifyContent={"center"}
        >
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
                  onChange={handleInputChange}
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
                  onClick={handlerSubmit}
                  ml="5"
                >
                  {" "}
                  Contact Us
                </Box>
              </Box>
            </Flex>
          </FormControl>
        </Box>
      </Flex>

      {/* Mobile version */}
      <Flex display={["block", "block", "none", "none"]} p="35">
        <Text
          textAlign={"center"}
          fontWeight="500"
          mb="35"
          letterSpacing={"3px"}
        >
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
              onChange={handleInputChange}
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
            onClick={handlerSubmit}
          >
            {" "}
            Contact Us
          </Box>
        </FormControl>
      </Flex>
    </Box>
  );
};

export default ContactUs;
