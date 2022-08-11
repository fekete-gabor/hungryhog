import { useEffect } from "react";
import styled from "styled-components";
import slides from "../utils/heroSlides";
import { isVisible } from "../features/hero/heroSlice";
import { useDispatch, useSelector } from "react-redux";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const dispatch = useDispatch();
  const { isActive } = useSelector((store) => store.hero);

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
      const maskWidth = mask.getBoundingClientRect().width;

      gsap.set(mask, {
        x: (i * maskWidth) / 1,
      });

      if (isActive) {
        if (i % 2 === 0) {
          gsap.to(mask, {
            duration: 1,
            scaleY: 0,
            transformOrigin: "top",
          });
        } else {
          gsap.to(mask, {
            duration: 1,
            scaleY: 0,
            transformOrigin: "bottom",
          });
        }
      }
    });
  }, [isActive]);

  useEffect(() => {
    gsap.utils.toArray(".slide").forEach((slide, i) => {
      const slideWidth = slide.getBoundingClientRect().width;
      gsap.set(slide, {
        x: (i * slideWidth) / 1.323,
        clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
      });

      const totalWidth = slideWidth * slides.length;
      const dirFromRight = "-=" + totalWidth;
      var mod = gsap.utils.wrap(-500, totalWidth / 1.585);

      gsap.timeline().to(slide, {
        x: dirFromRight,
        modifiers: {
          x: (x) => mod(parseFloat(x)) + "px",
        },
        duration: 150,
        ease: "slow",
        repeat: -1,
      });
    });
  }, []);

  return (
    <Wrapper>
      <div className="banner-container">
        {slides.map((slide, i) => {
          return (
            <React.Fragment key={i}>
              <img src={slide} alt="slide" className="slide" />
              <div className="mask-container">
                <div className="mask"></div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="title-container">
        <h2 className="banner-title">
          Hungry<span>Hog</span>
        </h2>
        <p className="banner-text">
          since <span>1958.</span>
        </p>
      </div>
      <div className="gradient"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 85vh;
  background: #222;
  border-bottom: solid 2px var(--primary-white);
  position: relative;
  overflow: hidden;

  .banner-container {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    img,
    .mask {
      position: absolute;
      top: 0;
      width: 500px;
      height: 100%;
      object-fit: cover;
    }
  }

  .mask-container {
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .mask {
    background: #222;
    z-index: 1;
    left: -50%;
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
`;

export default Hero;
