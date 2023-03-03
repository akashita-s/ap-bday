import styles from '../styles/NavbarFooter.module.css';
import { userinfo } from '../Constants/userinfo'
import Link from 'next/link'

const Footer = ({ currentTheme }) => {
    return (
        <div className={styles.footermain} style={{ backgroundColor: currentTheme.footerColor, color: currentTheme.subtext }}>
            <div className={styles.footertable}>
                <Link href='/'><a><h2 className={styles.footerlogo}>{userinfo.logoText}</h2></a></Link>
                <ul>
                    <li className={styles.listHeading}>I</li>
                    {userinfo.socials ?
                        userinfo.socials.map((social, key) => {
                            return (
                                <Link href={social.link} key={key}><a><li>{social.type}</li></a></Link>
                            )
                        }) : null
                    }
                    {/* <Link href={`mailto:${userinfo.contact.email ? userinfo.contact.email : ''}`}><a><li>Mail</li></a></Link> */}
                </ul>
                <Link href='/'><a><h2 className={styles.footerlogo}>CUTU</h2></a></Link>
            </div>
            <hr style={{ height: '1px', backgroundColor: currentTheme.subtext, border: 'none', opacity: '0.5' }}></hr>
            <h2 className={styles.footercontent}>Made with love by Candy ♥️</h2>
        </div>
    )
}

export default Footer
