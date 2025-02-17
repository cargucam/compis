import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Badge, Button, HStack, Stack, Image } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div px={4}>
      <Header />

      <div className="container">
        <HStack
          bgImage={{
            base: "url(./public/compisklubb-banner-mobile-min.jpg"),
            smDown: "url(./public/compisklubb-banner-mobile-min.jpg'=",
          }}
          alt="Kompisclubb Banner"
          role="image"
          width="100%"
          height="100px"
        />

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
