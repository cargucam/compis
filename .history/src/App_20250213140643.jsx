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
        <Icon color="red.500" w={16}>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm6.7,12a3.84,3.84,0,0,1-3,2H15.5a3.68,3.68,0,0,1-2.92-1.56L9.82,10.77A1.64,1.64,0,0,0,8.43,10,1.88,1.88,0,0,0,7,11l-.9,1.51-1.72-1L5.3,10a3.84,3.84,0,0,1,3-2,3.66,3.66,0,0,1,3.09,1.56l2.76,3.67a1.63,1.63,0,0,0,1.39.77A1.88,1.88,0,0,0,17,13l.9-1.51,1.72,1Z"></path>{" "}
              <path d="M0,0H24V24H0Z" fill="none"></path>{" "}
            </g>
          </svg>
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
}

export default App;
