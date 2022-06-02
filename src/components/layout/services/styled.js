import styled from "styled-components";
import { mobile } from "../../../responesive";

export const Wrapper = styled.div`
  width: calc(60% - 12px);
  margin: auto;
  min-width: 1140px;
  ${mobile({
    paddingTop: "60px",
    width: "100%",
    minWidth: "auto",
  })}
`;
export const Container = styled.div`
  padding: 0 20px;
  ${mobile({
    padding: "0 10px",
  })}
`;

export const ListItem = styled.div`
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    padding: "0",
  })}
`;

export const WrapperImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ffcfcf;
  border-radius: 12px;
  transition: all ease-in-out 0.5s;
`;
export const Img = styled.img`
  width: 94%;
  padding: 49px 11px;
  transition: all ease-in-out 0.5s;
  ${mobile({
    padding: "0",
    width: "90%",
  })}
`;
export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4px;
`;
export const Title = styled.p`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #d91f26;
  margin: 4px 0 0 0;
  transition: all ease 0.4s;
  ${mobile({
    fontSize: "16px",
    marginBottom: "4px",
  })}
`;
export const Desc = styled.p`
  font-family: "Arial", sans-serif;
  font-size: 14px;
  color: gray;
  margin: 0;
  transition: all ease 0.4s;
  font-style: italic;
  ${mobile({
    fontSize: "14px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
  })}
`;

export const MoreText = styled.a`
  display: none;
  ${mobile({
    color: "#3d80e6",
    fontFamily: "Arial",
    fontSize: "14px",
    display: "block",
    fontStyle: "italic",
    textDecoration: "underline",
  })}
`;

export const Item = styled.div`
  width: 32%;
  margin-top: 40px;
  cursor: pointer;
  ${mobile({
    width: "100%",
    margin: "20px 0",
  })}
  &:hover ${Img} {
    transform: scale(1.1);
  }
  &:hover ${Title} {
    color: red;
  }
  &:hover ${Desc} {
    color: #000;
  }
  &:hover ${WrapperImg} {
    background-color: transparent;
  }
`;

export const Text = styled.p`
  color: #fff;
  background: linear-gradient(91.25deg, #d71f26 0%, #ff621f 99.52%);
  border-radius: 53px;
  padding: 6px 30px;
  font-family: "IBM Plex Sans";
  font-weight: 300;
  transition: all ease-in-out 0.5s;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }

  ${mobile({
    fontSize: "16px",
    padding: "6px 40px",
  })}
`;
