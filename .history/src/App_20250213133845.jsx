import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useColorMode } from "./components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";
import {
  Badge,
  Button,
  HStack,
  Icon,
  IconButton,
  Stack,
} from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);
  const { toggleColorMode, colorMode } = useColorMode();

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <Stack>
        <Icon fontSize="10px" color="red.500">
          <svg viewBox="0 0 32 32">
            <g fill="currentColor">
              <path d="M16,11.5a3,3,0,1,0-3-3A3,3,0,0,0,16,11.5Z" />
              <path d="M16.868.044A8.579,8.579,0,0,0,16,0a15.99,15.99,0,0,0-.868,31.956A8.579,8.579,0,0,0,16,32,15.99,15.99,0,0,0,16.868.044ZM16,26.5a3,3,0,1,1,3-3A3,3,0,0,1,16,26.5ZM16,15A8.483,8.483,0,0,0,8.788,27.977,13.986,13.986,0,0,1,16,2a6.5,6.5,0,0,1,0,13Z" />
            </g>
          </svg>
        </Icon>
      </Stack>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
}

export default App;
