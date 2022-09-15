import { useState, useEffect } from "react";
import { AiOutlineUnorderedList, BsGridFill } from "../utils/icons";
import styled from "styled-components";
import useMediaQuery from "../utils/mediaQuery";
import { getUniqueValues } from "../utils/helpers";
import { changeViewStyle } from "../features/menu/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MenuSidebar = () => {
  const { menuItems, menuBtnIndex, viewStyle } = useSelector(
    (store) => store.menu
  );
  const [currentIndex, setCurrentIndex] = useState();
  const [menuContainers, setMenuContainers] = useState([]);
  const mediaQuery = useMediaQuery("(min-width: 992px)");
  const dispatch = useDispatch();
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
    const tl = gsap.timeline();

    if (menuBtnIndex === 0 && mediaQuery) {
      tl.to(".dot-container", { duration: 0.5, x: "0" });
    } else {
      tl.to(".dot-container", { duration: 0.5, x: "200%" });
    }
  }, [menuBtnIndex, mediaQuery]);

  useEffect(() => {
    gsap.utils.toArray(".menu-sidebar-icon").forEach((icon) => {
      const style = icon.dataset.view_style;

      icon.addEventListener("click", (e) => {
        let test;

        if (e.target.tagName === "path") {
          test = e.target.parentElement.dataset.view_style;
        } else {
          test = e.target.dataset.view_style;
        }
        dispatch(changeViewStyle(test));
      });

      if (style === viewStyle) {
        gsap.to(icon, { color: "#d9483b" });
      } else {
        gsap.to(icon, { color: "#f2a007" });
      }
    });
    // eslint-disable-next-line
  }, [viewStyle]);

  return (
    <Wrapper className="menu-sidebar-container">
      <div className="menu-sidebar-icon-container">
        <AiOutlineUnorderedList
          className="menu-sidebar-icon"
          data-view_style="list"
        />
        <BsGridFill className="menu-sidebar-icon" data-view_style="grid" />
      </div>
      <div className="dot-container">
        {dots.map((dot, i) => {
          return (
            <a href={`#${dot}`} key={i}>
              <div className="dot" onClick={() => setCurrentIndex(i)}></div>
            </a>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: grid;
  grid-template-rows: repeat(2, fr);
  position: fixed;
  top: 50%;
  right: 0px;
  z-index: 997;

  .menu-sidebar-icon-container {
    display: grid;
    gap: 0.5rem;
    padding: 1rem;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));

    svg {
      cursor: pointer;
      font-size: 1.5rem;
      height: 100%;
      width: 100%;
    }
  }

  .dot-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    border-top: solid 2px var(--primary-clr-5);
  }

  .dot {
    cursor: pointer;
    width: 12.5px;
    height: 12.5px;
  }
`;

export default MenuSidebar;
