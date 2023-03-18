export default function Navbar() {
  return (
    <nav>
      <ul id='primary-navigation' className='primary-navigation flex-group'>
        <li className='active'>
          <a href='#Home'>Home</a>
        </li>
        <li>
          <a href='#About'>About</a>
        </li>
        <li>
          <a href='#CV'>CV</a>
        </li>
        <li>
          <a href='#Portfolio'>Portfolio</a>
        </li>
      </ul>
    </nav>
  );
}
