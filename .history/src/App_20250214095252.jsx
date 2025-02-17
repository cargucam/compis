import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Badge, Button, HStack, Stack } from "@chakra-ui/react";

export const containerStyle = {
  justifyContent: "space-between",
  m: "0 auto",
  w: "100%",
  maxWith: {
    base: "calc(100% - 20px)",
    lg: "calc(100% - 100px)",
    xl: "1332px",
  },
};

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div px={4}>
      <Header />
      <div style={containerStyle}>
        <Badge colorPalette="teal">Count is: {count}</Badge>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <HStack my={6} justifyContent="center">
        <Button>Color Mode</Button>
        <Button colorPalette="orange" onClick={increment}>
          Count
        </Button>
      </HStack>
    </div>
  );
}

export default App;
