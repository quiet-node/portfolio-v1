import styled from "styled-components";

export const Divider = styled.div`
  position: relative;
  border-radius: 20px;
  width: 60px;
  height: 3px;
  background: ${({ light }) => (light ? "#7510F7" : "#ffffff")};
  margin-top: 0.2%;
`;
