import logo from "../assets/logo.svg";
import whiteLogo from "../assets/whiteLogo.svg";
import { LuMoon, LuSun } from "react-icons/lu";
import { Heading, HStack, Icon, IconButton, Stack } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

export const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isLight = colorMode === "light";

  return (
    <Stack>
      <Stack
        justifyContent="center"
        bgColor={isLight ? "black" : "white"}
        color={isLight ? "white" : "black"}
        position="absoulte"
        inset="0"
        h="22px"
        fontSize="12px"
      >
        Gratis frakt for Compis medlemer
      </Stack>
      <HStack justifyContent="space-between" pt="28px">
        <HStack>
          <Icon color="red.500" w={14}>
            <a href="https://vite.dev" target="_blank">
              <img
                src={isLight ? logo : whiteLogo}
                className="logo"
                alt="Vite logo"
              />
            </a>
          </Icon>
          <Heading fontSize={32}>Compis</Heading>
        </HStack>

        <IconButton onClick={toggleColorMode} variant="outline" size="sm">
          {isLight ? <LuSun /> : <LuMoon />}
        </IconButton>
      </HStack>
    </Stack>
  );
};
