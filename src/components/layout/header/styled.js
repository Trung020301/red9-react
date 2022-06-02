import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../../../../src/responesive";

export const NavLink = styled(Link)`
  transition: all ease 0.5s;
  text-decoration: none;
  color: inherit;
  &:hover {
    /* color: red; */
    /* border-bottom: 1px solid #d71f26; */
  }
  &.lastChild {
    border: none;
    color: #fff;
    background: linear-gradient(91.25deg, #d71f26 0%, #ff621f 99.52%);
    border-radius: 53px;
    padding: 3px 14px;
    font-size: 16px;
    height: 63px;
    ${mobile({
      color: "#fff",
      background: "none",
      fontSize: "inherit",
      textTransform: "uppercase",
      padding: "0",
    })}
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Icon = styled.div`
  display: none;
  &:hover {
    background-color: #fccaef;
  }
  ${mobile({
    display: "block",
    zIndex: "100",
    padding: "18px 20px",
    marginLeft: "350px",
  })}
`;

export const Container = styled.div`
  width: calc(60% - 12px);
  min-width: 1140px;
  margin: auto;
  height: 70px;
  ${mobile({
    backgroundColor: "#ffcfcf",
    zIndex: "30",
    position: "fixed",
    width: "100%",
    minWidth: "auto",
    height: "auto",
  })}
`;

export const Nav = styled.div`
  display: flex;
  /* padding: 10px 20px; */
  /* line-height: 70px; */
  height: 100%;
  align-items: center;
  ${mobile({
    flexDirection: "column",
    padding: "0",
    width: "100%",
    position: "relative",
  })}
`;
export const Logo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-right: 100px; */
  cursor: pointer;
  &.firstChild {
    &:hover ${NavLink} {
      /* border: none; */
    }
  }
  ${mobile({
    position:"absolute",
    width: "150px",
    left: "10px",
    padding: "15px 0"
  })}
`;

export const WrapperItem = styled.div`
  flex: 3;
  display: flex;
  justify-content: end;
  transition: all ease-in .5s;
  /* gap: 40px; */
  align-items: center;
  /* position: relative; */
  cursor: pointer;
  ${mobile({
    flexDirection: "column",
    width: "100%",
    display: "none",
    alignItems: "normal",
  })}

  & .d-f{
    display: flex;
  }
`;

export const Item = styled.div`
  font-family: "IBM Plex Sans";
  font-weight: 500;
  font-size: 16px;
  color: #d71f26;
  transition: all ease-in .4s;
  padding: 25px 40px;
  &:first-child{
    ${mobile({
      borderTop: "1px solid #fff",
    })}
  }
  &:hover {
    background-color: #f0c0e9;
    color: #fff;
    ${mobile({
      backgroundColor: "#f0c2aa",
      color: "#ff5600",
    })}
  }
  ${mobile({
    color: "#fff",
    padding: "20px 20px",
    borderBottom: "1px solid #fff",
  })}

  &:nth-child(6){
    ${mobile({
      display: "none",
    })}
  }
  
`;

export const Img = styled.img`
  width: 95%;
  object-fit: cover;
  ${mobile({
  })}
`;
