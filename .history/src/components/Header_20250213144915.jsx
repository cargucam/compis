import logo from "../assets/logo.svg";
import whiteLogo from "../assets/whiteLogo.svg";
import { LuMoon, LuSun } from "react-icons/lu";
import { Heading, HStack, Icon, IconButton } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

export const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack justifyContent="space-between">
      <Stack>
        <Icon color="red.500" w={16} mr={6}>
          <a href="https://vite.dev" target="_blank">
            <img
              src={colorMode === "light" ? logo : whiteLogo}
              className="logo"
              alt="Vite logo"
            />
          </a>
        </Icon>
        <Heading></Heading>
      </Stack>

      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </HStack>
  );
};
