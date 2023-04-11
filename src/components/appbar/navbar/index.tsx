import SocialLinks from './socialLinks';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

export default function Navbar(props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <nav>
      <ul id='primary-navigation' className='primary-navigation flex-group'>
        {props.children}
      </ul>
      <SocialLinks />
    </nav>
  );
}
