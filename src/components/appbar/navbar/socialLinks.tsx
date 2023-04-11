import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function SocialLinks() {
  return (
    <div className='social-links'>
      <ul className='social-nav flex-group'>
        <li>
          <a className='social-link' href='#'>
            Contact Me
          </a>
        </li>
        <li>
          <a className='social-icon' href='https://github.com/Dylan-Littlewood'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a className='social-icon' href='https://www.linkedin.com/in/dylan-littlewood/'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </div>
  );
}
