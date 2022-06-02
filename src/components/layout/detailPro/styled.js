import styled from "styled-components";
import { mobile } from "../../../responesive";

export const Detail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: lightgray;
  padding: 0 20px;
  ${mobile({
    flexDirection: "column-reverse",
    width: "100%",
    padding: "20px 10px 0 10px",
    boxSizing: "border-box",
  })}
`;
export const Left = styled.div`
  flex: 1;
`;
export const Right = styled.div`
  flex: 1;
  padding: 30px 0;
  ${mobile({
    padding: "30px 0 0 0",
  })}
`;
export const WrapperImg = styled.div`
  width: 100%;
  ${mobile({
    display: "flex",
    justifyContent:"center",
    alignItems: "center",
  })}
`;
export const Img = styled.img`
  width: 90%;
  object-fit: cover;
  padding: 40px 0;
  ${mobile({
    padding: "0",
    width: "80%",
  })}
`;
export const Title = styled.h3`
  width: 70%;
  font-family: "IBM Plex Sans";
  font-weight: 500;
  font-size: 30px;
  text-transform: uppercase;
  color: #d91f26;
  ${mobile({
    fontSize: "18px",
    width: "100%",
  })}
`;
export const TitleContent = styled.div`
  font-family: "IBM Plex Sans";
  font-weight: 300;
  font-size: 16px;
  line-height: 27px;
  text-transform: uppercase;
  color: #000000;
  text-align: justify;
  ${mobile({
    fontSize: "16px",
    fontFamily: "Arial , sans-serif",
    padding: "20px 0 0 0",
  })}
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & .font {
    ${mobile({
      fontSize: "30px",
      marginBottom: "12px",
    })}
  }
`;
export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Text = styled.div`
  margin-left: 12px;
  font-family: "IBM Plex Sans";
  font-weight: 300;
  font-size: 16px;
  line-height: 27px;
  text-transform: uppercase;
  color: #000000;
  ${mobile({
    fontSize: "16px",
    fontFamily: "Arial , sans-serif",
    fontWeight: "bold",
    marginLeft: "4px",  
    lineHeight: "1.6rem",
    borderBottom: "1px solid #fff"
  })}
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
