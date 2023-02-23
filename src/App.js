import "./App.scss";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import gsap from "gsap";
import MouseFollower from "mouse-follower";
import { useEffect } from "react";

function App() {
  MouseFollower.registerGSAP(gsap);

  useEffect(() => {
    const cursor = new MouseFollower({
      speed: 0.3,
    });
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
