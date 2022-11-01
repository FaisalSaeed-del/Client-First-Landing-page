import "./App.css";
import Build from "./components/build/Build";
import Clientgoal from "./components/client-goals/Clientgoal";
import Folderintro from "./components/folderintro/Folderintro";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Library from "./components/library/Library";
import Navbar from "./components/navbar/Navbar";
import Projectfolder from "./components/projectFolder/Projectfolder";
import Subscribe from "./components/subscribe/Subscribe";
import Uses from "./components/uses/Uses";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Clientgoal />
      <Projectfolder />
      <Uses />
      <Folderintro />
      <Library />
      <Build />
      <Footer />
      <Subscribe />
    </div>
  );
}

export default App;
