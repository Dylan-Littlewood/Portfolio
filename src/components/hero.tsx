import { Button } from 'react-scroll';

export default function Hero() {
  return (
    <section className='hero-section'>
      <h2 className='section-title'>
        Making <span>Your</span> Designs A Reality
      </h2>
      <p className='section-content'>Frontend software developer from Sheffield</p>
      <Button
        className='button btn-call-to-action'
        type='submit'
        value='See My Work'
        to='portfolio'
        smooth={true}
        offset={0}
        duration={500}
      ></Button>
    </section>
  );
}
