import { Container, Wrapper,Title, ListItem, Item, Img, Text } from "./styled";
import { More } from "../../styles/stylesGlobal";

const Hots = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Gian hàng nổi bật</Title>
        <ListItem>
          <Item>
            <Img src="assets/img/hot1.png" />
          </Item>
          <Item>
            <Img src="assets/img/hot2.png" />
          </Item>
          <Item>
            <Img src="assets/img/hot3.png" />
          </Item>
          <Item>
            <Img src="assets/img/hot1.png" />
          </Item>
          <Item>
            <Img src="assets/img/hot2.png" />
          </Item>
          <Item>
            <Img src="assets/img/hot3.png" />
          </Item>
        </ListItem>
        <More className="mt-40">
          <Text>Xem thêm gian hàng nổi bật</Text>
        </More>
      </Container>
    </Wrapper>
  );
};

export default Hots;
