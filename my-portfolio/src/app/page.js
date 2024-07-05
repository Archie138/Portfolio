import { Navbar } from "@/components/Navbar/Navbar";
import { AboutMe } from "@/components/About/AboutMe";
import { Title } from "@/components/Title/Title";
import { Work } from "@/components/Work/Work";
import { Projects } from "@/components/Project/Project";

import "./globals.css";

export default function Home() {
  return (
    <div className="bg-[url('https://wallpapers.com/images/featured/pastel-gradient-background-etu0z7lbeebg6mlf.jpg')] h-full w-full bg-cover">
      <Navbar />
      <div id="home">
        <AboutMe />
      </div>
      <div id="about">
        <Title />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}
