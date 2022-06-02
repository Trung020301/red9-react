import styled from "styled-components";
import { mobile } from "../../../responesive";

export const Wrapper = styled.div`
  width: calc(60% - 12px);
  min-width: 1140px;
  margin: auto;
  background-color: #f8f8f8;
  ${mobile({
    width: "100%",
    minWidth: "auto",
  })}
`;
export const Container = styled.div`
  padding: 0 20px;
  ${mobile({
    padding: "0",
    width: "100%",
  })}
`;
// Top
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  ${mobile({
    flexDirection: "column",
  })}
`;
export const Left = styled.div`
  flex: 1;
  padding: 0 80px;
  ${mobile({
    padding: "0 20px",
  })}
`;
export const Desc = styled.p`
  font-family: "IBM Plex Sans";
  font-size: 18px;
  text-align: justify;
  color: gray;
  transition: all ease-out 0.4s;
  &:hover {
    color: #000;
  }
  ${mobile({
    fontSize: "18ox",
    marginTop: "20px",
    color: "#000",
  })}
`;
export const DescTop = styled.div`
  font-family: "IBM Plex Sans";
  font-weight: 300;
  color: gray;
  font-size: 15px;
  transition: all ease 0.4s;
  ${mobile({
    fontSize: "16px",
    textAlign: "justify",
  })}
`;
// Top -Right
export const Right = styled.div`
  flex: 1;
  padding: 0 80px;
  margin-top: 40px;
  ${mobile({
    marginTop: "20px",
    padding: "0 10px",
  })}
`;
export const ListItemTop = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({})}
`;
export const ItemTop = styled.div`
  display: flex;
  &:nth-child(2) {
    margin: 30px 0;
  }
  &:hover ${DescTop} {
    color: red;
  }
  ${mobile({
    flexDirection: "column",
    padding: "10px 0",
    alignItems: "center",
    borderBottom: "10px solid white",
    WebkitBoxShadow: "1px 4px 15px 3px rgba(0,0,0,0.10)",
    boxShadow: "1px 4px 15px 3px rgba(0,0,0,0.10)",
    borderRadius: "4px",
    backgroundColor: "#fff",
  })}
`;
export const ImgTop = styled.img`
  width: 85px;
  height: 85px;
  margin-right: 12px;
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: rgba(242, 239, 240, 0.8);
  ${mobile({
    width: "80px",
    height: "80px",
    marginRight: "0",
  })}
`;
export const ContentTop = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({
    alignItems: "center",
    justifyContent: "center",
    padding: "0 20px",
  })}
`;
export const TextTop = styled.p`
  margin: 0;
  font-family: "IBM Plex Sans";
  font-weight: 700;
  color: #000;
  font-size: 14px;
  ${mobile({
    fontSize: "18px",
    padding: "10px 0",
  })}
`;

// Bottom
export const Content = styled.div`
  padding: 90px 20px 50px 20px;
  transition: all ease-in-out 0.5s;
  ${mobile({
    marginLeft: "16px",
    display: "flex",
    flexDirection: "column-reverse",
  })}
`;
export const Bottom = styled.div`
  padding: 80px 20px 40px 20px;
  ${mobile({
    padding: "0 1px",
  })}
`;
export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
    marginTop: "0",
    padding: "0 10px",
  })}
`;
export const Text = styled.p`
  font-family: "IBM Plex Sans";
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  transition: all ease-in-out 0.5s;
  ${mobile({
    fontSize: "14px",
    color: "gray",
  })}
`;
export const Item = styled.div`
  width: 24%;
  border: 1px solid #000;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  position: relative;
  transition: all ease-in-out 0.5s;
  cursor: pointer;
  &:hover {
    background-color: rgba(155, 148, 152, 0.5);
  }
  &:hover ${Text} {
    color: #fff;
  }
  &:hover ${Content} {
    color: #fff;
  }
  &:nth-child(4){
    ${mobile({
      display: "none",
    })}
  }

  ${mobile({
    display: "flex",
    alignItems: "center",
    width: "100%",
    border: "none",
    marginBottom: "30px",
  })}
`;
export const WrapperImg = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid #000;
  position: absolute;
  z-index: 3;
  top: -60px;
  left: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  ${mobile({
    // position: "relative",
    // left: "20px",
    top: "10px",
    left: " 38%",
    border: "none",
    width: "80px",
    height: "80px",
  })}
`;
export const Img = styled.img`
  width: 116px;
  width: 116px;
  ${mobile({
    width: "80px",
    height: "80px",
  })}
`;

export const UserName = styled.div`
  font-family: "IBM Plex Sans";
  font-weight: 700;
  text-align: right;
  font-size: 15px;
  ${mobile({
    fontSize: "16px",
    textAlign: "center",
    margin: "12px 0",
  })}
`;
