import React, { useEffect } from 'react';
import './App.css';
import { Element, Events, scroller } from 'react-scroll';
import BottomArrow from './components/BottomArrow';
import Contact from './components/Contact';
import GetPro from './components/GetPro';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Plans from './components/Plans';
import Services from './components/Services';

function App() {
  useEffect(() => {
    Events.scrollEvent.register('end', scrollToCenter);

    return () => {
      Events.scrollEvent.remove('end');
    };
  }, []);

  const scrollToCenter = () => {
    const element = document.querySelector('.active');
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const offset = (window.innerHeight / 2) - (elementRect.height / 2);
      window.scrollBy({
        top: elementRect.top - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <GetPro style={{ color: "white" }} />
      <Navbar />
      <Element name="main"><Main /></Element>
      <Element name="services"><Services /></Element>
      <Element name="contact"><Contact /></Element>
      <Element name="plans"><Plans /></Element>
      <BottomArrow />
    </>
  );
}

export default App;