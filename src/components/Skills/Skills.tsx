import "./Skills.scss";
import { skills } from "./data";

export const Skills = (): JSX.Element => {
  const midLength = Math.ceil(skills.length / 2);
  const leftSkills = skills.slice(0, midLength);
  const rightSkills = skills.slice(midLength, skills.length);

  return (
    <div className="section-wrapper clearfix skills">
      <h3 className="section-title">Skills</h3>
      <ul className="skills-list left-skills">
        {leftSkills?.map((skill, index) => (
          <li className="skill-percentage" key={`skill_${index}`}>
            <span>{skill.name}</span>
            <progress id={`progress_${index}`} value={skill.percent}></progress>
          </li>
        ))}
      </ul>
      <ul className="skills-list right-skills">
        {rightSkills.map((skill, index) => (
          <li className="skill-percentage" key={`skill_${index}`}>
            <span>{skill.name}</span>
            <progress id={`progress_${index}`} value={skill.percent}></progress>
          </li>
        ))}
      </ul>
    </div>
  );
};
