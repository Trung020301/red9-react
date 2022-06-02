import {
    Detail,
    Left,
    Right,
    WrapperImg,
    Img,
    Title,
    Content,
    TitleContent,
    Item,
    ListContent,
    Text,
  } from "./styled";
import { Check } from "@mui/icons-material";

const DetailPro = () => {
  return (
    <Detail>
    <Left>
      <WrapperImg>
        <Img src="assets/img/detailServices.png" />
      </WrapperImg>
    </Left>
    <Right>
      <Title className="mb-16">
        Thiết kế gian hàng Có thực sự cần thiết?
      </Title>
      <Content>
        <TitleContent className="mb-16">
          Nếu nhìn vào gian hàng của các thương hiệu lớn, bạn sẽ thấy họ
          có gian hàng vô cùng chuyên nghiệp, chỉn chu và hiện đại. Đó là
          lý do mà các thương hiệu này nhận được sự tin tưởng cực lớn từ
          phía khách hàng, bởi họ đã bộc lộ được mức độ đầu tư cũng như sự
          tận tâm với sản phẩm. Vì vậy thiết kế gian hàng trên các sàn
          thương mại điện tử là vô cùng quan trọng, không chỉ tăng giá trị
          thương hiệu của bạn, gian hàng đẹp còn giúp bạn:
        </TitleContent>
        <ListContent>
          <Item>
            <Check className="font" style={{ color: "red" }} />
            <Text>Tăng độ uy tín trong mắt khách hàng và đối tác.</Text>
          </Item>
          <Item>
            <Check className="font" style={{ color: "red" }} />
            <Text>
              Tăng cơ hội nhấp chuột và tỷ lệ chuyển đổi thành đơn hàng.
            </Text>
          </Item>
          <Item>
            <Check className="font" style={{ color: "red" }} />
            <Text>
              Dễ dàng quảng bá sản phẩm mới, hot trend, các chương trình
              khuyến mãi.
            </Text>
          </Item>
          <Item>
            <Check className="font" style={{ color: "red" }} />
            <Text>
              Tăng lượng truy cập và giữ chân khách hàng ở lại shop.
            </Text>
          </Item>
          <Item>
            <Check className="font" style={{ color: "red" }} />
            <Text>Tạo sự khác biệt so với các shop cùng ngành hàng.</Text>
          </Item>
        </ListContent>
      </Content>
    </Right>
  </Detail>
  )
}

export default DetailPro