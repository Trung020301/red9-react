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
`
export const Container = styled.div`
  padding: 0 20px 20px 20px;
  ${mobile({
    padding: "0 10px",
  })}
`;
export const Title = styled.h3`
  font-family: "IBM Plex Sans";
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  color: #d91f26;
  margin-bottom: 20px;
  ${mobile({
    marginBottom: "30px",
    marginTop: "-40px",
    fontSize: "18px",
    textTransform : "uppercase",
  })}
`;
export const ListItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;
export const Item = styled.div`
    width: 32%;
    margin-bottom: 20px;
    transition: all ease-in-out .5s;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
    ${mobile({
      width: "100%",
      marginBottom:"30px"
    })}
`;
export const Img = styled.img`
    width: 100%;
`;
export const Text = styled.div`
    color: #fff;
  background: linear-gradient(91.25deg, #d71f26 0%, #ff621f 99.52%);
  border-radius: 53px;
  padding: 4px 20px;
  font-family: "IBM Plex Sans";
  font-weight: 300;
  transition: all ease-in-out 0.5s;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  ${mobile({
    padding: "6px 40px",
    fontSize: "16px"
  })}
`;
