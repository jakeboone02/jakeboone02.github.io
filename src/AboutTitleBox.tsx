import React from 'react';
import './AboutTitleBox.scss';

export interface AboutTitleBoxProps {
  headline: string;
  subhead?: string;
}

const AboutTitleBox: React.FC<AboutTitleBoxProps> = props => (
  <div className={'title-box-2'}>
    <h3 className={'title-left'}>{props.headline}</h3>
    <p className="subtitle-a">{props.subhead}</p>
    <div className="line-mf"></div>
  </div>
);

export default AboutTitleBox;
