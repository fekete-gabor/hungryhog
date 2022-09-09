import { useState, useEffect } from "react";
import styled from "styled-components";
import useMediaQuery from "../utils/mediaQuery";
import { getUniqueValues } from "../utils/helpers";
import { useSelector } from "react-redux";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MenuSidebar = () => {
  const { menuItems, menuBtnIndex } = useSelector((store) => store.menu);
  const [currentIndex, setCurrentIndex] = useState();
  const [menuContainers, setMenuContainers] = useState([]);
  const mediaQuery = useMediaQuery("(min-width: 992px)");

  const dots = getUniqueValues(menuItems, "type");

  useEffect(() => {
    const containers = [...document.querySelectorAll(".menu-item-container")];
    setMenuContainers(containers);

    gsap.config({
      nullTargetWarn: false,
      trialWarn: false,
    });

    menuContainers.forEach((title, i) => {
      ScrollTrigger.create({
        trigger: title,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => setCurrentIndex(i),
        onEnterBack: () => setCurrentIndex(i),
      });
    });
    // eslint-disable-next-line
  }, [menuItems, menuBtnIndex, currentIndex]);

  useEffect(() => {
    gsap.utils.toArray(".dot").forEach((dot, i) => {
      gsap.set(dot, { background: "#f2a007" });

      const tl = gsap.timeline();

      if (i === currentIndex) {
        tl.to(dot, { background: "#d9483b", rotate: "45deg" });
      } else {
        tl.to(dot, { background: "#f2a007", rotate: "0" });
      }
    });
  }, [dots, currentIndex]);

  useEffect(() => {
    menuBtnIndex === 0 && setCurrentIndex(0);

    if (menuBtnIndex === 0 && mediaQuery) {
      gsap.to(".dot-container", { duration: 0.5, x: "0" });
    } else {
      gsap.to(".dot-container", { duration: 0.5, x: "200%" });
    }
  }, [menuBtnIndex, mediaQuery]);

  return (
    <Wrapper className="dot-container">
      {dots.map((dot, i) => {
        return (
          <a href={`#${dot}`} key={i}>
            <div className="dot" onClick={() => setCurrentIndex(i)}></div>
          </a>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: fit-content;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 50%;
  right: 0px;
  z-index: 997;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));

  .dot {
    cursor: pointer;
    width: 12.5px;
    height: 12.5px;
    margin: 0.75rem 0;
  }
`;

export default MenuSidebar;
