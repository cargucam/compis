import logo from "../assets/logo.svg";
import whiteLogo from "../assets/whiteLogo.svg";
import { LuMoon, LuSun } from "react-icons/lu";
import {
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  SearchIcon,
  Stack,
} from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

export const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isLight = colorMode === "light";

  return (
    <Stack>
      <Stack
        justifyContent="center"
        bgColor={isLight ? "black" : "teal.400"}
        color={isLight ? "white" : "black"}
        position="absolute"
        inset="0"
        h="22px"
        fontSize={12}
      >
        Gratis frakt for Compis medlemer
      </Stack>
      <HStack justifyContent="space-between" pt="30px">
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
        {/*<Input
          placeholder="Søk etter produkter"
          size="md"
          type="search"
          mx={8}
        />*/}
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="search" placeholder="Søk etter produkter" />
        </InputGroup>
        <IconButton onClick={toggleColorMode} variant="outline" size="sm">
          {isLight ? <LuMoon /> : <LuSun />}
        </IconButton>
      </HStack>
    </Stack>
  );
};
