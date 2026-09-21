import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home"><Hero /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}
