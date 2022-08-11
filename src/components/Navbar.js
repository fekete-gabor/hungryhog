import { useEffect } from "react";
import styled from "styled-components";
import { links } from "../utils/navLinks";
import { AiOutlineBars, CgCloseR } from "../utils/icons";
import { Link, NavLink } from "react-router-dom";
import useMediaQuery from "../utils/mediaQuery";
import { sidebarOpen, sidebarClose } from "../features/sidebar/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { gsap } from "gsap/dist/gsap";

const Navbar = () => {
  const { isSidebar } = useSelector((store) => store.sidebar);
  const dispatch = useDispatch();
  const mediaQuery = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    if (mediaQuery) {
      dispatch(sidebarClose());
    }
  }, [mediaQuery]);

  useEffect(() => {
    gsap.set(".sidebar", { x: "-100%" });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    if (isSidebar) {
      tl.to(".sidebar", { duration: 1, autoAlpha: 1, x: "0%" });
    } else {
      tl.to(".sidebar", { duration: 1, autoAlpha: 0, x: "-100%" });
    }
  }, [isSidebar]);

  return (
    <Wrapper>
      <div>
        <Link to="/" onClick={() => dispatch(sidebarClose())}>
          <h3>
            Hungry<span>Hog</span>
          </h3>
        </Link>
      </div>
      <div>
        <ul className="link-container">
          {links.map((link) => {
            const { text, url, id } = link;
            return (
              <li key={id}>
                <NavLink
                  to={url}
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        {!isSidebar ? (
          <AiOutlineBars
            className="nav-toggle"
            onClick={() => dispatch(sidebarOpen())}
          />
        ) : (
          <CgCloseR
            className="nav-toggle"
            onClick={() => dispatch(sidebarClose())}
          />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  min-height: 70px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 0rem 2rem;
  background: var(--primary-clr-4);
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: solid 2px var(--primary-white);

  h3 {
    cursor: pointer;
    font-family: var(--font-family-secondary);
    color: var(--primary-white);
    transition: var(--transition);
    &:hover {
      color: var(--primary-clr-3);
    }
  }

  span {
    color: var(--primary-clr-5);
  }

  .link-container {
    display: flex;
    justify-content: center;
    align-self: center;
  }

  .link {
    padding: 1rem 0.5rem;
    display: none;
    color: var(--primary-white);
    text-transform: capitalize;
    font-size: 1.15rem;
    letter-spacing: 1px;
    transition: var(--transition);
    &:hover {
      color: #fc3;
    }
  }

  .active {
    padding: 1rem 0.5rem;
    color: var(--primary-clr-3);
  }

  .nav-toggle {
    cursor: pointer;
    display: flex;
    font-size: 2rem;
    color: var(--primary-white);
    transition: var(--transition);
    &:hover {
      color: var(--primary-clr-3);
    }
  }

  @media screen and (min-width: 992px) {
    .link {
      display: flex;
    }

    .nav-toggle {
      display: none;
    }
  }
`;

export default Navbar;
