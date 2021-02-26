import './AboutTitleBox.scss';

export interface AboutTitleBoxProps {
  headline: string;
  subhead?: string;
}

const AboutTitleBox = ({ headline, subhead }: AboutTitleBoxProps) => (
  <div className={'title-box-2'}>
    <h3 className={'title-left'}>{headline}</h3>
    <p className="subtitle-a">{subhead}</p>
    <div className="line-mf"></div>
  </div>
);

export default AboutTitleBox;
