import { Navbar } from "@/components/Navbar/Navbar";
import { AboutMe } from "@/components/About/AboutMe";
import { Title } from "@/components/Title/Title";
import { Work } from "@/components/Work/Work";

import "./globals.css";
import { Projects } from "@/components/Project/Project";

export default function Home() {
  return (
    <div className="portfolio">
    
          <Navbar></Navbar>
          <AboutMe></AboutMe>
          <Title></Title>
          <Work></Work>
          <Projects></Projects>
    </div>
  );
}
