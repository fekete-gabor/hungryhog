import styled from "styled-components";
import { links } from "../utils/navLinks";
import { AiOutlineBars } from "../utils/icons";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="">
        <Link to="/">
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
        <AiOutlineBars className="nav-toggle" />
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

  h3 {
    cursor: pointer;
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
      background: var(--primary-clr-5);
      color: var(--primary-white);
    }
  }

  .active {
    padding: 1rem 0.5rem;
    background: var(--primary-clr-3);
    color: #222;
  }

  .nav-toggle {
    cursor: pointer;
    display: flex;
    font-size: 2rem;
    color: var(--primary-white);
    transition: var(--transition);
    &:hover {
      color: var(--primary-clr-5);
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
