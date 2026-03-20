"use client";

import { useState, useEffect } from "react";
import Top from "../components/Top/top";
import MobileTop from "../components/MobileTop/mobileTop";
import Resume from "../components/Resume/resume";
import Projects from "../components/Projects/blogs";
import Footer from "../components/Footer/footer";

export default function Home() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 600);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      {isMobile ? <MobileTop /> : <Top />}
      <Resume />
      <Projects />
      <Footer />
    </div>
  );
}
