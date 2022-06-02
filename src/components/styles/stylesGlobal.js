import { createGlobalStyle } from "styled-components";
import styled, {css} from "styled-components";
import { mobile } from "../../responesive";

export default createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        .d-f{
            display: flex;
            }
        .d-n{
          display: none;        
        }
    }
    html{
    scroll-behavior: smooth;
    ${mobile({
      width: "fit-content",
    })}
    }

    .mt-40{
      margin-top: 40px;
    }
    p{
      margin: 0;
    }

    h3{
      margin: 0;
    }
    .ml-4{
      margin-left: 20px;
    }
    .mb-16{
      margin-bottom: 16px;
    }

    .p-16{
      padding: 16px 0;
    }

    .mr-8{
      margin-right: 4px;
    }

    .d-w{
      display: "-webkit-inline-box";
    }
    .mb-100{
      margin-bottom: 100px;
    }
    .ta-c{
      text-align: center;
    }
    .mt-20{
      margin-top: 20px;
    }
`;

export const Heading = styled.p`
  margin: 0;
  padding-top: 40px;
  text-align: center;
  font-family: "IBM Plex Sans";
  font-weight: 700;
  font-size: 28px;
  background: linear-gradient(90.41deg, #d71f26 0.12%, #ff621f 98.41%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  &.heading {
    text-align: left;
  }

  &.p-0 {
    padding-top: 0;
  }
  &.ta-l {
    text-align: left;
  }

  &.mb-100 {
    margin-bottom: 100px;
    ${mobile({
      marginBottom: "20px",
    })}
  }
  ${mobile({
    fontSize: "18px",
    textAlign: "left",
  })}
`;

export const More = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 60px 0 0 0;
  &.mt-40 {
    margin-top: 40px;
    ${mobile({
      marginTop: "0",
    })}
  }
  &.mb-40 {
    margin-bottom: 40px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  margin: auto;
  width: 85%;
`;

export const Button = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.button};
    background-color: ${theme.bg.button};
    ${mobile({
      backgroundColor: "#f73152",
    })}
  `};

  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #adcdff;
    color: #000;
  }
`;
