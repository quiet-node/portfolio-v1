import styled from "styled-components";
import { Link } from "react-scroll";
import { device } from "../DeviceSizes/DeviceSizes";

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
    width: 350px;
  }
`;
export const FooterH1 = styled.h1`
  position: absolute;
  top: 20px;
  font-family: "Lato", sans-serif;

  @media ${device.tablet} {
    font-size: 2rem;
  }
  @media ${device.mobileL} {
    font-size: 1.3rem;
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
  font-family: "Lato", sans-serif;

  &:hover {
    background-color: #7510f7;
  }

  @media ${device.tablet} {
    font-size: 1.3rem;
  }
  @media ${device.mobileL} {
    font-size: 1.1rem;
  }
`;
export const FooterQuote = styled.div`
  position: absolute;
  bottom: 25px;
  font-size: 20px;
  color: #9e85b7;
  font-family: "Roboto", sans-serif;

  @media ${device.tablet} {
    font-size: 1.3rem;
  }
  @media ${device.mobileL} {
    font-size: 0.65rem;
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
  }
`;
export const Footerimg = styled.a`
  margin-right: 20px;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    box-shadow: 0px 0 4px 5px rgba(0, 0, 0, 0.25);
  }
`;
export const FooterSpan = styled.span`
  font-weight: bold;
  color: #00b793;
  font-family: "Roboto", sans-serif;

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
  font-family: "Rubik", sans-serif;
`;
export const LastSpan = styled.span`
  font-weight: bold;
  color: #00b793;
  font-family: "Rubik", sans-serif;
`;
