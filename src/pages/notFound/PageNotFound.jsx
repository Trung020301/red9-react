import {Container, Content, ImgBG, Title, Desc, ButtonGoBack} from "./styled";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <Container>
      <Content>
        <ImgBG>
          <Title>404</Title>
        </ImgBG>
        <Desc>
          <h3>Có vẻ như chúng ta đã bị lạc!</h3>
          <p>Trang bạn tìm kiếm hiện tại không tồn tại</p>
          <p>Chúng tôi đang cố gắng phát triển nó trong tương lai!</p>
        <Link to="/">
          <ButtonGoBack>Trang chủ</ButtonGoBack>
        </Link>
        </Desc>
      </Content>
    </Container>
  );
};

export default PageNotFound;
