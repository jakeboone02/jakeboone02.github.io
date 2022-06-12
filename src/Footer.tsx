import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.scss';

const socials = [
  { href: 'https://github.com/jakeboone02', icon: faGithub },
  { href: 'https://twitter.com/jakeboone02', icon: faTwitter },
  { href: 'https://www.linkedin.com/in/jakeboone02', icon: faLinkedin },
];

const Footer = () => {
  return (
    <Container
      className="paralax-mf footer-paralax bg-image section-wrapper"
      fluid={true}
    >
      <div className="overlay-mf"></div>
      <footer>
        <Container>
          <Row>
            <Col className="text-center">
              <ul className="socials">
                {socials.map(({ href, icon }) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {' '}
                      <span className="ico-circle">
                        <FontAwesomeIcon icon={icon} />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              {/* <div className="copyright-box">
                <p className="copyright">Footer message</p>
              </div> */}
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  );
};

export default Footer;
