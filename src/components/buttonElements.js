import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#7510F7" : "#fff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 45px" : "12px 28px")};
  color: ${({ dark }) => (dark ? "#fff" : "#7510F7")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 1px solid #7510f7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  font-family: "Ubuntu", sans-serif;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#7510F7")};
    background: #7510f7;
    color: #fff;
  }
`;
