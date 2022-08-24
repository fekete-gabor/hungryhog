import { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux/es/exports";
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
      <h2>nyitvatartás</h2>
      {openingHours.map((item) => {
        const { id, day_start, day_end, hour_start, hour_end } = item;

        return (
          <div key={id}>
            <p className="capitalize">
              {day_end !== null
                ? `${day_start} - ${day_end}:`
                : `${day_start}:`}
            </p>
            <p>
              {hour_end !== null
                ? `${hour_start} - ${hour_end}-ig`
                : `${hour_start}`}
            </p>
          </div>
        );
      })}
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
    font-size: 1.25rem;
    color: var(--primary-white);
  }

  div {
    margin-bottom: 0.5rem;
  }

  .capitalize {
    text-transform: capitalize;
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

    p {
      font-size: 1.5rem;
    }
  }
`;

export default OpeningHours;
