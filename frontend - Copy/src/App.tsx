import { useState } from "react";
import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Competitive from "./components/Competitive";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Competitive />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
