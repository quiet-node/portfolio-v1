import styled from "styled-components";
import { device } from "../DeviceSizes/DeviceSizes";

export const MessFormContainer = styled.form`
  height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;

  @media ${device.mobileL} {
    width: 400px;
  }
`;
export const MessFormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MessFormH1 = styled.h1`
  position: reletave;
  font-size: 36px;
  font-family: "Rubik", sans-serif;
  color: #7510f7;
  @media ${device.tablet} {
    font-size: 33px;
  }
  @media ${device.mobileL} {
    font-size: 32px;
  }
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 450px;
  margin-top: 50px;

  @media ${device.mobileL} {
    width: 200px;
  }
`;

export const FormInput = styled.input`
  padding: 20px 20px 20px 20px;
  width: 400px;
  border-radius: 3px;
  border: 1px solid lightgray;
  background: #fff;
  font-size: 16px;
  color: rgb(0, 0, 32);
  outline: none;
  color: #9e85b7;

  @media ${device.mobileL} {
    width: 230px;
  }
`;
export const FormTextArea = styled.textarea`
  height: 200px;
  width: 400px;
  max-width: 400px;
  min-height: 200px;
  padding: 20px;
  border-radius: 3px;
  border: 1px solid lightgray;
  background: #fff;
  font-size: 16px;
  color: #9e85b7;
  outline: none;
  @media ${device.mobileL} {
    width: 230px;
  }
`;
export const FormButton = styled.button`
  padding: 28px;
  border: none;
  background-color: #7510f7;
  font-weight: 500;
  font-size: 20px;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-top: -30px;
  font-family: "Rubik", sans-serif;
  border-radius: 10px;

  @media ${device.tablet} {
    font-size: 28px;
    padding: 18px;
  }
  @media ${device.mobileL} {
    font-size: 24px;
    padding: 14px;
  }
`;
