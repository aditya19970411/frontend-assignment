import "./App.css";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import HomeHero from "./components/HomeHero";

function App() {
  return (
    <div className="App">
      <HomeHero />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
