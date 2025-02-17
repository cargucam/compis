import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Badge, Button, HStack, Stack } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <Header />
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
      <IconButton variant="outline" size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </>
  );
}

export default App;
