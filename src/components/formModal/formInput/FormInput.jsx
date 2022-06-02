import {
  MessInput,
  Form,
  Label,
  Input,
  FormGroup,
  TextArea,
  BtnSubmit,
  Success,
  SuccessImg,
  SuccessText,
  SuccessWrapper,
} from "./styled";
import {  useState } from "react";
import { CheckCircle } from "@mui/icons-material";
// import axios from "axios";

const FormInput = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [values , setValues] = useState({
    username: "",
    email: "",
    phone: "",
    service: "",
    content: "",
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    if(values != null){
      setIsSuccess(!isSuccess);
      setTimeout(() => {
            setIsSuccess(false);
          }, 3000);
    }
    console.log({values});
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
    
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label> Họ và tên:</Label>
        <Input
        name="username"
          onChange={onChange}
          required
          value={values.username}
          placeholder="VD: Nguyễn Văn A"
        />
        <MessInput>Tên bạn không được để trống !</MessInput>
      </FormGroup>
      <FormGroup>
        <Label>Email: </Label>
        <Input
        name="email"
          type="email"
          onChange={onChange}
          required
          value={values.email}
          placeholder="VD: example@email.xyz"
        />
        <MessInput>Bạn nên nhập đúng email !</MessInput>
      </FormGroup>
      <FormGroup>
        <Label>Số điện thoại: </Label>
        <Input
        name="phone"
          onChange={onChange}
          required
          value={values.phone}
          placeholder="VD: 012345678"
        />
        <MessInput>Bạn không được để trống số điện thoại</MessInput>
      </FormGroup>
      <FormGroup>
        <Label>Dịch vụ yêu cầu: </Label>
        <Input
        name="service"
          onChange={onChange}
          required={true}
          value={values.service}
          placeholder="VD: Thiết kế gian hàng thương mại điện tử"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="content">Nội dung: </Label>
        <TextArea
        name="content"
          onChange={onChange}
          value={values.content}
          type="text"
          required
          placeholder="VD: Nội dung của bạn..."
        />
      </FormGroup>
      <BtnSubmit type="submit">Gửi yêu cầu</BtnSubmit>
      {isSuccess && (
        <Success>
          <SuccessWrapper>
            <SuccessImg>
              <CheckCircle className="font" />
            </SuccessImg>
            <SuccessText>Gửi thành công!</SuccessText>
          </SuccessWrapper>
        </Success>
      )}
    </Form>
  );
};

export default FormInput;
