import logo from "../assets/logo.svg";
import whiteLogo from "../assets/whiteLogo.svg";
import { LuMoon, LuSun } from "react-icons/lu";
import {
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Stack,
} from "@chakra-ui/react";
import { PiMagnifyingGlass } from "react-icons/pi";
import { useColorMode } from "./ui/color-mode";
import { InputGroup } from "@chakra-ui/input";

export const HeroBanner = () => {
  return (
    <picture>
      <source
        srcset="./public/compisklubb-banner-min.jpg"
        media="(min-width: 600px)"
      />
      <img
        src="./public/compisklubb-banner-mobile-min.jpg"
        alt="Kompisclubb Banner"
        width="100%"
      />
    </picture>
  );
};
