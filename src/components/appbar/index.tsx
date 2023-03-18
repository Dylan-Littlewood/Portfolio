import Navbar from './navbar';
import Logo from '../../assets/SVG/Logo';

export default function Appbar() {
  return (
    <>
      <header className='appbar'>
        <div className='appbar-wrapper'>
          <div className='flex-group'>
            <Logo />
            <h1 className='site-title'>
              <span>Dylan</span> Littlewood
            </h1>
          </div>
          <Navbar />
        </div>
      </header>
      <div className='appbar-spacer'></div>
    </>
  );
}
