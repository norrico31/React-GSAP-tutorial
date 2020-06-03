import React from 'react';
// import React, { useRef, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { TweenMax, Power3 } from 'gsap';
// import AnimationOne from './components/AnimationOne';
// import ImageRevealOne from './components/Image Reveal/ImageRevealOne';
// import ImageSlide from './components/Image Slider/ImageSlider';
// import Hero from './components/Hero Section/Hero';
import Scroll from './components/Intersection Observer/Scroll';


function App() {
  // let logoItem = useRef(null);
  // let textItem = useRef(null);

  // useEffect(() => {
  //   // console.log(logoItem);
  //   TweenMax.to(logoItem, .8, { opacity: 1, y: -20, ease: Power3.easeInOut });
  //   TweenMax.to(textItem, .8, { opacity: 1, y: -20, ease: Power3.easeInOut, delay: .2 })
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} ref={(el) => {logoItem = el}} className="App-logo" alt="logo" />
        <p ref={(el) => { textItem = el}}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* <AnimationOne /> */}
      {/* <ImageRevealOne /> */}
      {/* <ImageSlide /> */}
      {/* <Hero /> */}
      <Scroll />
      </header>
    </div>
  );
}

export default App;
