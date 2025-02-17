import logo from "../assets/logo.svg";
import logo-white from "../assets/logo-whitye.svg";
import { LuMoon, LuSun } from "react-icons/lu";
import { HStack, Icon, IconButton } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

export const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack justifyContent="space-around">
      <Icon color="red.500" w={16}>
        {logo}
      </Icon>

      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </HStack>
  );
};
