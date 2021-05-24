import React, { useEffect, useState } from "react";
import gethubIcon from "../../images/icons/github.png";
import linkedinIcon from "../../images/icons/Linkedin.png";
import mailIcon from "../../images/icons/mail.png";
import twitterIcon from "../../images/icons/twitter.png";
import { CgMoveUp } from "react-icons/cg";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  FooterContainer,
  FooterBox,
  FooterH1,
  FooterButton,
  FooterQuote,
  FooterFooter,
  Footerimg,
  FooterSpan,
  FooterToTop,
  FooterLast,
  LastSpan,
} from "./FooterElements";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const clicky = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FooterContainer>
      <FooterBox data-aos="zoom-in" data-aos-delay="400">
        <FooterH1>Interested in talking more techy?</FooterH1>
        <FooterButton
          to="contact"
          smooth={true}
          duration={1000}
          onClick={clicky}
        >
          Start a conversation
        </FooterButton>
      </FooterBox>
      <FooterQuote data-aos="fade-down" data-aos-delay="400">
        "<FooterSpan>Gaining </FooterSpan> 1% better per day but{" "}
        <FooterSpan>persistently</FooterSpan> is really the most{" "}
        <FooterSpan>efficient</FooterSpan> process ever."
      </FooterQuote>
      <FooterFooter>
        <Footerimg
          data-aos="fade-up"
          data-aos-delay="500"
          href="https://github.com/lgad31vn"
        >
          {" "}
          <img src={gethubIcon} alt="github" width="40px" height="40px"></img>
        </Footerimg>
        <Footerimg
          data-aos="fade-up"
          data-aos-delay="550"
          href="https://www.linkedin.com/in/logannguyen98/"
        >
          <img
            src={linkedinIcon}
            alt="Linkedin"
            width="40px"
            height="40px"
          ></img>
        </Footerimg>
        <Footerimg
          data-aos="fade-up"
          data-aos-delay="600"
          href="mailto: nnguyen6@oswego.edu"
        >
          <img src={mailIcon} alt="mail" width="40px" height="40px"></img>
        </Footerimg>
        <Footerimg
          data-aos="fade-up"
          data-aos-delay="650"
          href="https://twitter.com/lgad31vn"
        >
          <img src={twitterIcon} alt="Twitter" width="40px" height="40px"></img>{" "}
        </Footerimg>
      </FooterFooter>
      <FooterToTop
        data-aos="zoom-in"
        data-aos-delay="400"
        to="intro"
        smooth={true}
        duration={1000}
      >
        <CgMoveUp />
      </FooterToTop>
      <FooterLast data-aos="fade-up" data-aos-delay="400">
        NAM <LastSpan>(LOGAN)</LastSpan> NGUYEN @2021
      </FooterLast>
    </FooterContainer>
  );
};

export default Footer;
