import styled from "styled-components";
import { mobile } from "../../responesive";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0;
  background: #fff;
  font-family: "Arvo", serif;
  ${mobile({
    padding: "20px 0",
  })}
`;
export const Title = styled.h3`
  text-align: center;
  font-size: 72px;
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgBG = styled.div`
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  & > p {
    font-style: italic;
  }
  & > h3 {
    font-size: 40px;
    font-weight: 300;
    font-family: "Courier New", Courier, monospace;
    ${mobile({
      fontSize: "32px",
      textAlign: "center",
    })}
  }
`;

export const ButtonGoBack = styled.button`
  padding: 10px 20px;
  color: #000;
  background-color: lightblue;
  border: none;
  font-size: 20px;
  transition: all ease-in .4s;
  cursor: pointer;
  &:hover{
    color: #fff;
    background-color: #4d8bf0;
  }
`;
