import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import Typed from 'react-typed';
import './Intro.scss';
import { smoothScroll } from './utils';

const Intro: React.FC = () => (
  <div id="home" className="intro bg-image background">
    <div className="intro-content display-table">
      <div className="table-cell">
        <Container>
          <h1 className="intro-title mb-4">Jake Boone</h1>
          <p className="intro-subtitle">
            <span className="text-slider-items"></span>
            <strong className="text-slider">
              <Typed
                strings={[
                  'Web Developer',
                  'Product Owner',
                  'Guitar Player',
                  'Woodworker',
                ]}
                typeSpeed={80}
                backDelay={1100}
                backSpeed={30}
                loop
              />
            </strong>
          </p>
          <p className="pt-3">
            <a
              className="btn btn-primary btn-lg js-scroll px-4"
              href="#about"
              role="button"
              onClick={(e: any) => smoothScroll(e, 'about')}
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </p>
        </Container>
      </div>
    </div>
  </div>
);

export default Intro;
