import "./styled";
import {
  Bottom,
  Container,
  Content,
  ContentTop,
  Desc,
  DescTop,
  Img,
  ImgTop,
  Item,
  ItemTop,
  Left,
  ListItem,
  ListItemTop,
  Right,
  TextTop,
  Top,
  UserName,
  Wrapper,
  WrapperImg,
  Text,
} from "./styled";
import { Heading } from "../../styles/stylesGlobal";
import { sections } from "../../data/data";

const Section = () => {
  return (
    <Wrapper>
      <Container>
        <Top>
          <Left>
            <Heading className="heading">
              Tại sao khách hàng chọn RED9 Design
            </Heading>
            <Desc>
              Ở mọi thời điểm, thiết kế đồ họa luôn là một phần không thể thiếu
              trong hành trình xây dựng và định vị thương hiệu. Red9 chuyên cung
              cấp các dịch vụ: Thiết kế gian hàng shopee, Thiết kế đồ họa, Chăm
              sóc Fanpage,.... được nhiều khách hàng lựa chọn làm đối tác lâu
              dài bởi chất lượng sản phẩm và phong cách làm việc chuyên nghiệp,
              nhạy bén của đội ngũ nhân viên. Đối tác hài lòng vì Red9 luôn cố
              gắng mang lại thành quả sản phẩm tốt nhất cho khách hàng. Với
              những gì Red9 đang có, chúng tôi mong muốn hợp tác và tự tin trở
              thành sự lựa chọn tuyệt vời của Quý khách hàng.
            </Desc>
          </Left>
          <Right>
            <ListItemTop>
              {sections.map((item) => (
                <ItemTop key={item.id}>
                  <ImgTop src={item.icon} />
                  <ContentTop>
                    <TextTop>{item.title}</TextTop>
                    <DescTop>{item.desc}</DescTop>
                  </ContentTop>
                </ItemTop>
              ))}
            </ListItemTop>
          </Right>
        </Top>
        <Bottom>
          <Heading className="mb-100 ml-4">Khách hàng nói gì về RED9 ?</Heading>
          <ListItem>
            <Item>
              <WrapperImg>
                <Img src="assets/img/img6.png" />
              </WrapperImg>
              <Content>
                <Text>
                  Cảm thấy rất hài lòng khi làm việc với đội ngũ RED9 Design đặc
                  biệt là đội thiết kế. Các bạn rất sáng tạo, chuyên nghiệp và
                  đưa ra các phương án tốt nhất cho chúng tôi lựa chọn.
                </Text>
                <UserName>Anh Đông Giang</UserName>
              </Content>
            </Item>
            <Item>
              <WrapperImg>
                <Img src="assets/img/img6.png" />
              </WrapperImg>
              <Content>
                <Text>
                  Cảm thấy rất hài lòng khi làm việc với đội ngũ RED9 Design đặc
                  biệt là đội thiết kế. Các bạn rất sáng tạo, chuyên nghiệp và
                  đưa ra các phương án tốt nhất cho chúng tôi lựa chọn.
                </Text>
                <UserName>Anh Đông Giang</UserName>
              </Content>
            </Item>
            <Item>
              <WrapperImg>
                <Img src="assets/img/img6.png" />
              </WrapperImg>
              <Content>
                <Text>
                  Cảm thấy rất hài lòng khi làm việc với đội ngũ RED9 Design đặc
                  biệt là đội thiết kế. Các bạn rất sáng tạo, chuyên nghiệp và
                  đưa ra các phương án tốt nhất cho chúng tôi lựa chọn.
                </Text>
                <UserName>Anh Đông Giang</UserName>
              </Content>
            </Item>
            <Item>
              <WrapperImg>
                <Img src="assets/img/img6.png" />
              </WrapperImg>
              <Content>
                <Text>
                  Cảm thấy rất hài lòng khi làm việc với đội ngũ RED9 Design đặc
                  biệt là đội thiết kế. Các bạn rất sáng tạo, chuyên nghiệp và
                  đưa ra các phương án tốt nhất cho chúng tôi lựa chọn.
                </Text>
                <UserName>Anh Đông Giang</UserName>
              </Content>
            </Item>
          </ListItem>
        </Bottom>
      </Container>
    </Wrapper>
  );
};

export default Section;
