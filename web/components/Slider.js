import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Image, Flex } from "@chakra-ui/core";
import { urlFor } from "./utils";

export default class SimpleSlider extends Component {
  render() {
    const { slides } = this.props;
    const settings = {
      dots: true,
      centerMode: true,
      centerPadding: "0",
      className: "center",
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "60px",
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
                className="slide-item"
                cursor="pointer"
                style={{
                  display: "flex!important",
                  marginLeft: "10px!important",
                  marginRight: "10px!important",
                  borderRadius: "15px!important",
                }}
              >
                <Image
                  src={urlFor(slide).width(470).height(256).auto("format").url()}
                  alt={slide.caption}
                />
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  bg="blue.500"
                  color="white"
                  height="72px"
                  width="100%"
                  fontSize={["lg", "sm", "md", "lg", "xl"]}
                  fontWeight="bold"
                  p="3"
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
