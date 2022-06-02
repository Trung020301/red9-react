import {
  Container,
  Content,
  Left,
  Right,
  Wrapper,
  Icon,
  Advise
} from "./styled";
import FormInput from "./formInput/FormInput";
import { Heading } from "../styles/stylesGlobal";
import { useRef } from "react";
import { Close, Forum } from "@mui/icons-material";
const FormModal = () => {
  const Ref = useRef(null);
  const adviseRef = useRef(null);
  const handleClick = (state) => {
    if (state === "show") {
      Ref.current.classList.add("d-f");
      adviseRef.current.style.zIndex = "1";
    } else {
      Ref.current.classList.remove("d-f");
    }
  };

  return (
    <>
      <Wrapper ref={Ref} className="advise">
        <Container>
          <Left>
            <Content className="ta-c">
              <Heading className="ta-c p-0 mb-16">
                Kết nối ngay với RED9 để nhận tư vấn
              </Heading>
              <p className="textHeader">
                Chúng tôi luôn sẵn sàng lắng nghe và đưa ra giải pháp phù hợp
                nhất cho vấn đề của bạn.
              </p>
            </Content>
          </Left>
          <Right>
          <FormInput />
          </Right>
          <Icon onClick={() => handleClick("hide")}>
            <Close className="font" style={{ color: "red" }} />
          </Icon>
        </Container>
      </Wrapper>
      <Advise ref={adviseRef} onClick={() => handleClick("show")}>
          <Forum className="font" fontSize="large" style={{ color: "#fff"}} />
      </Advise>
    </>
  );
};

export default FormModal;
