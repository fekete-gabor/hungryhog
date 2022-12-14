import { useState, useEffect } from "react";
import bg from "../assets/slide_all.jpg";
import {
  setMenuBtnIndex,
  filterMenuItems,
  changeMainSlide,
} from "../features/menu/menuSlice";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { gsap } from "gsap/dist/gsap";

const HomePageMenu = () => {
  const { menuSlides, menuItems } = useSelector((store) => store.menu);
  const [slides, setSlides] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const tempArray = menuSlides.filter((slide) => {
      const temp = menuItems.find(
        (item) => item.attributes.type === slide.attributes.type
      );
      return temp;
    });
    setSlides(tempArray);
    // eslint-disable-next-line
  }, [menuSlides, menuItems]);

  useEffect(() => {
    gsap.utils.toArray(".menu-container").forEach((item, i) => {
      gsap.set(item, { border: "solid 2px transparent" });
      const tl = gsap.timeline({ paused: true });
      const title = item.children[0];
      const gradient = item.children[2];

      const anim = tl
        .fromTo(
          item,
          { border: "solid 2px transparent" },
          { border: "solid 2px #f2a007" }
        )
        .fromTo(title, { autoAlpha: 1 }, { autoAlpha: 0 }, 0)
        .fromTo(gradient, { autoAlpha: 0.35 }, { autoAlpha: 0 }, 0);

      item.addEventListener("mouseover", () => {
        anim.play();
      });

      item.addEventListener("mouseleave", () => {
        anim.reverse();
      });
    });
  }, [slides]);

  const handleChange = (type, i) => {
    dispatch(setMenuBtnIndex(i + 1));
    dispatch(filterMenuItems(type));
    dispatch(changeMainSlide(type));
  };

  return (
    <Wrapper>
      <div className="main-container">
        {slides.map((item, i) => {
          const type = item?.attributes?.type;
          const img = item?.attributes?.img?.data?.attributes?.url;

          if (type !== "összes") {
            return (
              <Link
                to={`/menu#${type}`}
                key={i}
                onClick={() => handleChange(type, i)}
              >
                <div className="menu-container">
                  <h2>{type}</h2>
                  <img src={img || bg} alt={type} />
                  <div className="gradient"></div>
                </div>
              </Link>
            );
          } else {
            return null;
          }
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
  background: var(--primary-clr-4);
  border-bottom: var(--border);

  .main-container {
    display: grid;
    gap: 1rem;
  }

  div {
    cursor: pointer;
    width: 100%;
    height: 100%;
    position: relative;
  }

  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--primary-white);
    letter-spacing: 5px;
    z-index: 2;
  }

  .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #222;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 350px) {
    .main-container {
      padding: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }

  @media screen and (min-width: 1300px) {
    .main-container {
      max-width: 85vw;
      margin: 0 auto;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    }
  }
`;

export default HomePageMenu;
