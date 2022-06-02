import styled from "styled-components";
import { mobile } from "../../../responesive";

export const Container = styled.div`
  width: calc(60% - 12px);
  min-width: 1140px;
  margin: auto;
  ${mobile({
    marginTop: "40px",
    width: "100%", 
    minWidth: "auto",
  })}
`;
export const ListItem = styled.div`
  padding: 40px 20px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  ${mobile({
    display: "none",
  })}
`;
export const Item = styled.div`
  font-family: "IBM Plex Sans";
  font-size: 16px;
  text-transform: uppercase;
  position: relative;
  width: 23%;
  &:nth-child(4){
    ${IconWrapper}{
      display: none;
    }

  }
  ${mobile({
    width: "98%",
    WebkitBoxShadow: "2px 4px 13px 2px rgba(0,0,0,0.3)",
    boxShadow: "2px 4px 13px 2px rgba(0,0,0,0.3)",
    marginBottom: "24px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    flexDirection : "column",
    padding: "30px 20px"
  })}
`;

export const WrapperContent = styled.div`
  ${mobile({
  })}
`

export const WrapperImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    width: "100px",
    height: "100px",
  })}
`;
export const Img = styled.img`
  width: 100px;
  ${mobile({
    width: "100%",
    height: "100%",
    objectFit: "cover",
  })}
`;
export const Title = styled.div`
  font-weight: 700;
  margin: 16px 0;
  ${mobile({
    fontSize: "18px",
    textAlign: "center",
  })}
`;
export const Content = styled.div`
  font-size: 15px;
  font-weight: 300;
  text-align: justify;
  line-height: 1.5rem;
  ${mobile({
    fontSize: "16px",
    fontFamily: "Arial , sans-serif",
  })}
`;


export const Icon = styled.img`
  width: 8%;
  right: -10px;
  top: 12%;
  position: absolute;
  margin-right: ${(props) => (props.mr ? "-15px" : "none")};
`;

export const TitleContent = styled.h3`
  font-family: "IBM Plex Sans";
  font-weight: 700;
  font-size: 30px;
  text-transform: uppercase;
  color: #d91f26;
  padding: 20px 0 50px 0;
  text-align: center;
  ${mobile({
    fontSize: "18px",
    padding: "0 10px",
    textAlign: "left",
  })}
`;

export const Text = styled.p`
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
    padding: "6px 60px",
    fontSize: "36px",
    display: "none"
  })}
`;
