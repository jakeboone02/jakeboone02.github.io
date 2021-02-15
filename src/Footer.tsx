import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.scss';

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
                <li>
                  <a
                    href="https://github.com/jakeboone02"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    <span className="ico-circle">
                      <FontAwesomeIcon icon={faGithub} />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/jakeboone02"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    <span className="ico-circle">
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jakeboone02"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    <span className="ico-circle">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                  </a>
                </li>
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
