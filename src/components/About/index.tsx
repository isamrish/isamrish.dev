import * as React from "react";
import "./style.scss";
export const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-profile-pic">
          <img
            src="https://miro.medium.com/fit/c/262/262/1*OJElKbiKkdtL_OwcuA9Xsw.jpeg"
            alt="Amrish"
          />
        </div>
        <div className="about-info">
          <h2 className="about-info__label1">About me</h2>
          <p className="about-info__label2">Welcome to my website</p>

          <h1 className="about-info__name">I am Amrish Kushwaha</h1>
          <h2 className="about-info__occupation">
            Software Engineer, Maker, Writer
          </h2>
        </div>
      </div>
      <div className="about-more-info">
        <p className="about-more-info__description">
          I am currently focused on frontend development with curiosity of
          building end to end software system. Currently I am working at{" "}
          <a href="https://rafay.co" target="_blank">
            Rafay Systems
          </a>
          . I love to write as well as build side projects when I am free.
        </p>
        <div className="about-more-info__socials">
          <a
            className="about-more-info__social-link"
            href="https://github.com/isamrish"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="about-more-info__social-link"
            href="https://isamrish.medium.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
        </div>
      </div>
    </>
  );
};
