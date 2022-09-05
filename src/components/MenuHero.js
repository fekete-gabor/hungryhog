import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import styled from "styled-components";
import { MenuHeroTitle, MenuHeroSlides, MenuHeroBtns } from "./index";

const MenuHero = () => {
  const { menuSlides } = useSelector((store) => store.menu);
  const [mainSlide, setMainSlide] = useState();

  useEffect(() => {
    const temp = menuSlides.find((item) => item.attributes.type === "összes");
    setMainSlide(temp);
  }, [menuSlides]);

  const changeSlide = (type) => {
    const temp = menuSlides.find((item) => type === item.attributes.type);
    setMainSlide(temp);
  };

  if (!mainSlide) {
    return (
      <Wrapper>
        <h2>loading....</h2>;
      </Wrapper>
    );
  }

  if (mainSlide) {
    return (
      <Wrapper>
        <div className="menu-banner">
          <MenuHeroTitle mainSlide={mainSlide} />
          <MenuHeroSlides mainSlide={mainSlide} />
        </div>
        <MenuHeroBtns menuSlides={menuSlides} changeSlide={changeSlide} />
        <div className="gradient"></div>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  background: #222;
  border-bottom: var(--border);
  position: relative;
  overflow: hidden;
  user-select: none;

  .banner-container {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .menu-btn-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-end;
    position: absolute;
    bottom: 25px;
    background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25));
    z-index: 4;
    div {
      display: grid;
      position: relative;
      span {
        z-index: 2;
        position: absolute;
        bottom: 2px;
        left: 0;
        background: var(--primary-clr-5);
        height: 2px;
      }
    }
  }

  .menu-btn {
    cursor: pointer;
    padding: 0.5rem;
    font-size: 1.5rem;
    color: var(--primary-white);
    background: none;
    border: solid 2px transparent;
    text-transform: capitalize;
    transition: var(--transition);
  }

  .menu-banner {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title-container {
    z-index: 4;
  }

  .img-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h2 {
    font-family: var(--font-family-secondary);
    color: var(--primary-white);
  }

  p {
    color: var(--primary-white);
    padding-top: 1rem;
  }

  span {
    color: var(--primary-clr-5);
  }

  .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #222;
    opacity: 0.2;
    z-index: 3;
  }
`;

export default MenuHero;
