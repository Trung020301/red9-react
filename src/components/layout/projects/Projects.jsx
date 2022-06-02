import "./styled";
import { Container,Text,Content, Desc, Img, Item, ListItem, Title, Wrapper } from "./styled";
import { projects } from "../../data/data";
import {Heading, More} from "../../styles/stylesGlobal"

const Projects = () => {
  return (
    <Wrapper>
      <Container>
        <Heading className="p-0">Dự án tiêu biểu của RED9 DESIGN</Heading>
        <ListItem>
          {projects.map((item) => (
            <Item key={item.id}>
              <Img src={item.img}/>
              <Content>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
              </Content>
            </Item>
          ))}
        </ListItem>
        <More className="mt-40">
          <Text>
            Xem thêm
          </Text>
        </More>
      </Container>
    </Wrapper>
  );
};

export default Projects;
