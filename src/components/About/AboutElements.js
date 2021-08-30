import styled from 'styled-components';
import { device } from '../DeviceSizes/DeviceSizes';
import { Link } from 'react-scroll';

export const AboutContainer = styled.div`
  z-index: 3;
  color: #fff;
  background: #7510f7;
  position: relative;
  height: 127vh;
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
  font-family: 'Rubik', sans-serif;
  text-shadow: 4px 4px rgb(50, 50, 70, 0.5);

  @media ${device.tablet} {
    font-size: 33px;
  }
  @media ${device.mobileL} {
    font-size: 32px;
  }
`;
export const ColorText = styled.span`
  color: #49fce3;
  font-weight: bold;
`;

export const AboutP = styled.p`
  margin-top: 25px;
  padding-top: 45px;
  width: 60%;
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  max-width: 600px;
  font-family: 'Roboto', sans-serif;
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
  font-family: 'Roboto', sans-serif;
  font-weight: normal;

  @media ${device.tablet} {
    display: none;
  }
`;

export const IntroBtnWrapper = styled.div`
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#7510F7' : '#fff')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 45px' : '12px 28px')};
  color: ${({ dark }) => (dark ? '#fff' : '#7510F7')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: 1px solid #7510f7;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  font-family: 'Ubuntu', sans-serif;
  border-radius: 5px;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #00b793;
    color: #fff;
  }
`;
