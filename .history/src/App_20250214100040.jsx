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
    <div px={4}>
      <Header />
      <Stack
        justifyContent="space-between"
        m="0 auto"
        w="100%"
        maxW={{
          base: "calc(100% - 20px)",
          lg: "calc(100% - 100px)",
          xl: "1332px",
        }}
      >
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
    </Stack>
  );
}

export default App;
