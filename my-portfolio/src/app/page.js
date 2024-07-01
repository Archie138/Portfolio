import { Navbar } from "@/components/Navbar/Navbar";
import { AboutMe } from "@/components/About/AboutMe";
import { Title } from "@/components/Title/Title";

import "./globals.css";

export default function Home() {
  return (
    <div className="portfolio">

      

          <Navbar></Navbar>
          <AboutMe></AboutMe>
          <Title></Title>
          

    </div>
  );
}
