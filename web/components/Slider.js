import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Image, Flex } from "@chakra-ui/core";
import { urlFor } from "./utils";

export default class SimpleSlider extends Component {
  render() {
    const { slides } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          {slides.map((slide, idx) => {
            return (
              <Box
                key={idx}
                style={{
                  display: "flex!important",
                  marginLeft: "10px!important",
                  marginRight: "10px!important",
                }}
              >
                <Image src={urlFor(slide)} alt={slide.caption} />
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  bg="blue.500"
                  color="white"
                  height="72px"
                  width="100%"
                  fontSize={["lg", "sm", "md", "lg", "xl"]}
                  fontWeight="bold"
                >
                  {slide.caption}
                </Flex>
              </Box>
            );
          })}
        </Slider>
      </div>
    );
  }
}
