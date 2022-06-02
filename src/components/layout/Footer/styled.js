import styled from "styled-components";
import { mobile } from "../../../responesive";

export const Wrapper = styled.div`
  background: linear-gradient(93.09deg, #d71f26 -14.9%, #ff621f 116.78%);
  ${mobile({
    width: "100%",
  })}
`;
export const Container = styled.div`
  padding: 30px 100px;
  display: flex;
  justify-items: center;
  ${mobile({
    flexDirection: "column",
    padding: "20px 10px",

  })}
`;
export const Left = styled.div`
  flex: 1;
  ${mobile({
    padding: "0 20px",
  })}
`;
export const About = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({})}
`;
export const Name = styled.h3`
  font-family: "Noto Sans";
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  ${mobile({
    fontSize: "18px",
    fontWeight: "500",
    textAlign: "center",
  })}
`;
export const Info = styled.div`
  padding: 16px 0;

  ${mobile({
    padding: "20px 0",
    lineHeight: "2.4rem",

  })}
`;
export const WrapperQR = styled.div`
  ${mobile({
    marginBottom: "10px",
  })}
`;
export const QRImg = styled.img`
  ${mobile({
    width: "100px",
    height: "100px",
    marginRight: "10px",
  })}
`;
export const Text = styled.p`
  font-family: "Noto Sans";
  font-weight: 500;
  font-size: 12px;
  color: #ffffff;
  ${mobile({
    fontSize: "16px",
  })}
`;
// Right

export const Right = styled.div`
  flex: 1;
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;
export const NewPost = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${mobile({
    display: "none",
  })}
`;
export const FaceBook = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${mobile({
    marginTop: "20px",
  })}
`;
export const WrapperImg = styled.div`
  display: flex;
  flex-direction: column;

  ${mobile({
    flexDirection: "row",
    justifyContent: "space-between",
  })}
`;
export const Img = styled.img`
  width: 222px;
  height: 94px;
  background: #c4c4c4;
  margin-bottom: 8px;
  ${mobile({
    // flex: "1",
    width: "47%",
    marginBottom: "0",
    padding: "0 4px",
  })}
`;
