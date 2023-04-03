import HeadTag from "../Components/HeadTag";
import styles from "../styles/Home.module.css"

const work = ({ currentTheme }) => {
  return (
    <>
      <HeadTag page="Work" />
      <div className={styles.letterContainer}>
        Hi Baby, <br /> <br />
        I know you already brag about so many things which I have learned because of you. And you have indeed added so many values to my life. For some of the things, I&apos;m still in the accepting and learning stage. Like keeping the room tidy. I know how much that irritates you. But at the end of the day, I have a clean room to live in no matter who cleans it. And it must be a positive change for sure. 
        <br /> <br/>
        Another thing which I picked up from you is how to shop efficiently. And you have to admit that I have become a pro at that. You taught me to value money more basically. And I know these are such common things to say or point out. But if a partner doesn’t bring value to life then it’s better to be on my own. So I’m saying that I love you for trying to put those good qualities in me. Thank you for keeping my room and a little bit of my life organized. 
        <br /> <br />
        And I hope that I get to bring some positive changes in your life as well. Because we learn together, we grow together. <br /> <br />
        Yours Pengu ♥️
      </div>
    </>
  );
};

export default work;
