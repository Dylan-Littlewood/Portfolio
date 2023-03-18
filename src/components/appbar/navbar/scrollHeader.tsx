import React, { useEffect, useState } from 'react';
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
    <div data-size={`${small ? 'small' : 'large'}`} className='title-group'>
      <Logo />
      <h1 className='site-title'>
        <span>Dylan</span> Littlewood
      </h1>
    </div>
  );
}
// window.pageYOffset > 200
