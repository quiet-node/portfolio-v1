import React, { useEffect } from 'react';
// import Navbar from "../components/Navbar";
import Intro from '../components/Intro/';
import About from '../components/About/';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 10000 });
  }, []);

  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
