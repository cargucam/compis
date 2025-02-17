import "./App.css";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import productsData from "./data/productsData";

function App() {
  return (
    <div px={4}>
      <Header />
      <div className="container">
        <HeroBanner />
      </div>
      {JSON.stringify(productsData)}
    </div>
  );
}

export default App;
