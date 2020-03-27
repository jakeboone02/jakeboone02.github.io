import { format, parseISO } from 'date-fns';
import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import AboutIntro from './AboutIntro';
import AboutTitleBox from './AboutTitleBox';

const about = {
  codeAndTools: [
    {
      groupName: 'Languages',
      list: 'HTML, CSS, JavaScript, TypeScript, SCSS, Oracle PL/SQL',
    },
    {
      groupName: 'Frameworks / Libraries',
      list: 'React, Redux, Jest, Cypress, ag-Grid, Webpack',
    },
    { groupName: 'Utilities', list: 'Git, npm, yarn, Toad, Jira, TFS' },
  ],
  workHistory: [
    {
      company: 'Bechtel',
      location: 'Glendale, Arizona',
      position: 'Product Owner / Web Developer',
      startDate: '2016-01-01',
      summary:
        'Designed and developed two mission-critical web applications for expediting and materials management',
      highlights: [
        'Integrated modern web design techniques (React, Redux, Jest and Cypress testing, REST APIs, etc.) into a legacy Oracle EBS platform',
        'Used Jira task management system and Agile software development methodologies to coordinate the activities of UX designers, front-end and back-end developers',
        'Prepared product technical and functional documentation in MediaWiki-based content management system',
        'Developed MediaWiki templates and Lua modules to help organize content for the enterprise',
        'Automated the application deployment process with bash scripts and Microsoft Team Foundation Server (TFS) builds',
      ],
    },
    {
      company: 'Bechtel',
      location: 'Reston, Virginia',
      position: 'Product Owner',
      startDate: '2014-06-01',
      endDate: '2015-12-31',
      summary:
        "Acted as Product Owner of the company's procurement automation system",
      highlights: [
        'Wrote user stories and functional requirements documents for maintenance and enhancement activities',
        'Prioritized backlog and developed product roadmap based on input from stakeholders and subject matter experts',
        'Managed the release/patch cycle',
      ],
    },
    {
      company: 'Bechtel',
      location: 'Houston, Texas',
      position: 'Procurement Automation Manager',
      startDate: '2012-04-01',
      endDate: '2014-05-31',
      summary: 'Managed a team of 10 procurement automation specialists',
      highlights: [
        'Mentored and coached employees on career moves, conflict resolution, and problem-solving strategies',
        'Supported procurement automation activities on several large capital projects',
      ],
    },
    {
      company: 'Bechtel',
      location: 'Frederick, Maryland',
      position: 'Procurement Automation Support Specialist',
      startDate: '2008-02-01',
      endDate: '2012-03-31',
      summary: 'Supported and trained users',
      highlights: [
        'Developed utility applications to automate tasks',
        'Designed new look and feel for large web application suite, including dozens of new icons',
      ],
    },
    {
      company: 'Bechtel',
      location: 'Houston, Texas',
      position: 'Materials Manager',
      startDate: '2007-05-01',
      endDate: '2008-01-31',
      summary:
        'Unit Procurement Coordinator for Motiva Port Arthur Refinery Crude Expansion Project',
      highlights: [
        'Served as liaison between engineering subcontractor and home office procurement',
      ],
    },
    {
      company: 'Bechtel',
      location: 'London, United Kingdom',
      position: 'Procurement Automation Specialist',
      startDate: '2005-09-01',
      endDate: '2007-04-30',
      summary:
        'Lead BPS Coordinator for Reliance Jamnagar Export Refinery Project in Jamnagar, India',
      highlights: [
        'Assisted with setup and management of Oracle database, Citrix farm, and web-based applications',
        "Managed, maintained, and assisted with development of interface between Oracle database and client's SAP system",
        'Developed and deployed application extensions using Oracle triggers and procedures, MS Access front-ends, and command-line interfaces',
        'Supervised training and support of over 500 users on three different continents',
      ],
    },
    {
      company: 'Bechtel',
      location: 'Malabo, Equatorial Guinea',
      position: 'Procurement Automation Specialist',
      startDate: '2004-08-01',
      endDate: '2005-08-30',
      summary:
        'Lead BPS Coordinator for EG LNG Train 1 Project in Malabo, Equatorial Guinea',
      highlights: [
        'Trained and supported remote jobsite personnel',
        'Contributed Oracle PL/SQL, ASP, and JavaScript code for bug fixes and enhancements',
      ],
    },
    {
      company: 'Bechtel',
      location: 'Houston, Texas',
      position: 'Procurement Automation Specialist',
      startDate: '2003-01-23',
      endDate: '2004-07-31',
      summary:
        'Primary BPS (Bechtel Procurement System) support for several projects',
      highlights: [
        'Developed Access programs to import data from various supplier programs',
        'Developed curriculum and administered training classes',
        'Performed various database administration and maintenance',
        'June 2003: assisted Transportation and Logistics Supervisor for Egypt LNG project',
        'Purchased major equipment, construction tools, and other jobsite materials for Equatorial Guinea LNG Train 1 Project',
      ],
    },
  ],
};

const About: React.FC = () => (
  <Container className="section-wrapper">
    <Row id="about">
      <Col className="shadow-sm p-5 bg-light">
        <Row>
          <Col md={6}>
            <AboutIntro />
            <AboutTitleBox headline="Code &amp; Tools" />
            {about.codeAndTools.map(c => (
              <p>
                <span className="font-weight-bold">{c.groupName}</span>
                <br />
                {c.list}
              </p>
            ))}
            <div style={{ height: '3rem' }}></div>
            <AboutTitleBox headline="Education" />
            <p>
              <span className="font-weight-bold">
                Texas A&amp;M University - Class of '02
              </span>
              <br />
              BBA, Information and Operations Management
              <br />
              (Managment Information Systems track)
            </p>
          </Col>
          <Col md={6}>
            <AboutTitleBox headline="Work Experience" />
            {about.workHistory.map(w => (
              <React.Fragment key={w.startDate}>
                <Badge variant="dark" className="badge float-right bg-medium">
                  {`${format(parseISO(w.startDate), 'MMM yyyy')}-${
                    w.endDate
                      ? format(parseISO(w.endDate), 'MMM yyyy')
                      : 'current'
                  }`}
                </Badge>
                <h5>{w.position}</h5>
                <span className="font-weight-normal">
                  {w.company} - {w.location}
                </span>
                <p className="font-weight-light">
                  {w.summary}
                  <ul>
                    {w.highlights.map(h => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </p>
              </React.Fragment>
            ))}
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default About;
