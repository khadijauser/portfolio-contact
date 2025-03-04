import React from 'react';

import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Adminpage from './components/Adminpage';
import Contact from './components/Contact';


const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Adminpage/>
      <Contact />
    </div>
  );
};

export default App;
