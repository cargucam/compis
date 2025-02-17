import React from "react";
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
import type { HeaderType } from "../types/types";


export const Header = ({setSearchTerm} : HeaderType) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isLight = colorMode === "light";

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  }

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
        <a href="/" title="Hjem" w={{ base: '220px', md: '280px'}}>
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
        </a>
        <InputGroup alignItems="center" mx={16}>
          <PiMagnifyingGlass
            color="gray.300"
            size="24px"
            style={{ paddingRight: 4 }}
          />
          <Input type="search" placeholder="Søk etter produkter" onChange={handleInputChange} />
        </InputGroup>
        <IconButton onClick={toggleColorMode} variant="outline" size="sm">
          {isLight ? <LuMoon /> : <LuSun />}
        </IconButton>
      </HStack>
      <Stack border="0.5px solid #eee"></Stack>
    </Stack>
  );
};
