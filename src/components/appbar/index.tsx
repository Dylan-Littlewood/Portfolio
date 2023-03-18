import Navbar from './navbar';
import Triangles from '../../assets/SVG/Triangles';
import ScrollHeader from './navbar/scrollHeader';
import SocialLinks from './navbar/socialLinks';

export default function Appbar() {
  return (
    <>
      <header className='appbar'>
        <div className='appbar-wrapper'>
          <ScrollHeader />

          <div className='nav-group'>
            <Triangles />
            <Navbar />
            <SocialLinks />
          </div>
        </div>
      </header>
    </>
  );
}
