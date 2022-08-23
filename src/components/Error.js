import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { gsap } from "gsap/dist/gsap";

const Error = () => {
  useEffect(() => {
    gsap.utils.toArray(".error-btn").forEach((btn) => {
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
      <h1>404</h1>
      <h2>a keresett oldal nem található</h2>
      <div className="link-container">
        <Link to="/">
          <button className="error-btn btn">
            vissza a főoldalra<span></span>
          </button>
        </Link>
        <Link to="/menu">
          <button className="error-btn btn">
            megnézem az étlapot<span></span>
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
  background-color: var(--primary-clr-4);
  color: var(--primary-white);

  h1 {
    color: var(--primary-clr-5);
    font-size: clamp(5rem, 10vw, 5.5rem);
    margin-bottom: 2rem;
    text-shadow: -1px 1px 2px #fff, 1px 1px 2px #fff, 1px -1px 0 #fff,
      -1px -1px 0 #fff;
  }

  h2 {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: clamp(2rem, 7vw, 3rem);
  }

  .link-container {
    margin-top: 2rem;

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

export default Error;
