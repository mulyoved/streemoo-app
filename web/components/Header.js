import React, { useRef, useState } from "react";
import { Box, Flex, Image, Link, PseudoBox } from "@chakra-ui/core";
import NextLink from "next/link";
import SVG from "react-inlinesvg";
import styles from "../components-old/Header.module.css";
import { useRouter } from "next/router";
import useOutsideClick from "@rooks/use-outside-click";

const links = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Artists & Shows", link: "/artists_shows" },
  { id: 3, title: "About", link: "/about" },
];

export const Header = ({ logo }) => {
  const pRef = useRef();
  const [show, setShow] = useState(false);
  const handleToggleMenu = () => setShow(!show);
  const router = useRouter();
  useOutsideClick(pRef, () => {
    setShow(false);
  });

  const renderLogo = (logo) => {
    if (!logo || !logo.asset) {
      return null;
    }

    if (logo.asset.extension === "svg") {
      return <SVG src={logo.asset.url} className={styles.logo} />;
    }

    return <img src={logo.asset.url} alt={logo.title} className={styles.logo} />;
  };

  return (
    <Flex
      ref={pRef}
      align="center"
      justify="space-between"
      wrap="wrap"
      py="0.7rem"
      paddingLeft={["16px", "16px", "60px", "60px"]}
      paddingRight="0.7rem"
      color="white"
      top={0}
      style={{
        background: "linear-gradient(180deg,rgba(255,255,255,1), rgba(255,255,255,0))",
      }}
      width="100%"
      position="fixed"
      zIndex={100}
    >
      <NextLink
        href={{
          pathname: "/LandingPage",
          query: {
            slug: "/",
          },
        }}
        as="/"
      >
        <Link to="/" width={["117px", "117px", "157px", "157px"]}>
          {renderLogo(logo)}
        </Link>
      </NextLink>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggleMenu}>
        <svg fill="white" width="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        as="nav"
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        justifyContent="flex-end"
        flexGrow={1}
        bg={{ sm: "rgba(255, 251, 251, 0.7)", md: "transparent" }}
        boxShadow={{ sm: "0px 2px 2px rgba(0, 0, 0, 0.25)", md: "none" }}
        borderRadius="25px"
        padding={{ sm: show && "0 1.5rem 1rem" }}
      >
        {links.map((item) => {
          const selected = item.link === router.asPath;
          return (
            <NextLink
              key={item.id}
              href={{
                pathname: item.link,
                query: {
                  slug: "/",
                },
              }}
            >
              <PseudoBox
                mt={{ base: 4, md: 0 }}
                mr={12}
                display="inline-block"
                fontSize="md"
                fontWeight={selected ? "900" : "500"}
                borderBottomColor={selected ? "tourquise.500" : "transparent"}
                borderBottomWidth="2px"
                color="purple.900"
                cursor="pointer"
                _hover={{ borderBottomColor: "tourquise.500" }}
                _focus={{ borderBottomColor: "tourquise.500" }}
                _active={{ borderBottomColor: "tourquise.500" }}
              >
                {item.title}
              </PseudoBox>
            </NextLink>
          );
        })}
      </Box>
    </Flex>
  );
};
