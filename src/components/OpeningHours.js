import { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux/es/exports";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { gsap } from "gsap/dist/gsap";

const OpeningHours = () => {
  const { openingHours } = useSelector((store) => store.contacts);

  useEffect(() => {
    const btn = document.querySelector(".menu-btn");
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
  }, []);

  return (
    <Wrapper>
      <h2>{openingHours?.attributes?.title}</h2>
      <ReactMarkdown
        children={openingHours?.attributes?.desc}
        escapeHtml={false}
      />
      <Link to="/menu">
        <button className="menu-btn btn">
          megnézem az étlapot<span></span>
        </button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  padding: 2rem 0;
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

  span {
    z-index: -1;
    position: absolute;
    top: 0;
    left: -10%;
    background: var(--primary-clr-5);
    height: 100%;
    transform: skewX(-20deg);
  }

  @media screen and (min-width: 300px) {
    padding: 2rem;
  }
`;

export default OpeningHours;
