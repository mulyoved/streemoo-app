import React from "react";
import { Button } from "@chakra-ui/core";

export const AppButton = ({
  bg,
  borderRadius,
  fontSize,
  height,
  submit,
  title,
  width,
  mt,
  isDisabled,
  ...props
}) => {
  return (
    <Button
      bg={bg}
      height={height}
      color="white"
      borderRadius={borderRadius}
      type={submit}
      width={width}
      fontSize={fontSize}
      mt={mt && mt}
      outline="none"
      isDisabled={isDisabled}
      _hover={!isDisabled && { bg: "gray.200", color: bg, fontWeight: "bolder" }}
      _focus={{ outline: 0 }}
      {...props}
    >
      {title}
    </Button>
  );
};
