import React from "react";
import { Button, useTheme } from "@chakra-ui/core";
import useIsTouchDevice from "../useIsTouchDevice";

export const AppButton = ({ variantColor, title, isDisabled, ...props }) => {
  const theme = useTheme();
  const isTouch = useIsTouchDevice();

  console.log(`muly:AppButton:AppButton`, { isTouch });

  return (
    <Button
      variantColor={variantColor}
      outline="none"
      _focus={{ outline: 0 }}
      isDisabled={isDisabled}
      _hover={
        !isDisabled &&
        !isTouch && {
          bg: "gray.200",
          color: theme.colors[variantColor]["500"],
          fontWeight: "bolder",
        }
      }
      {...props}
    >
      {title}
    </Button>
  );
};

/*
      _hover={!isDisabled && { bg: "gray.200", color: bg, fontWeight: "bolder" }}

 */
