import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useColorMode } from "./components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";
import { Alert, Button, HStack, IconButton } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);
  const { toggleColorMode, colorMode } = useColorMode();

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
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
        <Alert.Root status="success">
          <Alert.Indicator />
          <Alert.Title>{count}</Alert.Title>
        </Alert.Root>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <HStack my={6} justifyContent="center">
        <Button onClick={toggleColorMode}>Color Mode</Button>
        <Button colorPalette="orange">Click me</Button>
      </HStack>
      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </>
  );
}

export default App;
