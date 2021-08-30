import React, { useEffect } from 'react';
import { Divider } from '../Divider';

import {
  AboutContainer,
  AboutH1,
  AboutP,
  AboutText,
  AboutSpan,
  IntroBtnWrapper,
  Button,
  ColorText,
} from './AboutElements';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = ({ horiW, horiH }) => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <AboutContainer id='about'>
      <AboutText>
        <AboutH1 data-aos='fade-right'> About this page. </AboutH1>
        <Divider
          data-aos='fade-left'
          data-aos-offset='200'
          data-aos-delay='300'
          horiW='true'
          horiH='true'
        />
        <AboutP data-aos='fade-right' data-aos-offset='300'>
          {' '}
          This page presents documents pertaining to my work in the{' '}
          <ColorText> Programming Languages (PL) </ColorText> course. Some of
          the documents represent work on{' '}
          <ColorText>programming assignments, code and demos. </ColorText>{' '}
          <AboutSpan>
            {' '}
            Some of the documents represent work on{' '}
            <ColorText>problem sets </ColorText>, including{' '}
            <ColorText>language description exercises</ColorText> and{' '}
            <ColorText>assorted essays</ColorText> pertaining to programming
            languages. The work is presented chronologically with respect to{' '}
            <ColorText>due dates</ColorText>, and is clearly identified by means
            of <ColorText>metatext</ColorText> and{' '}
            <ColorText>hypertext.</ColorText>
          </AboutSpan>
        </AboutP>
        <IntroBtnWrapper data-aos='fade-up' data-aos-delay='500'>
          <Button to='project' smooth={true} duration={800}>
            Projects
          </Button>
        </IntroBtnWrapper>
      </AboutText>
    </AboutContainer>
  );
};

export default About;
