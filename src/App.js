import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import Footer from "./components/Footer/Footer";
import FotoToEngrave from "./components/FotoToEngrave/FotoToEngrave";
import Gallery from "./components/Gallery/Gallery.jsx";
import Hero from "./components/Hero/Hero";
import Portrets from "./components/Portrets/Portrets";
import galleryData from "./components/Gallery/imagesList.json";

const App = () => {
  return (
    <div className="container">
      <AppBar />
      <Hero />
      <FotoToEngrave />
      <Portrets />
      <Gallery images={galleryData} />
      <Footer />
    </div>
  );
};

export default App;
