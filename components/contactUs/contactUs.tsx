import { Box, Flex } from "@chakra-ui/react";
import DesktopContactUs from "./desktopContactUs";
import MobileContactUs from "./mobileContactUs";
import { useState } from "react";

const ContactUs = (): JSX.Element => {
  const [input, setInput] = useState("");
  const [errors, setErrors] = useState(false);
  const isError = errors;
  function validateName(value: string) {
    let error;

    const validation =
      !value || !/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+/gm.test(value);

    validation && (error = "Whoops, make sure it is an email");

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
        <DesktopContactUs
          handlerSubmit={handlerSubmit}
          isError={isError}
          input={input}
          handleInputChange={handleInputChange}
        />
      </Flex>

      {/* Mobile version */}
      <Flex display={["block", "block", "none", "none"]} p="35">
        <MobileContactUs
          handlerSubmit={handlerSubmit}
          isError={isError}
          input={input}
          handleInputChange={handleInputChange}
        />
      </Flex>
    </Box>
  );
};

export default ContactUs;
