import styled from "styled-components";
import { mobile } from "../../../responesive";
export const Icon = styled.div`
  position: absolute;
  padding: 30px 5px;
  background-color: rgba(192, 190, 191, 0.5);
  top: 40%;
  color: #525354;
  cursor: pointer;
  left: ${(props) => (props.direction === "left" ? "0px" : "none")};
  right: ${(props) => (props.direction === "right" ? "0px" : "none")};
  z-index: 3;
  transition: all ease 0.4s;
  display: none;
  &:hover {
    color: #fff;
    background-color: rgba(140, 208, 244, 0.4);
  }
`;

export const Wrapper = styled.div`
  width: calc(60% - 12px); 
  min-width: 1140px;
  margin: auto;
  overflow: hidden;
  ${mobile({
    display: "none",
    
  })}
`;
export const Container = styled.div`

`;

export const WrapperSlider = styled.div`
  width: 100%;
  height: 468px;
  transition: all ease-in 1.4s;
  position: relative;
  &:hover ${Icon} {
    display: block;
  }
`;
export const ListSlide = styled.div`
  width: 500%;
  display: flex;
  transition: all ease-in-out 1.5s;
  position: relative;
  transform: translateX(${(props) => props.slideIndex * -20}%);
`;
export const Slide = styled.div`
  width: 100%;
  height: 468px;
  cursor: pointer;
`;
export const Img = styled.img`
  width: 100%;
  height: inherit;
  object-fit: cover;
  transition: all ease-in-out 0.5s;
  &:hover {
    opacity: 0.7;
  }
`;
