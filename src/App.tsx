import "./sass/main.scss";

import Container from "./ui/components/container/Container";
import Achievements from "./ui/layout/achievements/Achievements";
import Contact from "./ui/layout/contact/Contact";
import Footer from "./ui/layout/footer/Footer";
import Header from "./ui/layout/header/Header";
import Hero from "./ui/layout/hero/Hero";
import Projects from "./ui/layout/projects/Projects";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Achievements />
        <Projects />
        <Contact />
      </Container>

      <Footer />
    </>
  );
}

export default App;
