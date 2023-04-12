import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ContactNav() {
  return (
    <div className='contact-wrapper'>
      <ul className='contact-navigation flex-group'>
        <li>
          <a className='contact-button' href='#'>
            Contact Me
          </a>
        </li>
        <li>
          <a className='contact-social' href='https://github.com/Dylan-Littlewood'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a className='contact-social' href='https://www.linkedin.com/in/dylan-littlewood/'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </div>
  );
}
