import logo from "../assets/logo.svg";
import whiteLogo from "../assets/whiteLogo.svg";
import { LuMoon, LuSun } from "react-icons/lu";
import { Heading, HStack, Icon, IconButton, Stack } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

export const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isLight = colorMode === "light";

  return (
    <HStack justifyContent="space-between">
      <Stack justifyContent="center" bgColor={}>Gratis frakt for Compis medlemer</Stack>
      <HStack>
        <Icon color="red.500" w={14}>
          <a href="https://vite.dev" target="_blank">
            <img
              src={ ? logo : whiteLogo}
              className="logo"
              alt="Vite logo"
            />
          </a>
        </Icon>
        <Heading fontSize={32}>Compis</Heading>
      </HStack>

      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </HStack>
  );
};
