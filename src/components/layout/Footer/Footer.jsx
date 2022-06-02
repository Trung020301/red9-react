import "./styled";
import {
  About,
  Text,
  Container,
  Info,
  Left,
  Name,
  Wrapper,
  WrapperQR,
  QRImg,
  Right,
  NewPost,
  FaceBook,
  WrapperImg,
  Img,
} from "./styled";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Left>
          <About>
            <Name>CÔNG TY CỔ PHẦN PHÁT TRIỂN THƯƠNG HIỆU RED9 DESIGN</Name>
            <Info>
              <Text>Hotline: 0000 000 000 – 0000 675 000</Text>
              <Text>Email: info@GMAIL.COM.com</Text>
              <Text>Mã số thuế : 00XXXXXXXX</Text>
              <Text>Địa chỉ : số 5a ngách 12/93 ngõ 12 Chính Kinh</Text>
            </Info>
            <WrapperQR>
              <QRImg className="mr-8" src="assets/img/qr1.png" />
              <QRImg src="assets/img/qr1.png" />
            </WrapperQR>
          </About>
        </Left>
        <Right>
          <NewPost>
            <Name className="mb-16">BÀI VIẾT MỚI</Name>
            <Text>
              Thiết kế hồ sơ năng lực suất ăn công nghiệp đẹp ấn tượng
            </Text>
            <Text className="p-16">
              Thiết kế hồ sơ năng lực suất ăn công nghiệp đẹp ấn tượng
            </Text>
            <Text>
              Thiết kế hồ sơ năng lực suất ăn công nghiệp đẹp ấn tượng
            </Text>
          </NewPost>
          <FaceBook>
            <Name className="mb-16">FACEBOOK</Name>
            <WrapperImg>
              <Img/>
              <Img />
            </WrapperImg>
          </FaceBook>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Footer;
