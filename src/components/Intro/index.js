import React, { useEffect } from 'react';
import { Button } from '../buttonElements';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  IntroContainer,
  IntroH1,
  IntroP,
  IntroBtnWrapper,
  IntroSpan,
} from './IntroElements';

const Intro = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <IntroContainer id='intro'>
      <IntroH1 data-aos='fade-down'>
        <IntroSpan>Logan</IntroSpan>'s Programming Languages{' '}
        <IntroSpan>(PL)</IntroSpan> Work Site
      </IntroH1>
      <IntroP data-aos='fade-right' data-aos-delay='400'>
        CSC 344 -- Programming Languages -- Fall 2021
      </IntroP>
      <IntroP data-aos='fade-right' data-aos-delay='400'>
        Professor: <strong>Graci, Craig</strong>
      </IntroP>
      <IntroBtnWrapper data-aos='fade-up' data-aos-delay='500'>
        <Button to='about' smooth={true} duration={800}>
          About
        </Button>

        <Button to='project' smooth={true} duration={800}>
          Projects
        </Button>
      </IntroBtnWrapper>
    </IntroContainer>
  );
};

export default Intro;
