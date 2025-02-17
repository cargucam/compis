import "./App.css";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { ProductList } from "./components/ProductList";

function App() {
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
