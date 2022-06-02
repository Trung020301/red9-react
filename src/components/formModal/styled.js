import styled, { keyframes } from "styled-components";
import { mobile } from "../../responesive";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  background-color: rgba(157, 155, 156, 0.53);
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 13;
  top: 0;
  display: none;
  ${mobile({
    width: "100%",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "999",
  })}
`;

// Key frames

export const tobottom = keyframes`
  from{
    opacity: 0;
    transform: translateY(-200px)
  }
  to {
    opacity: 1;
    transform: translateY(0)
  }
`;

export const pulseeffects = keyframes`
  0% { transform: scale(0.5); opacity: 0;}
  50% { transform: scale(1) ; opacity: 1;}
  100% { transform: scale(1.4); opacity: 0;}
`;

export const Container = styled.div`
  max-width: calc(100% - 12px);
  margin: auto;
  padding: 20px 40px;
  background: #ffcfcf;
  border-radius: 21px;
  display: flex;
  justify-content: space-between;
  animation: ${tobottom} ease-in 1s;
  position: relative;
  ${mobile({
    width: "calc(100% - 22px)",
    margin: "auto",
    flexDirection: "column",
    padding: "10px 10px 20px 10px",
  })}
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px 0;
  ${mobile({
    padding: "10px 0",
  })}
`;
export const Content = styled.div`
  width: 90%;
  & .textHeader {
    font-family: "Arial", sans-serif;
    font-size: 20px;
    color: #dd2926;
    padding: 0 20px;
    ${mobile({
      fontSize: "16px",
      color: "#75716e",
      fontFamily: "Arial",
      padding: "0",
      display: "none",
    })}
  }
`;
export const Right = styled.div`
  padding: 30px 0 20px 0;
  flex: 1;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "0",
  })}
`;

export const Input = styled.input`
  padding: 12px 10px;
  width: 70%;
  margin-bottom: 14px;
  border: none;
  background: #ffc0c3;
  border-radius: 8px;
  color: #dd2926;
  font-size: 16px;
  ${mobile({
    width: "100%",
    padding: "10px",
    fontSize: "18px",
    marginBottom: "10px",
    boxSizing: "border-box",
    background: "#fff",
  })}
  &::placeholder {
    font-family: "IBM Plex Sans";
    font-weight: 500;
    font-size: 16px;
    color: #dd2926;
    ${mobile({
      fontSize: "16px",
    })}
  }
  &:focus {
    outline: 1px solid blue;
  }
`;

export const Advise = styled.button`
  background-color: #e3955d;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 200px;
  right: 40px;
  cursor: pointer;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    border-radius: 50%;
    border: 2px solid #e3955d;
    position: absolute;
    animation: ${pulseeffects} 1.5s linear infinite;
  }
  &::after {
    content: "";
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    border-radius: 50%;
    border: 2px solid #e3955d;
    position: absolute;
    animation: ${pulseeffects} 1.5s linear infinite;
    animation-delay: .4s;
  }
  ${mobile({
    bottom: "180px",
    right: "20px",
    width: "60px",
    height: "60px",
  })}
`;

// export const WrapperIcon = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   width: 60px;
//   height: 60px;
//   & .font {
//     ${mobile({
//       width: "30px",
//       height: "30px",
//     })}
//   }

//   &::after {
//     content: "";
//     width: calc(100% + 20px);
//     height: calc(100% + 20px);
//     border-radius: 50%;
//     border: 1px solid #e3955d;
//     position: absolute;
//     animation: pulseeffects 1.5s linear infinite;
//   }
// `;

export const Icon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: linear ease 0.5s;
  ${mobile({
    top: "10px",
    right: "10px",
  })}
  & .font {
    ${mobile({
      width: "30px",
      height: "30px",
    })}
  }
  &:hover {
    opacity: 0.2;
  }
`;
