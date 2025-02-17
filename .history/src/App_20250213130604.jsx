import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useColorMode } from "./components/ui/color-mode";
import { HStack, Button } from "chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);
  const { setColorMode } = useColorMode();

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <HStack mt={8}>
        <Button colorPalette="cyan" variant="solid">
          Click me
        </Button>
        <Button colorPalette="orange">Click me</Button>
      </HStack>
    </>
  );
}

export default App;
