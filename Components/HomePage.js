import styles from "../styles/Home.module.css";
import Link from "next/link";
import HomeProject from "./HomeProject";
import { projects } from "../Constants/projects";
import { userinfo, ctaTexts, headings } from "../Constants/userinfo";
import Education from "./Education";

const HomePage = ({ currentTheme }) => {
  return (
    <div>
      <div
        className={styles.homeheading}
        style={{ backgroundColor: currentTheme.secondary }}
      >
        <h1 className={styles.heading}>{userinfo.greeting.title}</h1>
        <h2
          className={styles.subheading}
          style={{ color: currentTheme.subtext }}
        >
          {userinfo.greeting.subtitle}
        </h2>
        <Link href="#work">
          <a
            className={styles.cta1}
            style={{
              backgroundColor: currentTheme.accent,
              color: currentTheme.contrastText,
              boxShadow: currentTheme.boxShadow,
            }}
          >
            {ctaTexts.landingCTA}
          </a>
        </Link>
      </div>
      <div className={styles.homeWorkSection} id="work">
        <h1 className={styles.workheading} data-aos="fade-up">
          {headings.workHomePage}
        </h1>
        {projects.slice(0, 3).map((project, key) => {
          return (
            <div key={key} data-aos="fade-up">
              <HomeProject
                currentTheme={currentTheme}
                project={project}
                id={key}
              />
            </div>
          );
        })}
        <div style={{ textAlign: "center", paddingBottom: "2rem" }}>
          <Link href="/work">
            <a
              className={styles.cta3}
              style={{
                backgroundColor: currentTheme.accent,
                color: currentTheme.contrastText,
              }}
            >
              {ctaTexts.workCTA} <span>&gt;</span>
            </a>
          </Link>
        </div>
      </div>
      {/* <div id="skills" className={styles.homeSkillSection} style={{ backgroundColor: currentTheme.secondary }}>
                <Skills currentTheme={currentTheme} />
            </div> */}
      <div>
        {userinfo.education.visible ? (
          <Education currentTheme={currentTheme} />
        ) : null}
      </div>
      <div
        id="about"
        className={styles.homeAboutSection}
        style={{ backgroundColor: currentTheme.secondary }}
      >
        <h1 className={styles.workheading} data-aos="fade-up">
          {headings.about}
        </h1>
        <pre
          className={styles.aboutText}
          style={{ color: currentTheme.subtext }}
          data-aos="fade-up"
        >
          Happy birthday to my love, <br />
          Whose companionship I hold above.
          <br />
          In this journey we&apos;re two of a kind,
          <br />
          Loving, with no limits to find.
          <br /> <br />
          Together we&apos;ve traveled to unknown,
          <br />
          Creating memories that have grown.
          <br />
          From the mountains to the seas,
          <br />
          With you by my side, I&apos;m in glee.
          <br /> <br />
          From sharing meals to sharing dreams,
          <br />
          Our love is better than it seems.
          <br />
          Everyday I&apos;m grateful anew,
          <br />
          For the gift of you, my love so true.
          <br />
          <br />
        </pre>
        {/* <div data-aos="fade-up" style={{ textAlign: 'center', padding: '1rem 0', margin: '1rem 0', position: 'relative', display: 'flex', color: currentTheme.subtext }}>
                    <Link href={userinfo.about.resume} target="_blank"><a className={styles.cta4} style={{ background: 'transparent', border: `2px solid ${currentTheme.subtext}`, display: 'flex', alignItems: 'center' }}>{ctaTexts.resumeCTA}&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon width="15px" height="15px" icon={faExternalLinkAlt} /></a></Link>
                </div> */}
      </div>
    </div>
  );
};

export default HomePage;
