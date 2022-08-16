import { useEffect } from "react";
import HeroSlides from "./HeroSlides";
import styled from "styled-components";
import { isVisible, getSlides } from "../features/hero/heroSlice";
import { useDispatch, useSelector } from "react-redux";
import { gsap } from "gsap/dist/gsap";

const Hero = () => {
  const dispatch = useDispatch();
  const { isActive, slides } = useSelector((store) => store.hero);

  useEffect(() => {
    dispatch(getSlides());
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".banner-title", { duration: 1, delay: 1, autoAlpha: 1 }).to(
      ".banner-text",
      {
        duration: 1,
        delay: 1,
        autoAlpha: 1,
        onComplete: () => dispatch(isVisible()),
      }
    );

    gsap.utils.toArray(".mask").forEach((mask, i) => {
      gsap.set(mask, { margin: "-1px 0" });

      if (isActive) {
        if (i % 2 === 0) {
          gsap.to(mask, {
            duration: 1,
            scaleX: 0,
            transformOrigin: "left",
          });
        } else {
          gsap.to(mask, {
            duration: 1,
            scaleX: 0,
            transformOrigin: "right",
          });
        }
      }
    });
  }, [isActive, slides]);

  return (
    <Wrapper>
      <div className="banner-container">
        <div className="mask-container">
          <div className="mask"></div>
          <div className="mask"></div>
          <div className="mask"></div>
          <div className="mask"></div>
          <div className="mask"></div>
          <div className="mask"></div>
        </div>
        <HeroSlides />
        <div className="title-container">
          <h2 className="banner-title">
            Hungry<span>Hog</span>
          </h2>
          <p className="banner-text">
            since <span>1958.</span>
          </p>
        </div>
        <div className="gradient"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 85vh;
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

  .mask-container {
    width: 100%;
    height: 100%;
    display: grid;
    z-index: 2;
  }

  .mask {
    background: #222;
    width: 100%;
    z-index: 1;
  }

  .title-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 4;
  }

  h2 {
    font-family: var(--font-family-secondary);
    color: var(--primary-white);
    transition: var(--transition);
    font-size: clamp(2rem, 5vw, 3rem);
    opacity: 0;
  }

  p {
    font-size: clamp(1.5rem, 5vw, 2rem);
    color: var(--primary-white);
    padding-top: 1rem;
    opacity: 0;
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
    opacity: 0.5;
    z-index: 3;
  }

  @media screen and (min-width: 620px) {
    .banner-container {
      img {
        width: 500px;
      }
    }
  }
`;

export default Hero;
