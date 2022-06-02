import DetailPro from "../detailPro/DetailPro";
import {
  Right,
  Left,
  Container,
  Content,
  Title,
  Wrapper,
  WrapperImg,
  Img,
  Icon,
  IconWrapper,
} from "./styled";

const Product = () => {
  return (
    <Wrapper>
      <Container>
        <Left>
          <Title>Dịch vụ thiết kế gian hàng thương mại điện tử trọn gói</Title>
          <Content>
            Bạn muốn kinh doanh trên shopee nhưng không biết bắt đầu từ đâu ?
            Hoặc bạn đã có gian hàng trên shopee nhưng không hiệu quả? Đối thủ
            cạnh tranh thì ngày càng phát triển, còn bạn thì không có đơn
            hàng.Bạn buồn rầu và lo lắng…. Bạn ơi đừng làm một mình nữa ! Hãy để
            Red9 đồng hành cùng bạn !
          </Content>
          <IconWrapper className="mt-40">
            <Icon src="assets/img/arrowD.png" />
            <Icon className="mt-5" src="assets/img/arrowD.png" />
          </IconWrapper>
        </Left>
        <Right>
          <WrapperImg>
            <Img src="assets/img/servicesProduct.png" />
          </WrapperImg>
        </Right>
      </Container>
      <DetailPro />
    </Wrapper>
  );
};

export default Product;
