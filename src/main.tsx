import React from 'react';
import ReactDOM from 'react-dom/client';
import Appbar from './components/appbar';
import Hero from './components/hero';
import Portfolio from './components/portfolio';
import CV from './components/cv';
import About from './components/about';
import './scss/style.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Appbar />
    <main>
      <div className='home' id='home'></div>
      <Hero />
      <About />
      <CV />
      <Portfolio />
    </main>
    <footer></footer>
  </React.StrictMode>
);
