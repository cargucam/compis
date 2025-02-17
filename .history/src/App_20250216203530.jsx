import "./App.css";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { ProductList } from "./components/ProductList";
import { useState, useEffect } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <div px={4}>
      <Header setSearchTerm={setSearchTerm} />
      <div className="container">
        <HeroBanner />
        <ProductList searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
