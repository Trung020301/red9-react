import styled from "styled-components";
import { mobile } from "../../../responesive";

export const Wrapper = styled.div`
  width: calc(60% - 12px);
  min-width: 1140px;
  margin: auto;
  ${mobile({
    width: "100%",
    paddingTop: "60px",
    margin: "0",
    minWidth: "auto",
  })}
`;
export const Container = styled.div`
  padding: 50px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    padding: "20px 10px",
    flexDirection: "column",
  })}
`;

export const Content = styled.p`
  font-family: "IBM Plex Sans";
  font-weight: 300;
  font-size: 16px;
  line-height: 1.6rem;
  text-transform: uppercase;
  color: #000000;
  text-align: justify;
  ${mobile({
    fontSize: "16px", 
    // textAlign: "left",
    textAlign: "justify",
    fontFamily: "Arial , sans-serif"

  })}
`;

export const Title = styled.h3`
  font-family: "IBM Plex Sans";
  font-weight: 500;
  font-size: 28px;
  text-transform: uppercase;
  color: #d91f26;
  margin-bottom: 20px;
  ${mobile({
    fontSize: "18px",
  })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
  ${mobile({
    // marginLeft: "20px",
    width: "100%",
  })}
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({
    margin: "20px 0",
  })}
`;
export const Icon = styled.img`
  width: 5%;
  align-self: center;
  &.mt-5 {
    margin-top: -4px;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    flexDirection: "column",
  })}
`;

export const WrapperImg = styled.div`
  ${mobile({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  })}
`;
export const Img = styled.img`
  width: 100%;
  ${mobile({
    width: "90%",
  })}
`;
