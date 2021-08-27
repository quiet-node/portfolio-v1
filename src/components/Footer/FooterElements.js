import styled from 'styled-components';
import { Link } from 'react-scroll';
import { device } from '../DeviceSizes/DeviceSizes';

export const FooterContainer = styled.div`
  position: relative;
  height: 300px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: -75px;
`;
export const FooterBox = styled.div`
  z-index: 999;
  position: absolute;
  top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #141c3a;

  color: #fff;
  width: 600px;
  border-radius: 20px;
  box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);

  @media ${device.tablet} {
    width: 500px;
  }
  @media ${device.mobileL} {
    width: 330px;
  }
`;
export const FooterH1 = styled.h1`
  position: absolute;
  top: 20px;
  font-family: 'Lato', sans-serif;
  text-shadow: 3px 3px rgb(50, 50, 70, 1);

  @media ${device.tablet} {
    font-size: 2rem;
  }
  @media ${device.mobileL} {
    font-size: 1.3rem;
    top: 30px;
  }
`;
export const FooterButton = styled(Link)`
  position: absolute;
  bottom: 30px;
  height: 40px;
  width: 250px;
  border-radius: 25px;
  font-size: 1.2rem;
  color: #fff;
  border: 2px solid #7510f7;
  background-color: #141c3a;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  text-shadow: 2px 2px rgb(50, 50, 70, 0.5);

  &:hover {
    background-color: #7510f7;
  }

  @media ${device.tablet} {
    font-size: 1.3rem;
  }
  @media ${device.mobileL} {
    font-size: 1.1rem;
    bottom: 35px;
  }
`;
export const FooterQuote = styled.div`
  position: absolute;
  bottom: 25px;
  font-size: 20px;
  color: #9e85b7;
  font-family: 'Roboto', sans-serif;
  text-shadow: 1.2px 1.2px rgb(50, 50, 70, 0.2);

  @media ${device.tablet} {
    font-size: 1.3rem;
  }
  @media ${device.mobileL} {
    font-size: 0.55rem;
  }
`;
export const FooterFooter = styled.div`
  position: absolute;
  bottom: -40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    font-size: 1rem;
  }
  @media ${device.mobileL} {
    font-size: 0.65rem;
    bottom: -30px;
  }
`;
export const Footerimg = styled.a`
  margin-right: 20px;
  cursor: pointer;
`;
export const FooterSpan = styled.span`
  font-weight: bold;
  color: #00b793;
  font-family: 'Roboto', sans-serif;

  &:hover {
    color: #7510f7;
    cursor: pointer;
  }
`;

export const FooterToTop = styled(Link)`
  position: absolute;
  bottom: 72px;
  border: 1px solid #e7edf7;
  font-size: 35px;
  color: #fff;
  background-color: #00b793;
  cursor: pointer;
  box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: #7510f7;
  }
`;

export const FooterLast = styled.div`
  position: absolute;
  font-size: 0.6rem;
  bottom: -68px;
  font-weight: bold;
  color: #9e85b7;
  font-family: 'Rubik', sans-serif;
  text-shadow: 1.2px 1.2px rgb(50, 50, 70, 0.2);

  @media ${device.mobileL} {
    bottom: -50px;
  }
`;
export const LastSpan = styled.span`
  font-weight: bold;
  color: #00b793;
  font-family: 'Rubik', sans-serif;
`;
