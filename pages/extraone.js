import HeadTag from "../Components/HeadTag";
import styles from "../styles/Home.module.css"

const work = ({ currentTheme }) => {
  return (
    <>
      <HeadTag page="Work" />
      <div className={styles.letterContainer}>
        As I sit down to write this, my heart is overflowing with love and
        gratitude for you. I feel so lucky to have you in my life, and I cherish
        every moment we spend together. You are the kindest, most caring person
        I have ever met, and your love has brought so much light and happiness
        into my world.
        <br />
        You have supported me through thick and thin, and I am in awe of your
        unwavering strength and resilience. Your ability to see the best in
        people and to offer kindness and compassion even in the face of
        adversity is truly inspiring. I feel so blessed to have you as my
        partner, my confidant, and my best friend.
        <br />
        With every passing day, my love for you grows stronger. Your smile, your
        laughter, and your gentle touch fill me with joy and warmth, and I can&apos;t
        imagine life without you. Thank you for being the most amazing boyfriend
        I could ever ask for. I love you more than words can express.
      </div>
    </>
  );
};

export default work;
