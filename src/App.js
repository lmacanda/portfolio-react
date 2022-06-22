import "./App.css";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Experience from "./experience/Experience";
import Footer from "./footer/Footer";
import Contact from "./contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
