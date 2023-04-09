import Navbar from './navbar';
import Triangles from '../../assets/SVG/Triangles';
import ScrollHeader from './navbar/scrollHeader';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Appbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className='appbar'>
        <div className='appbar-wrapper'>
          <ScrollHeader />
          <button
            className='nav-button'
            aria-controls='primary-navigation'
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <FontAwesomeIcon className='nav-button-icon' icon={faXmark} />
            ) : (
              <FontAwesomeIcon className='nav-button-icon' icon={faBarsStaggered} />
            )}
            <span className='sr-only'>Menu</span>
          </button>
          <div className='nav-group' data-visible={open}>
            <Triangles />
            <Navbar setOpen={setOpen} />
          </div>
        </div>
      </header>
    </>
  );
}
