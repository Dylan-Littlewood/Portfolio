import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { Link } from 'react-scroll';

export default function NavItem(props: { link: string; setOpen: (arg0: boolean) => void }) {
  return (
    <li>
      <Link
        href={'#' && props.link}
        className='primary-navigation-link'
        to={props.link.toLowerCase()}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onClick={() => props.setOpen(false)}
      >
        {props.link}
      </Link>
    </li>
  );
}
