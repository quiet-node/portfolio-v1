import styled from 'styled-components';
import { device } from '../DeviceSizes/DeviceSizes';

export const SkillsContainer = styled.div`
  position: relative;
  height: 600px;
  background: #fff;
  color: #7510f7;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    height: 550px;
  }
  @media ${device.mobileL} {
    height: 400px;
  }
`;
export const SkillsWrapper = styled.div`
  z-index: 999;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 24px 100px;
  top: -100px;
  width: 850px;
  border-radius: 20px;
  border: 2px solid #e7edf7;
  background-color: #fff;

  @media ${device.tablet} {
    width: 600px;
  }
  @media ${device.mobileL} {
    width: 350px;
    height: 350px;
  }
`;
export const SkillsH1 = styled.h1`
  position: reletave;
  font-size: 36px;
  font-family: 'Rubik', sans-serif;
  text-shadow: 2px 2px rgb(50, 50, 70, 0.5);

  @media ${device.mobileL} {
    font-size: 1.8rem;
  }
`;
export const SkillsRow = styled.div`
  margin-top: 40px;
  width: 800px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    width: 500px;
  }

  @media ${device.mobileL} {
    margin-top: 20px;
    width: 300px;
    height: 230px;
  }
`;
export const SkillsImg = styled.div`
  position: relative;

  @media ${device.tablet} {
    display: none;
  }
`;

export const DividerWrapper = styled.div`
  position: relative;

  @media ${device.tablet} {
    display: none;
  }
`;
export const SkillsVertBar = styled.div`
  border-radius: 20px;
  background: #e7edf7;
  width: 3px;
  height: 200px;
  margin: 25px;

  @media ${device.tablet} {
    display: none;
  }
`;
export const SkillsBarsWrapper = styled.div`
  position: relative;

  @media ${device.tablet} {
    width: 500px;
  }
  @media ${device.mobileL} {
    width: 200px;
    height: 230px;
  }
`;
export const SkillsBar = styled.div`
  position: relative;
  font-weight: bold;
  margin: 25px 25px 25px 85px;
  background-color: #e7edf7;
  display: flex;
  width: 400px;

  @media ${device.tablet} {
    width: 330px;
  }
  @media ${device.mobileL} {
    margin: 10px auto;
    width: 200px;
  }
`;
export const SkillsBarHeadline = styled.div`
  width: 80px;
  text-align: center;
  background-color: #7510f7;
  color: white;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Rubik', sans-serif;
  text-shadow: 3px 3px rgb(50, 50, 70, 0.5);

  @media ${device.tablet} {
    font-size: 15px;
    width: 60px;
    height: 28px;
  }
  @media ${device.mobileL} {
    font-size: 0.75rem;
    width: 53px;
    height: 25px;
  }
`;
export const SkillsBarProgress = styled.div`
  background-color: #7879f1;
  display: block;
  overflow: hidden;
  float: left;
  position: relative;
`;

export const SkillsBarHTML = styled.div``;
export const SkillsBarCSS = styled.div``;
export const SkillsBarReact = styled.div``;
export const SkillsBarJS = styled.div``;
export const SkillsBarJava = styled.div``;
export const SkillsBarFlutter = styled.div``;

export const SkillsBarPercent = styled.div`
  position: absolute;
  right: 0;
  color: #00b793;
  font-weight: normal;
  font-size: 15px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 1.5px 1.5px rgb(50, 50, 70, 0.2);

  @media ${device.tablet} {
    font-size: 15px;
  }
  @media ${device.mobileL} {
    font-size: 12px;
  }
`;
