import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HomeProject from './HomeProject'
import { projects } from '../Constants/projects'
import { userinfo, ctaTexts, headings } from '../Constants/userinfo'
import Education from './Education'

const HomePage = ({ currentTheme }) => {
    return (
        <div>
            <div className={styles.homeheading} style={{ backgroundColor: currentTheme.secondary }}>
                <h1 className={styles.heading}>{userinfo.greeting.title}</h1>
                <h2 className={styles.subheading} style={{ color: currentTheme.subtext }}>{userinfo.greeting.subtitle}</h2>
                <Link href="#work"><a className={styles.cta1} style={{ backgroundColor: currentTheme.accent, color: currentTheme.contrastText, boxShadow: currentTheme.boxShadow }}>{ctaTexts.landingCTA}</a></Link>
            </div>
            <div className={styles.homeWorkSection} id="work">
                <h1 className={styles.workheading} data-aos="fade-up">{headings.workHomePage}</h1>
                {
                    projects.slice(0, 3).map((project, key) => {
                        return (
                            <div key={key} data-aos="fade-up">
                                <HomeProject currentTheme={currentTheme} project={project} id={key} />
                            </div>
                        )
                    })
                }
                <div style={{ textAlign: 'center', paddingBottom: '2rem' }}><Link href="/work"><a className={styles.cta3} style={{ backgroundColor: currentTheme.accent, color: currentTheme.contrastText }}>{ctaTexts.workCTA} <span>&gt;</span></a></Link></div>
            </div>
            {/* <div id="skills" className={styles.homeSkillSection} style={{ backgroundColor: currentTheme.secondary }}>
                <Skills currentTheme={currentTheme} />
            </div> */}
            <div>
                {
                    userinfo.education.visible ? <Education currentTheme={currentTheme} /> : null
                }
            </div>
            <div id="about" className={styles.homeAboutSection} style={{ backgroundColor: currentTheme.secondary }}>
                <h1 className={styles.workheading} data-aos="fade-up">{headings.about}</h1>
                <pre className={styles.aboutText} style={{ color: currentTheme.subtext }} data-aos="fade-up">
                    My dearest baby, <br></br>
                    I write this poem for you<br></br>
                    To express the depth of feeling<br></br>
                    That I hold for only you<br></br>
                    <br/>
                    Your gentle touch and warm embrace<br></br>
                    Are all that I could ask<br></br>
                    Your love has filled my heart with joy<br></br>
                    And every day I bask<br></br>
                    <br/>

                    In the light of your sweet smile<br></br>
                    And the sparkle in your eyes<br></br>
                    I know that I am truly blessed<br></br>
                    To have you by my side<br></br>
                    <br/>

                    So here&apos;s to us, my love<br/>
                    And to the life we share<br/>
                    I love you more than words can say<br/>
                    And I will always be there
                    
                </pre>
                {/* <div data-aos="fade-up" style={{ textAlign: 'center', padding: '1rem 0', margin: '1rem 0', position: 'relative', display: 'flex', color: currentTheme.subtext }}>
                    <Link href={userinfo.about.resume} target="_blank"><a className={styles.cta4} style={{ background: 'transparent', border: `2px solid ${currentTheme.subtext}`, display: 'flex', alignItems: 'center' }}>{ctaTexts.resumeCTA}&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon width="15px" height="15px" icon={faExternalLinkAlt} /></a></Link>
                </div> */}
            </div>
        </div>
    )
}

export default HomePage
