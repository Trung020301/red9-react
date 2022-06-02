import "./styled";
import {
  Container,
  Content,
  Icon,
  IconWrapper,
  Img,
  Item,
  ListItem,
  Title,
  WrapperImg,
  Text,
  TitleContent,WrapperContent
} from "./styled";
import { More } from "../../styles/stylesGlobal";
import { helps } from "../../data/data";

const Help = () => {
  return (
    <Container>
      <TitleContent>RED9 DESIGN có thể giúp GÌ cho bạn</TitleContent>
      <ListItem>
        {helps.map((item) => (
          <Item key={item.id}>
            <WrapperImg>
              <Img src={item.img} />
            </WrapperImg>

            <WrapperContent>
              <Title>{item.title}</Title>
              <Content>{item.desc}</Content>
            </WrapperContent>
            <IconWrapper>
              <Icon mr src="assets/img/arrowR.png" />
              <Icon src="assets/img/arrowR.png" />
            </IconWrapper>
          </Item>
        ))}
      </ListItem>
      <More className="mb-40">
        <Text>Tư vấn miễn phí</Text>
      </More>
    </Container>
  );
};

export default Help;
