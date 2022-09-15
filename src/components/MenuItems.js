import styled from "styled-components";
import { MenuItemsListView, MenuItemsGridView } from "./index";
import { getUniqueValues } from "../utils/helpers";
import { useSelector } from "react-redux";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MenuItems = () => {
  const { filteredMenuItems, viewStyle } = useSelector((store) => store.menu);

  const titles = getUniqueValues(filteredMenuItems, "type");

  return (
    <Wrapper id="menu">
      <div>
        {titles.map((title, i) => {
          return (
            <div key={i} id={title} className="menu-item-container">
              <div
                className={
                  i !== 0 && viewStyle === "grid"
                    ? "title-border title-container"
                    : "title-container"
                }
              >
                <h2>{title}</h2>
              </div>
              {viewStyle === "list" ? (
                <div className="menu-item-desc-list">
                  <MenuItemsListView
                    title={title}
                    filteredMenuItems={filteredMenuItems}
                    key={i}
                  />
                </div>
              ) : (
                <div className="menu-item-desc-grid">
                  <MenuItemsGridView
                    title={title}
                    filteredMenuItems={filteredMenuItems}
                    key={i}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: fit-content;
  margin-bottom: 10rem;

  .title-container {
    h2 {
      color: var(--primary-black);
      letter-spacing: 4px;
      text-transform: uppercase;
    }
  }

  .title-border {
    max-width: 40%;
    margin: 3rem auto 0;
    border-top: dotted 2px var(--primary-clr-5);
  }

  .ingredient-container {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem auto;
    gap: 1rem;
    font-family: var(--ff-secondary);
    letter-spacing: 2px;
  }

  a,
  button,
  .clear-btn {
    cursor: pointer;
    background: none;
    border: none;
    color: var(--primary-black);
    text-transform: capitalize;
    transition: var(--transition);
    font-size: 1.2rem;
    transform: translate(0px, 0px);
    padding: 0.25rem 0.5rem;
    &:hover {
      transform: translate(-4px, -4px);
      color: var(--primary-white);
      background: dodgerblue;
      border-radius: 7.5px;
    }
  }

  .menu-desc {
    text-transform: capitalize;
  }

  .current {
    color: var(--primary-white);
    background: var(--primary-clr-5);
    border-radius: 7.5px;
    padding: 0.25rem 0.5rem 0;
    &:hover {
      background: red;
    }
  }

  svg {
    transform: translate(3px, 3px);
    font-size: 1.2rem;
    color: var(--primary-white);
  }

  @media screen and (min-width: 350px) {
    .title-container {
      padding: 3rem 0;
    }

    .menu-item-btn {
      font-size: 1.1rem;
    }
  }

  // *************
  // LIST VIEW
  // *************

  .menu-item-desc-list {
    display: grid;
    margin: 0 auto;
    gap: 3rem;
  }

  // *************
  // GRID VIEW
  // *************

  .menu-item-desc-grid {
    width: 100vw;
    display: grid;
    margin: 0 auto;
    gap: 3rem;
  }

  @media screen and (min-width: 350px) {
    .menu-item-desc-grid {
      /* width: 85vw; */
    }
  }

  @media screen and (min-width: 550px) {
    .menu-item-desc-grid {
      grid-template-columns: repeat(auto-fit, minmax(475px, 1fr));
    }
  }

  @media screen and (min-width: 750px) {
    .menu-item-desc-grid {
      padding: 0 5rem;
    }
  }
`;

export default MenuItems;
