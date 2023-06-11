import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react';

export default function Tag(props: {
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
  return <p className='tag'>{props.children}</p>;
}
