import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../../assets/SVG/Logo';

export default function ScrollHeader() {
  const [small, setSmall] = useState(false);
  var lastPos = 0;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setSmall(() => {
          if (lastPos >= window.pageYOffset) {
            lastPos = window.pageYOffset;
            return window.pageYOffset > 200;
          } else {
            lastPos = window.pageYOffset;
            return window.pageYOffset > 180;
          }
        })
      );
    }
  }, []);

  return (
    <Link
      to='home'
      spy={false}
      smooth={true}
      offset={0}
      duration={500}
      data-size={`${small ? 'small' : 'large'}`}
      className='title-group link'
    >
      <Logo />
      <h1 className='site-title'>
        <span>Dylan</span> Littlewood
      </h1>
    </Link>
  );
}
