import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function SocialLinks() {
  return (
    <div className='socialLinks'>
      <ul className='flex-group'>
        <li>
          <a href='#'>
            <FontAwesomeIcon className='social-icon' icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon className='social-icon' icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon className='social-icon' icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon className='social-icon' icon={faGithub} />
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon className='social-icon' icon={faTwitter} />
          </a>
        </li>
      </ul>
    </div>
  );
}
