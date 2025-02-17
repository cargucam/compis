import logo from "../assets/logo.svg";
import { LuMoon, LuSun } from "react-icons/lu";
import { HStack, Icon } from "@chakra-ui/react";
import { useColorMode } from "../components/ui/color-mode";

export const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack justifyContent="space-around">
      <Icon color="red.500" w={16}>
        <a href="https://vite.dev" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
      </Icon>

      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </HStack>
  );
};
