'use client';

import { useState, useEffect } from 'react';
import Top from '../src/components/top/top';
import MobileTop from '../src/components/top/mobileTop/mobileTop';
import Resume from '../src/components/Resume/resume';
import Projects from '../src/components/Blogs&Projects/blogs';
import Footer from '../src/components/Footer/footer';

export default function Home() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 600);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
