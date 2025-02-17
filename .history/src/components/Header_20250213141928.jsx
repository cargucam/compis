import { useState } from "react";
import logo from "./assets/logo.svg";

import { LuMoon, LuSun } from "react-icons/lu";
import { HStack, Icon, Stack } from "@chakra-ui/react";

export const Header = () => {
  const [count, setCount] = useState(0);
  const { toggleColorMode, colorMode } = useColorMode();

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <Stack>
        <Icon color="red.500" w={16}>
          <a href="https://vite.dev" target="_blank">
            <img src={logo} className="logo" alt="Vite logo" />
          </a>
        </Icon>
      </Stack>

      <div className="card">
        <Badge colorPalette="teal">Count is: {count}</Badge>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <HStack my={6} justifyContent="center">
        <Button onClick={toggleColorMode}>Color Mode</Button>
        <Button colorPalette="orange" onClick={increment}>
          Count
        </Button>
      </HStack>
      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </>
  );
};

export default App;
