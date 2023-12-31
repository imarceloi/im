import "./Experience.scss";

export type ExperienceType = {
  experienceTitle: string;
  jobTitle: string;
  experienceTime: string;
  description: string[];
};

type Props = {
  experience: ExperienceType;
};

export const Experience = ({
  experience: { jobTitle, experienceTitle, experienceTime, description },
}: Props): JSX.Element => {
  return (
    <div className="experience-wrapper">
      <div className="company-wrapper clearfix">
        <div className="experience-title hide-on-print bold">
          {experienceTitle}
        </div>
        <div className="time">{experienceTime}</div>
      </div>

      <div className="job-wrapper clearfix">
        <div className="experience-title show-on-print bold">
          {experienceTitle}
        </div>
        <div className="experience-title">{jobTitle}</div>
        <div className="company-description hide-on-print">
          {description.map((experience, index) => (
            <p key={`experience_${index}`}>{experience}</p>
          ))}
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
};
