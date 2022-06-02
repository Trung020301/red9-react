import "./styled"
import { Wrapper,Container, MoreText,ListItem, Item, WrapperImg, Img, WrapperContent, Title, Desc, Text } from "./styled"
import { Heading, More } from "../../styles/stylesGlobal"
import {servicesPost} from '../../data/data'

const Services = () => {
  return (
    <Wrapper>
        <Container>
            <Heading>
                Dịch vụ của chúng tôi
            </Heading>
            <ListItem>
              {servicesPost.map((item) => (
                <Item key={item.id}>
                  <WrapperImg>
                    <Img src={item.src}/>
                  </WrapperImg>
                  <WrapperContent>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <MoreText>Xem thêm</MoreText>
                  </WrapperContent>
                </Item>
              ))}
            </ListItem>
            <More className="mb-40 mt-20">
              <Text>Xem thêm</Text>
            </More>
        </Container>
    </Wrapper>
  )
}

export default Services