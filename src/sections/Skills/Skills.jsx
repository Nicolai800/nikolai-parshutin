import styles from "./SkillsStyles.module.css";
import checkMartIconLight from "../../assets/checkmark-light.svg";
import checkMartIconDark from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

const Skills = () => {
    const {theme} = useTheme();
    const checkMartIcon = theme === 'light' ? checkMartIconLight : checkMartIconDark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMartIcon} skill="HTML" />
        <SkillList src={checkMartIcon} skill="CSS" />
        <SkillList src={checkMartIcon} skill="JavaScript" />
        <SkillList src={checkMartIcon} skill="Basic TypeScript" />
        <SkillList src={checkMartIcon} skill="Basic Node" />
        <SkillList src={checkMartIcon} skill="WordPress" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMartIcon} skill="React" />
        <SkillList src={checkMartIcon} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMartIcon} skill="Redux" />
        <SkillList src={checkMartIcon} skill="Webpack" />
        <SkillList src={checkMartIcon} skill="GIT" />
      </div>
      <hr />
      
    </section>
  );
};

export default Skills;
