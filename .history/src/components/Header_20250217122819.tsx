import React from "react";
import logo from "../assets/logo.svg";
import whiteLogo from "../assets/whiteLogo.svg";
import { LuMoon, LuSun } from "react-icons/lu";
import {
  Heading,
  HStack,
  Link,
  Icon,
  IconButton,
  Input,
  Stack,
} from "@chakra-ui/react";
import { PiMagnifyingGlass } from "react-icons/pi";
import { useColorMode } from "./ui/color-mode";
import { InputGroup } from "@chakra-ui/input";
import type { HeaderType } from "../types/types";

export const Header = ({ setSearchTerm }: HeaderType) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isLight = colorMode === "light";

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  return (
    <Stack dropShadow="0 10px 2px #DDD" mb={8} gap={4}>
      <Stack
        alignItems="center"
        justifyContent="center"
        bgColor={isLight ? "black" : "green.400"}
        color={isLight ? "white" : "black"}
        h="22px"
        fontSize={13}
      >
        Gratis frakt for Compis medlemer
      </Stack>
      <HStack className="container">
        <Link href="/" title="Hjem" w={{ base: "210px", md: "250px" }}>
          <HStack>
            <Icon color="red.500" w={{ base: 9, md: 14 }}>
              <img
                src={isLight ? logo : whiteLogo}
                className="logo"
                alt="Vite logo"
              />
            </Icon>
            <Heading fontSize={{ base: 22, md: 32 }}>Compis</Heading>
          </HStack>
        </Link>
        <InputGroup alignItems="center" mx={16}>
          <PiMagnifyingGlass
            color="gray.300"
            size="24px"
            style={{ marginRight: 8 }}
          />
          <Input
            type="search"
            placeholder="Søk etter produkter"
            onChange={handleInputChange}
            borderColor="#d5d5d5"
          />
        </InputGroup>
        <IconButton
          onClick={toggleColorMode}
          variant="outline"
          size="sm"
          borderColor="#d5d5d5"
          h="40px"
          w="40px"
        >
          {isLight ? <LuMoon /> : <LuSun />}
        </IconButton>
      </HStack>
      <Stack border="0.5px solid #eee"></Stack>
    </Stack>
  );
};
