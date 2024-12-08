import About from "./mainComponents/About";
import Contact from "./mainComponents/Contact";
import DynamicHeader from "./mainComponents/DynamicHeader";
import Footer from "./mainComponents/Footer";
import Hero from "./mainComponents/Hero";
import Portfolio from "./mainComponents/Portfolio";

function App() {
  return (
    <div> 
      <DynamicHeader />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
