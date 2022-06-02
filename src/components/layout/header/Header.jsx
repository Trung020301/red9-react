// import FormModal from "../../formModal/FormModal";
import {  DensitySmall } from "@mui/icons-material";
import { useRef, useState } from "react";
import ScrollBtn from "../../scrollBtn/ScrollBtn";
import {
  Nav,
  Logo,
  Img,
  NavLink,
  Item,
  WrapperItem,
  Container,
  Icon,
  WrapperHeader
} from "./styled";
const Header = () => {
  const showRef = useRef(null)
  const [show, setShow] = useState(true)
  const handleClick = () => {
    setShow(!show)
    if(show) {
      showRef.current.classList.add("d-f")
    } else {
      showRef.current.classList.remove("d-f")
      
    }
   
  }

  return (
    <WrapperHeader>
    <Container>
      <Nav>
        <Icon height={show ? 1 : 0} onClick={handleClick}>
        <DensitySmall style={ {color: "#fff", width: "100%"}}/>
        </Icon>
        <Logo className="firstChild">
          <NavLink to="/">
            <Img src="assets/img/red9.png"></Img>
          </NavLink>
        </Logo>
        <WrapperItem ref={showRef} height={show ? 1 : 0 }>
          <NavLink to="/">
            <Item>TRANG CHỦ</Item>
          </NavLink>
          <NavLink to="/services">
            <Item>DỊCH VỤ</Item>
          </NavLink>
          <NavLink to="/about">
            <Item>VỀ RED9</Item>
          </NavLink>
          <NavLink to="/blogs">
            <Item>BLOG</Item>
          </NavLink>
          <NavLink to="/contact">
            <Item>LIÊN HỆ</Item>
          </NavLink>
          {/* <Item className="d-n">
            <NavLink as="a" href="#support" className="lastChild">
              Tư vấn miễn phí
            </NavLink>
          </Item> */}
        </WrapperItem>
      </Nav>
    </Container>
    <ScrollBtn />
    </WrapperHeader>
  );
};

export default Header;
