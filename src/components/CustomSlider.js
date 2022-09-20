import { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CustomSlider = ({
  title = "lorem ipsum",
  backgroundColor = "#2b2724",
  underlineColor = "#f2f2f0",
  fontColor = "#f2a007",
  shadowColor = "brown",
}) => {
  useEffect(() => {
    gsap.utils.toArray(".slider-title").forEach((title) => {
      const fontColor = title.dataset.font_color;

      gsap.set(title, {
        x: "100%",
        autoAlpha: 0,
        color: fontColor,
      });
    });

    gsap.utils.toArray(".wrapper").forEach((wrapper) => {
      const backgroundColor = wrapper.dataset.background_color;
      gsap.set(wrapper, { background: backgroundColor });
    });

    gsap.utils.toArray(".title-line").forEach((underline) => {
      const underlineColor = underline.dataset.underline_color;
      gsap.set(underline, {
        height: "5px",
        width: "0",
        background: underlineColor,
        autoAlpha: 0,
      });
    });
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".slider-title").forEach((title) => {
      const parent = title.parentElement;
      const underline = title.children[0];
      const shadowColor = title.dataset.shadow_color;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          start: "top 0%",
          end: "+=225%",
          scrub: true,
          pin: parent,
        },
      });
      tl.to(title, {
        duration: 6,
        x: "0%",
        autoAlpha: 1,
      })
        .to(title, {
          duration: 6,
          scale: "1.25",
        })
        .to(underline, { duration: 6, width: "100%", autoAlpha: 1 }, 10)
        .to(
          title,
          {
            duration: 6,
            textShadow: `5px 2px 0px ${shadowColor}`,
          },
          10
        )
        .to(title, { duration: 6, delay: 10, autoAlpha: 0 });
    });
  }, []);

  return (
    <Wrapper className="wrapper" data-background_color={backgroundColor}>
      <section className="slider">
        <h1
          className="slider-title"
          data-font_color={fontColor}
          data-shadow_color={shadowColor}
        >
          {title}
          <div
            className="title-line"
            data-underline_color={underlineColor}
          ></div>
        </h1>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 300vh;
  overflow: hidden;

  .slider {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      text-transform: uppercase;
      letter-spacing: 5px;
      font-size: 3rem;
      font-family: var(--ff-cursive-secondary);
    }
  }

  h2 {
    color: var(--primary-clr-3);
  }
`;

export default CustomSlider;
