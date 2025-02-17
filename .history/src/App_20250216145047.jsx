import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { Badge, Button, HStack, Image } from "@chakra-ui/react";

function App() {
  return (
    <div px={4}>
      <Header />
      <div className="container">
        <HeroBanner />
      </div>
    </div>
  );
}

export default App;
