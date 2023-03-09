import { Stack, Input, Textarea, useToast } from "@chakra-ui/react";
import styles from "../styles/Contact.module.css";
import { userinfo, headings, ctaTexts } from "../Constants/userinfo";
import ReactPlayer from "react-player";

const Contact = ({ currentTheme }) => {
  const toast = useToast();

  const iconStyles = {
    backgroundColor: currentTheme.tertiary,
    color: "#101010",
    boxShadow: currentTheme.boxShadow,
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactHeading}>
        <h2 className={styles.contact}>{headings.contact}</h2>
      </div>
      <div className={styles.playerWrapper}>
        <ReactPlayer className={styles.reactPlayer} width='100%'
          height='100%' url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      </div>
    </div>
  );
};

export default Contact;
