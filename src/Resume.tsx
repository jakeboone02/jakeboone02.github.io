import raw from 'raw.macro';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Resume.scss';

const resume = raw('../RESUME.md');

const Resume: React.FC = () => <ReactMarkdown source={resume} />;

export default Resume;
