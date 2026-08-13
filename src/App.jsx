import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CardNav from './components/CardNav';
import logo from './assets/logo.png';
import SubAbout from './components/SubAbout';
import useParticles from './hooks/useParticles';

function App() {
  useParticles();

  useEffect(() => {
    // Navbar scroll state
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      const scrollProgress = document.getElementById('scroll-progress');
      const backToTop = document.getElementById('backToTop');

      if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
      if (scrollProgress) {
        const doc = document.documentElement;
        const pct = (doc.scrollTop) / (doc.scrollHeight - doc.clientHeight) * 100;
        scrollProgress.style.width = pct + '%';
      }
      if (backToTop) backToTop.classList.toggle('show', window.scrollY > 600);
    };

    // Magnetic buttons
    const magneticBtns = document.querySelectorAll('.magnetic');
    const cleanups = [];

    magneticBtns.forEach((btn) => {
      const onMove = (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
      };
      const onLeave = () => { btn.style.transform = ''; };
      const onClick = (e) => {
        const r = btn.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = (e.clientX - r.left) + 'px';
        ripple.style.top = (e.clientY - r.top) + 'px';
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 650);
      };

      btn.addEventListener('mousemove', onMove);
      btn.addEventListener('mouseleave', onLeave);
      btn.addEventListener('click', onClick);
      cleanups.push(() => {
        btn.removeEventListener('mousemove', onMove);
        btn.removeEventListener('mouseleave', onLeave);
        btn.removeEventListener('click', onClick);
      });
    });

    // Back to top
    const backToTop = document.getElementById('backToTop');
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    if (backToTop) backToTop.addEventListener('click', scrollToTop);

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (backToTop) backToTop.removeEventListener('click', scrollToTop);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
     
  <div className="aurora"></div>
  <div id="scroll-progress"></div>
      <CardNav logo={logo} logoAlt="Company Logo" menuColor="#fff" ease="power3.out" />
      <Header />
      <About />
      <SubAbout />
      <Services />
      <TechStack />
      <Portfolio />
      <Timeline />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
