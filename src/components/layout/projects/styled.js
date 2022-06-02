import styled from "styled-components";
import { mobile } from "../../../responesive";

export const Wrapper = styled.div`
  width: calc(60% - 12px);
  min-width: 1140px;
  margin: auto;
  ${mobile({
    width: "100%",
    minWidth: "auto",
  })}
`;
export const Container = styled.div`
  padding: 20px 20px 0px 20px;
  ${mobile({
    padding: "20px 10px",
  })}
`;
export const ListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  ${mobile({})}
`;
export const Item = styled.div`
  width: 32%;
  margin-bottom: 40px;
  cursor: pointer;
  transition: all ease-in-out 0.5s;
  ${mobile({
    width: "100%",
    WebkitBoxShadow: "1px 4px 9px 1px rgba(0,0,0,0.27)",
    boxShadow: "1px 4px 9px 1px rgba(0,0,0,0.27)",
    borderRadius: "4px"
  })}
`;
export const Img = styled.img`
  width: 100%;

  &:hover {
    transition: all ease-in-out 0.5s;
    opacity: 0.7;
  }
  ${mobile({
    width: "90%",
    padding: "16px 10px 0 16px",
  })}
`;
export const Content = styled.div`
  ${mobile({
    textAlign: "center",
    paddingBottom: "10px"
  })}
`;
export const Title = styled.div`
  font-family: "IBM Plex Sans";
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  ${mobile({
    fontSize: "18px",
    fontWeight: "600",
  })}
`;
export const Desc = styled.div`
  font-family: "IBM Plex Sans";
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
  ${mobile({
    fontSize: "16px",
    fontFamily: "Arial",
    color: "gray",
    textTransform: "lowercase",
  })}
`;

export const Text = styled.div`
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
