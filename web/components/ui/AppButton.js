import React from "react"
import { Button } from "@chakra-ui/core"

export const AppButton = ({ bg, borderRadius, fontSize, height, submit, title, width, mt }) => {
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
    >
      {title}
    </Button>
  )
}