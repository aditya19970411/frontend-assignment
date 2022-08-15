import "./App.css";
import AboutUs from "./components/AboutUs";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import HomeHero from "./components/HomeHero";

function App() {
  return (
    <div className="App">
      <HomeHero />
      <Explore />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
