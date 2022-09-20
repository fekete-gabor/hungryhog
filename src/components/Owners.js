import { useEffect } from "react";
import { CustomSlider } from "./index";
import useMediaQuery from "../utils/mediaQuery";
import Paragraph from "../utils/Paragraph";
import chef_1 from "../assets/chef_1.jpg";
import chef_2 from "../assets/chef_2.jpg";
import styled from "styled-components";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Owners = () => {
  const mediaQuery = useMediaQuery("(min-width: 1550px)");

  useEffect(() => {
    gsap.utils.toArray(".reveal").forEach((paragraph) => {
      gsap.set(paragraph, { autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: paragraph,
        start: "top 80%",
        end: "bottom center",
        onEnter: () => gsap.to(paragraph, { duration: 1, autoAlpha: 1 }),
      });
    });
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".mask").forEach((mask) => {
      gsap.set(mask, { height: "100%" });

      ScrollTrigger.create({
        trigger: mask,
        start: "top center",
        end: "bottom center",
        onEnter: () => gsap.to(mask, { duration: 1, height: 0 }),
      });
    });
  }, []);

  return (
    <Wrapper>
      {mediaQuery && (
        <CustomSlider
          title={"de hogy kik is vagyunk mi pontosan?"}
          backgroundColor={"#48db72"}
          underlineColor={"#DB4848"}
          fontColor={"#262626"}
          shadowColor={"bisque"}
        />
      )}
      {!mediaQuery && (
        <h2 className="title">de hogy kik is vagyunk pontosan?</h2>
      )}
      <article className="container-1">
        <header>
          <img src={chef_1} alt="first chef" />
          <div className="mask"></div>
        </header>
        <div className="desc-container-left">
          <h2>kaarle eemi mesterszakás</h2>
          <Paragraph amount={1} className={"reveal"} />
          <div className="reveal"></div>
          <Paragraph amount={3} className={"reveal"} />
          <div className="reveal"></div>
          <Paragraph amount={1} className={"reveal"} />
        </div>
      </article>
      {!mediaQuery && <h1>&amp;&amp;</h1>}
      <article className="container-2">
        <div className="desc-container-right">
          <h2>Gael Marcelo mesterszakás</h2>
          <Paragraph amount={1} className={"reveal"} />
          <div className="reveal"></div>
          <Paragraph amount={3} className={"reveal"} />
          <div className="reveal"></div>
          <Paragraph amount={1} className={"reveal"} />
        </div>
        <footer>
          <img src={chef_2} alt="second chef" />
          <div className="mask"></div>
        </footer>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top: var(--border);
  background: #262626;
  height: fit-content;
  padding-bottom: 3rem;
  text-align: center;

  h1 {
    color: #fc3;
    margin: 3rem 0;
  }

  .title {
    text-align: center;
    color: #f25774;
    margin: 2rem 0 5rem 0;
  }

  .container-1,
  .container-2 {
    display: grid;
  }

  header,
  footer {
    margin: 0 auto;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .mask {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #262626;
  }

  .desc-container-left,
  .desc-container-right {
    padding: 0 1rem;
    font-size: 1.05rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    div {
      width: 65%;
      height: 2px;
      background: #48db72;
    }
    h2 {
      margin: 2rem 0;
      color: #48db72;
    }
    p {
      margin: 1rem 0;
      color: var(--primary-white);
      font-size: 1.05rem;
    }
  }

  .desc-container-right {
    h2 {
      color: #f25774;
    }
    div {
      width: 65%;
      height: 2px;
      background: #f25774;
    }
  }

  @media screen and (min-width: 992px) {
    h1 {
      margin: 1rem 0;
    }

    .container-1,
    .container-2 {
      grid-template-columns: 45% 55%;
      padding: 5rem;
    }

    .container-2 {
      grid-template-columns: 55% 45%;
    }

    .desc-container-left {
      text-align: left;
      align-items: flex-start;
      div {
        align-self: flex-start;
      }
      h2 {
        margin: 0 1rem 2rem 0rem;
      }
      p {
        font-size: 1.25rem;
      }
    }
    .desc-container-right {
      text-align: right;
      align-items: flex-end;
      div {
        align-self: flex-end;
      }
      h2 {
        margin: 0 1rem 2rem 0rem;
      }
      p {
        font-size: 1.25rem;
      }
    }
  }

  @media screen and (min-width: 1550px) {
    border-top: none;
  }
`;

export default Owners;
