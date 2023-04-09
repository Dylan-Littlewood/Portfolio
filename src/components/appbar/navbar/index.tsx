import { Link } from 'react-scroll';
import SocialLinks from './socialLinks';

export default function Navbar(props: { setOpen: (arg0: boolean) => void }) {
  return (
    <nav>
      <ul id='primary-navigation' className='primary-navigation flex-group'>
        <li>
          <Link
            href='#Home'
            className='link'
            to='home'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => props.setOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href='#About'
            className='link'
            to='about'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => props.setOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href='#CV'
            className='link'
            to='cv'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => props.setOpen(false)}
          >
            CV
          </Link>
        </li>
        <li>
          <Link
            href='#Portfolio'
            className='link'
            to='portfolio'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => props.setOpen(false)}
          >
            Portfolio
          </Link>
        </li>
      </ul>
      <SocialLinks />
    </nav>
  );
}
