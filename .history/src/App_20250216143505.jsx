import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Badge, Button, HStack, Image } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div px={4}>
      <Header />

      <div className="container">
        <Image
          src={{
            base: "./public/compisklubb-banner-mobile-min.jpg",
            md: "./public/compisklubb-banner-mobile-min.jpg",
          }}
          alt="Kompisclubb Banner"
        />

        <picture>
          <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
          <img src="mdn-logo-narrow.png" alt="MDN" />
        </picture>

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
