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
          height='100%' url="https://www.youtube.com/watch?v=6ayyfucIl6M" />
      </div>
      <div className={styles.gap}></div>
      <div className={styles.playerWrapper}>
        <ReactPlayer className={styles.reactPlayer} width='100%'
          height='100%' url="https://www.youtube.com/watch?v=ElZfdU54Cp8" />
      </div>
      <div className={styles.gap}></div>
      <div className={styles.playerWrapper}>
        <ReactPlayer className={styles.reactPlayer} width='100%'
          height='100%' url="https://www.youtube.com/watch?v=mkR_Qwix4Ho" />
      </div>
    </div>
  );
};

export default Contact;
