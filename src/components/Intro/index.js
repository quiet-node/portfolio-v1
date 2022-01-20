import React, { useState, useEffect } from 'react';
import { Button } from '../buttonElements';
import { ReactComponent as IntroPic } from '../../images/introPic.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  IntroContainer,
  IntroH1,
  IntroP,
  IntroBtnWrapper,
  IntroSpan,
  ArrowDown,
  ArrowDownward,
  ImgWrapper,
} from './IntroElements';

const Intro = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <IntroContainer id='intro'>
      <IntroH1 data-aos='fade-down'>
        Howdy 👋 It's <IntroSpan>Logan</IntroSpan> ;)
      </IntroH1>
      <IntroP data-aos='fade-right' data-aos-delay='400'>
        Senior CS Student at <IntroSpan>SUNY Oswego</IntroSpan>
      </IntroP>
      <IntroBtnWrapper data-aos='fade-up' data-aos-delay='500'>
        <Button
          to='about'
          smooth={true}
          duration={800}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        >
          More about me! {hover ? <ArrowDownward /> : <ArrowDown />}
        </Button>
      </IntroBtnWrapper>
      <ImgWrapper data-aos='fade-up' data-aos-delay='600'>
        <IntroPic />
      </ImgWrapper>
    </IntroContainer>
  );
};

export default Intro;
