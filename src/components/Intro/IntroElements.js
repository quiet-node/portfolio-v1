import styled from "styled-components";
import { MdArrowDownward } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export const IntroContainer = styled.div`
  z-index: 3;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  background-color: cyan;
`;

export const IntroH1 = styled.h1`
  color: #7510f7;
  font-size: 40px;
  text-align: center;
  font-family: "Rubik", sans-serif;
  background-color: lightblue;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const IntroSpan = styled.span`
  color: #00b793;
  background-color: lightcoral;
`;

export const IntroP = styled.p`
  color: #7510f7;
  margin-top: 5px;
  font-size: 20px;
  text-align: center;
  max-width: 600px;
  font-family: "Ubuntu", sans-serif;
  background-color: lightblue;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const IntroBtnWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightcoral;
`;
export const ArrowDown = styled(IoIosArrowDown)`
  margin-left: 4px;
  font-size: 18px;
  background-color: lightgreen;
`;
export const ArrowDownward = styled(MdArrowDownward)`
  margin-left: 4px;
  font-size: 18px;
  background-color: lightgreen;
`;

export const ImgWrapper = styled.div`
  position: relative;
  top: 150px;
  background-color: lightseagreen;
`;
