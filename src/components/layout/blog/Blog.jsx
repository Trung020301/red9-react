import "./styled";
import { Heading, More } from "../../styles/stylesGlobal";
import {
  Container,
  Content,
  Desc,
  Img,
  Item,
  ListItem,
  Title,
  Wrapper,
  Text,
  MoreText,
} from "./styled";
import { blog } from "../../data/data";

const Blog = () => {
  return (
    <Wrapper>
      <Container>
        <Heading className="p-0">Blogs & Kiến thức</Heading>
        <ListItem>
          {blog.map((item) => (
            <Item key={item.id}>
              <Img src={item.img} />
              <Content>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <MoreText>Xem thêm</MoreText>
              </Content>

            </Item>
          ))}
        </ListItem>
        <More className="mb-40 mt-20">
            <Text>Xem thêm</Text>
        </More>
      </Container>
    </Wrapper>
  );
};

export default Blog;
