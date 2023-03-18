import React from 'react';
import ReactDOM from 'react-dom/client';
import Appbar from './components/appbar';
import './scss/style.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Appbar />
    <section className='welcome-section'>
      <h2 className='section-title'>Welcome</h2>
      <p className='section-content'>My name is Dylan Littlewood. I am a software engineer from Sheffield.</p>
      <button className='button call-to-action'>Hire Me</button>
    </section>
    <div className='test'></div>
  </React.StrictMode>
);
