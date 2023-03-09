import React, { useState, useEffect } from "react";
import "./App.css";
import Top from "./components/top/top";
import Resume from "./components/Resume/resume";
import MobileTop from "./components/top/mobileTop/mobileTop";
import Projects from "./components/Blogs&Projects/blogs";
import Footer from "./components/Footer/footer";

function App() {
  const [isMobile, setMobile] = useState(window.innerWidth <= 600);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth <= 600);
    });
    return () =>
      window.removeEventListener("resize", () => {
        setMobile(window.innerWidth <= 600);
      });
  });

  return (
    <div className="App">
      {isMobile ? <MobileTop /> : <Top />}
      <Resume />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
