import React, { useEffect } from "react";
import { Divider } from "../Divider";
import {
  AboutContainer,
  AboutH1,
  AboutP,
  AboutText,
  AboutSpan,
} from "./AboutElements";
import Aos from "aos";
import "aos/dist/aos.css";

const About = ({ horiW, horiH }) => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <AboutContainer id="about">
      <AboutText>
        <AboutH1 data-aos="fade-right"> About. </AboutH1>
        <Divider
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="300"
          horiW="true"
          horiH="true"
        />
        <AboutP data-aos="fade-right" data-aos-offset="300">
          {" "}
          An avid lover of technology who is always passionate about researching
          and exploring new creative technology and its usefulness to bring
          comfort in every aspect of human life.{" "}
          <AboutSpan>
            {" "}
            An individual with a solid ability and ambition to learn new
            technologies quickly, solve problems creatively and proactively, and
            willingness to work under pressure.{" "}
          </AboutSpan>
        </AboutP>
      </AboutText>
    </AboutContainer>
  );
};

export default About;
