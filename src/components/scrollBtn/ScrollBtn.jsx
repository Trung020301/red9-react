import "./styled";
import { GoTopBtn, WrapperBtn } from "./styled";
import { ArrowUpward } from "@mui/icons-material";
import { useState, useEffect } from "react";

const ScrollBtn = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        setIsScrolled(window.pageYOffset > 300 ? true : false);
        return () => window.onscroll === null;
      },
      [isScrolled]
    );
  });

  const Click = () => {
    window.scrollTo({
        top: 0
    })
  }
  return (
    <GoTopBtn onClick={Click} display={isScrolled ? 1 : 0}>
      <WrapperBtn title="Lên trên">
        <ArrowUpward className="font" fontSize="large" style={{ color: "white" }} />
      </WrapperBtn>
    </GoTopBtn>
  );
};

export default ScrollBtn;
