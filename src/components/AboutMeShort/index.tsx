import styles from "./style.module.scss";
import * as React from "react";

export const AboutMeShort: React.FC = () => {
  return (
    <>
      <div className={styles.aboutMe}>
        <div className={styles.aboutMeInfo}>
          <h1 className={styles.aboutMeDescription}>Hi, I'm Amrish</h1>
          <h2 className={styles.aboutMeDescription}>
            I build performant web apps and developer tools.
          </h2>
        </div>
        <div className={styles.aboutMePic}>
          <img
            src="https://miro.medium.com/fit/c/262/262/1*OJElKbiKkdtL_OwcuA9Xsw.jpeg"
            alt="Amrish"
          />
        </div>
      </div>
      <p className={styles.welcomeInfo}>
        Welcome and thanks for stopping by. I have written many articles
        primarily related to frontend development. You can check my blog on blog
        page as well. I hope that you will be benefited by those.
      </p>
    </>
  );
};
