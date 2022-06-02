import styled, { keyframes } from "styled-components";
import { mobile } from "../../../responesive";
import FormInput from "./FormInput";

// key frames

export const appear = keyframes`
    from {
      opacity: 0;
      transform: translateY(-200px);
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
`;

export const MessInput = styled.span`
    color: red;
    margin: -10px 0 0 4px;
    display: none;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${mobile({
    width: "100%",
    margin: "auto",
  })}
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  ${mobile({
    marginBottom: "4px",
    width: "100%",
    boxSizing: "border-box",
  })}
`;

export const Label = styled.label`
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  color: #dd2926;
  margin-bottom: 4px;
  font-weight: 600;
  ${mobile({
    fontSize: "16px",
  })}
`;



export const Input = styled.input`
  padding: 12px 10px;
  width: 70%;
  margin-bottom: 14px;
  border: none;
  background: #fff;
  border-radius: 8px;
  color: #dd2926;
  font-size: 16px;
  ${mobile({
    width: "100%",
    padding: "10px",
    fontSize: "18px",
    marginBottom: "10px",
    boxSizing: "border-box",
  })}
  &:invalid{
    & ${MessInput}{
      display: block;
    }
  }
  &::placeholder {
    font-family: "IBM Plex Sans";
    font-weight: 500;
    font-size: 16px;
    ${mobile({
      fontSize: "16px",
    })}
  }
  &:focus {
    outline: 1px solid blue;
  }
`;


export const TextArea = styled.textarea`
  width: 70%;
  border: none;
  background: #fff;
  border-radius: 8px;
  padding: 4px 10px;
  height: 100px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #dd2926;
  font-family: Arial, Helvetica, sans-serif;
  ${mobile({
    width: "100%",
    padding: "10px",
    fontSize: "18px",
    height: "60px",
    marginBottom: "20px",
    boxSizing: "border-box",
  })}
  &::placeholder {
    font-family: "IBM Plex Sans";
    font-weight: 500;
    font-size: 16px;
    ${mobile({
      fontSize: "16px",
    })}
  }
  &:focus {
    outline: 1px solid blue;
  }
`;

export const BtnSubmit = styled.button`
  border: none;
  width: fit-content;
  padding: 8px 32px;
  color: #fff;
  background: linear-gradient(91.25deg, #d71f26 0%, #ff621f 99.52%);
  border-radius: 53px;
  align-self: center;
  cursor: pointer;
  font-size: 16px;
  transition: all ease-in-out 0.5s;
  ${mobile({
    width: "92%",
    padding: "8px 20px ",
    fontSize: "18px",
  })}
  &:hover {
    opacity: 0.6;
  }
`;

export const Success = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* animation: ${appear} ease-in-out 2s; */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(210, 209, 210, 0.8);
  z-index: 999;
`;

export const SuccessWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${appear} ease-in-out 2s;

`;

export const SuccessImg = styled.div`
  & .font {
    color: #4bb543;
    width: 120px;
    height: 120px;
    ${mobile({
      width: "70px",
      height: "70px",
    })}
  }
`;

export const SuccessText = styled.span`
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: #4bb543;
  width: max-content;
`;

