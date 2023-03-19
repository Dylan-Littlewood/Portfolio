import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav>
      <ul id='primary-navigation' className='primary-navigation flex-group'>
        <li>
          <Link className='link' to='home' spy={true} smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link className='link' to='about' spy={true} smooth={true} offset={0} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link className='link' to='cv' spy={true} smooth={true} offset={0} duration={500}>
            CV
          </Link>
        </li>
        <li>
          <Link className='link' to='portfolio' spy={true} smooth={true} offset={0} duration={500}>
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
  );
}
