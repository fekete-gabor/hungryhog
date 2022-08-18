import { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux/es/exports";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { gsap } from "gsap/dist/gsap";

const OpeningHours = () => {
  const { openingHours } = useSelector((store) => store.contacts);

  useEffect(() => {
    gsap.utils.toArray(".btn").forEach((btn) => {
      const target = btn.children[0];
      const tl = gsap.timeline({ paused: true });
      const anim = tl.fromTo(
        target,
        { width: "1px" },
        { duration: 0.75, width: "120%" }
      );

      btn.addEventListener("mouseover", () => {
        anim.play();
      });

      btn.addEventListener("mouseleave", () => {
        anim.reverse();
      });
    });
  }, []);

  return (
    <Wrapper>
      <div className="container">
        <h2>{openingHours?.attributes?.title}</h2>
        <ReactMarkdown
          children={openingHours?.attributes?.desc}
          escapeHtml={false}
        />
        <Link to="/menu">
          <button className="btn">
            megnézem az étlapot<span></span>
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  padding: 2rem;
  border: outset 2px var(--primary-clr-5);
  border-radius: 25px;

  h2 {
    padding-bottom: 3rem;
    color: var(--primary-clr-3);
  }

  p {
    font-size: 1.5rem;
    color: var(--primary-white);
  }

  button {
    cursor: pointer;
    z-index: 1;
    position: relative;
    overflow: hidden;
    margin: 2rem;
    padding: 1rem 1rem 1rem 1.5rem;
    border: solid 1px var(--primary-clr-5);
    font-size: clamp(1rem, 5vw, 1.5rem);
    color: var(--primary-white);
    background: none;
    text-transform: uppercase;
    transition: var(--transition);

    span {
      z-index: -1;
      position: absolute;
      top: 0;
      left: -10%;
      background: var(--primary-clr-5);
      height: 100%;
      transform: skewX(-20deg);
    }
  }
`;

export default OpeningHours;
