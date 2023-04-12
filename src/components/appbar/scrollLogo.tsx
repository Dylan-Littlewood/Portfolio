import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/SVG/Logo';

export default function ScrollLogo() {
  const [small, setSmall] = useState(false);
  var lastPos = 0;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setSmall(() => {
          if (lastPos >= window.pageYOffset) {
            lastPos = window.pageYOffset;
            return window.pageYOffset > 240;
          } else {
            lastPos = window.pageYOffset;
            return window.pageYOffset > 220;
          }
        })
      );
    }
  }, []);

  return (
    <Link
      href='#Home'
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
