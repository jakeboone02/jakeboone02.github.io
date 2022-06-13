import ReactMarkdown from 'react-markdown';
// @ts-expect-error
import resume from '../RESUME.md?raw';
import './Resume.scss';

export const Resume = () => <ReactMarkdown>{resume}</ReactMarkdown>;
