import "./styled";
import { Icon, Img, ListSlide, Slide, WrapperSlider, Wrapper, Container } from "./styled";
import { slider } from "../../data/data";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useEffect, useState } from "react";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4);
    } else {
      setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
    }
  };

  let slideInterval;
  let intervalTime = 3000;
  let sliderLength = slider.length;

  const autoSlideShow = () => {
    slideInterval = setInterval(() => {
      setSlideIndex(slideIndex !== sliderLength - 1 ? slideIndex + 1 : 0);
    }, intervalTime);
  };

  useEffect(() => {
    autoSlideShow();
    return () => {
      clearInterval(slideInterval);
    };
  });

  return (
    <Wrapper>
      <Container>
        <WrapperSlider>
          <Icon direction="left" onClick={() => handleClick("left")}>
            <ArrowBackIos />
          </Icon>
          <Icon direction="right" onClick={() => handleClick("right")}>
            <ArrowForwardIos />
          </Icon>
          <ListSlide slideIndex={slideIndex}>
            {slider.map((item) => (
              <Slide key={item.id}>
                <Img src={item.img} />
              </Slide>
            ))}
          </ListSlide>
        </WrapperSlider>
      </Container>
    </Wrapper>
  );
};

export default Slider;
