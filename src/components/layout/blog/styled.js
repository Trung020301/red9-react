import styled from "styled-components";
import { mobile } from "../../../responesive";

export const Wrapper = styled.div`
  width: calc(60% - 12px);
  min-width: 1140px;
  margin: auto;
  margin-top: 40px;
  ${mobile({
    width: "100%",
    marginTop: "20px",
    minWidth: "auto",
  })}
`;
export const Container = styled.div`
  padding: 0 20px 0 20px;
  ${mobile({
    padding: "0 10px",
  })}
`;
export const ListItem = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    flexDirection: "column",
  })}
`;
export const Item = styled.div`
  width: 32%;
  cursor: pointer;
  transition: all ease-in-out 0.5s;
  &:hover {
    opacity: 0.7;
  }
  ${mobile({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    WebkitBoxShadow: "-2px 6px 12px 1px rgba(0,0,0,0.38)",
    boxShadow: "-2px 6px 12px 1px rgba(0,0,0,0.38)",
    marginBottom: "20px",
  })}
`;

export const Img = styled.img`
  width: 100%;
  margin-bottom: 10px;
  ${mobile({
    width: "100%",
  })}
`;
export const Content = styled.div`
  ${mobile({
    margin: "0 10px 15px 10px",
  })}
`;
export const Title = styled.h3`
  font-family: "IBM Plex Sans";
  font-size: 15px;
  color: #da2326;
  margin-bottom: 4px;
  ${mobile({
    fontSize: "18px",
    color: "#000",
  })}
`;
export const Desc = styled.p`
  font-family: "IBM Plex Sans";
  font-weight: 300;
  font-size: 15px;
  color: #000000;
  ${mobile({
    fontSize: "16px",
    color: "gray",
    fontFamily: "Arial",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "3",
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
    fontSize: "18px",
    padding: "6px 40px",
  })}
`;
