import { useEffect } from "react";
import styled from "styled-components";
import bg1 from "../assets/environment_1.jpg";
import bg2 from "../assets/environment_2.jpg";
import bg3 from "../assets/environment_3.jpg";
import bg4 from "../assets/environment_4.jpg";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Environment = () => {
  useEffect(() => {
    gsap.utils.toArray(".environment-img").forEach((img, i) => {
      const target = img.parentElement.children[1];
      ScrollTrigger.create({
        trigger: img,
        start: "top center",
        end: "bottom center",
        markers: true,
        onEnter: () =>
          gsap.to(target, {
            duration: 2.5,
            ease: "circ.out",
            scaleY: 0,
            transformOrigin: "top center",
          }),
      });
    });
  }, []);

  return (
    <Wrapper>
      <div className="title-container">
        <h2>környezet</h2>
      </div>
      <div className="environment-container">
        <article className="">
          <header>
            <img
              src={bg1}
              alt="illustration"
              className="environment-img"
              data-depth="0.1"
            />
            <div className="environment-mask"></div>
          </header>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit voluptatem laudantium quos accusantium perferendis
            deleniti officia optio odit exercitationem. Repellat?
          </p>
        </article>
        <article className="">
          <header>
            <img
              src={bg2}
              alt="illustration"
              className="environment-img"
              data-depth="0.3"
            />
            <div className="environment-mask"></div>
          </header>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit voluptatem laudantium quos accusantium perferendis
            deleniti officia optio odit exercitationem. Repellat?
          </p>
        </article>
        <article className="">
          <header>
            <img
              src={bg3}
              alt="illustration"
              className="environment-img"
              data-depth="0.5"
            />
            <div className="environment-mask"></div>
          </header>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit voluptatem laudantium quos accusantium perferendis
            deleniti officia optio odit exercitationem. Repellat?
          </p>
        </article>
        <article className="">
          <header>
            <img
              src={bg4}
              alt="illustration"
              className="environment-img"
              data-depth="0.8"
            />
            <div className="environment-mask"></div>
          </header>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit voluptatem laudantium quos accusantium perferendis
            deleniti officia optio odit exercitationem. Repellat?
          </p>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  background: var(--primary-clr-4);
  color: var(--primary-white);

  .title-container {
    width: 100%;
    padding-top: 3rem;
    text-align: center;
    color: var(--primary-white);
  }

  header {
    position: relative;
    width: fit-content;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 25px;
    }
    div {
      position: absolute;
      background: var(--primary-clr-4);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
`;

export default Environment;
