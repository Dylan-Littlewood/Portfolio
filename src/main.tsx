import React from 'react';
import ReactDOM from 'react-dom/client';
import Appbar from './components/appbar';
import './scss/style.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Appbar />

    <section className='welcome-section'>
      <div className='home' id='home'></div>
      <h2 className='section-title'>
        Making <span>Your</span> Designs A Reality
      </h2>
      <p className='section-content'>Frontend software developer from Sheffield</p>
      <button className='button call-to-action'>See my work</button>
    </section>
    <div className='test' id='about'>
      About Me
    </div>
    <div className='test' id='cv'>
      My CV
    </div>
    <div className='test' id='portfolio'>
      Portfolio Projects
    </div>

    <footer></footer>
  </React.StrictMode>
);
