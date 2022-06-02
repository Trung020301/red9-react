import styled, { keyframes } from "styled-components";
import { mobile } from "../../responesive";

// key frames
const appear = keyframes`
  from  {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const GoTopBtn = styled.div`
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 70px;
  right: 40px;
  transition: all ease-in 0.5s;
  animation: ${appear} linear 1s;
  display: ${(props) => (props.display ? "block" : "none")};
  ${mobile({
    width: "60px",
    height: "60px",
    zIndex: "99",
    bottom: "100px",
    right: "20px",
  })}
`;
export const WrapperBtn = styled.div`
  transition: all ease-in 0.5s;
  width: 100%;
  background-color: #bcf073;
  border-radius: 50%;
  font-size: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & .font {
    ${mobile({
      width: "40px",
      height: "40px",
    })}
  }
  &:hover {
    background-color: #9ced2b;
  }
`;
