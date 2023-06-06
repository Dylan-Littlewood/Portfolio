import PrimaryNav from './primaryNav';
import Triangles from '../../assets/SVG/Triangles';
import ScrollLogo from './scrollLogo';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';
import NavItem from './primaryNav/navItem';
import { CurrentProject } from '../projects';

export default function Appbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className='appbar'>
        <div className='appbar-wrapper'>
          <div>
            <CurrentProject />
            <ScrollLogo />
          </div>
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
            <PrimaryNav>
              <NavItem link='Home' setOpen={setOpen} />
              <NavItem link='About' setOpen={setOpen} />
              <NavItem link='CV' setOpen={setOpen} />
              <NavItem link='Portfolio' setOpen={setOpen} />
            </PrimaryNav>
          </div>
        </div>
      </header>
    </>
  );
}
