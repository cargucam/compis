import { useState } from "react";
import logo from "./assets/logo.svg";
import { LuMoon, LuSun } from "react-icons/lu";
import { HStack, Icon, Stack } from "@chakra-ui/react";

export const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Stack>
        <Icon color="red.500" w={16}>
          <a href="https://vite.dev" target="_blank">
            <img src={logo} className="logo" alt="Vite logo" />
          </a>
        </Icon>
      </Stack>

      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </HStack>
  );
};

export default App;
