import React from "react"
import { Heading } from "@chakra-ui/core"

export const AppHeading = ({ title, fontSize }) => {
  return (
    <Heading
      as="h1"
      fontSize={fontSize ? fontSize : ["lg", "2xl", "5xl"]}
      fontWeight="bold"
      textTransform="uppercase"
      px={2}
    >
      {title}
    </Heading>
  )
}