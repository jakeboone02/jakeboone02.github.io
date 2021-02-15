import raw from 'raw.macro';
import ReactMarkdown from 'react-markdown';
import './Resume.scss';

const resume = raw('../RESUME.md');

const Resume = () => <ReactMarkdown source={resume} />;

export default Resume;
