import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutIntro from './AboutIntro';

const About: React.FC = () => (
  <Container className="section-wrapper">
    <Row id="about">
      <Col className="shadow-sm p-5 bg-light">
        <Row>
          <Col md={6}>
            <AboutIntro />
            {/* <List
                          headline={props.toolsHeadline}
                          list={props.tools}
                          tag="tool"
                      /> */}
          </Col>
          <Col md={6}>
            {/* <List
                          headline={props.jobsHeadline}
                          list={props.jobs}
                          tag="job"
                      /> */}
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default About;
