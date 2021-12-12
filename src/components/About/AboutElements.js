import styled from "styled-components";
import { device } from "../DeviceSizes/DeviceSizes";

export const AboutContainer = styled.div`
  z-index: 3;
  color: #fff;
  background: #7510f7;
  position: relative;
  height: 500px;
`;
export const AboutText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 50px 24px 256px;
`;

export const AboutH1 = styled.h1`
  position: reletave;
  font-size: 36px;
  font-family: "Rubik", sans-serif;
  text-shadow: 4px 4px rgb(50, 50, 70, 0.5);

  @media ${device.tablet} {
    font-size: 33px;
  }
  @media ${device.mobileL} {
    font-size: 32px;
  }
`;

export const AboutP = styled.p`
  margin-top: 2.5%;
  width: 60%;
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  max-width: 600px;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  text-shadow: 3px 3px rgb(50, 50, 70, 0.5);

  @media ${device.tablet} {
    margin-top: 6%;
    font-size: 21px;
  }
  @media ${device.mobileL} {
    margin-top: 4%;
    font-size: 18px;
  }
`;

export const AboutSpan = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: normal;

  @media ${device.tablet} {
    display: none;
  }
`;
