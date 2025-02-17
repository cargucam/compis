import "./App.css";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { ProductList } from "./components/ProductList";
import { useState, useEffect } from "react";

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  return (
    <div px={4}>
      <Header />
      <div className="container">
        <HeroBanner />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
