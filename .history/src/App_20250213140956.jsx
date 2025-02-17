import { useState } from "react";
import logo from "./assets/logo.svg";
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
        <Icon color="red.500" w={16}></Icon>
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
