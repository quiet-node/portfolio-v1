import styled from 'styled-components';

export const IntroContainer = styled.div`
  z-index: 3;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

export const IntroH1 = styled.h1`
  color: #7510f7;
  font-size: 40px;
  text-align: center;
  font-family: 'Rubik', sans-serif;
  text-shadow: 4px 4px rgb(50, 50, 70, 0.2);

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const IntroSpan = styled.span`
  color: #00b793;
`;

export const IntroP = styled.p`
  color: #00b793;
  margin-top: 30px;
  font-size: 20px;
  text-align: center;
  max-width: 600px;
  font-style: italic;
  font-weight: 300;
  font-family: 'Ubuntu', sans-serif;
  text-shadow: 1.5px 1.5px rgb(50, 50, 70, 0.2);

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const IntroBtnWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
