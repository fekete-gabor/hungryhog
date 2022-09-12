import styled from "styled-components";
import { MenuItemsList, MenuItemsListView } from "./index";
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
                  <MenuItemsList
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
  margin-bottom: 4rem;

  .title-container {
    padding-top: 2rem;
    color: var(--primary-black);
  }

  .title-border {
    max-width: 40%;
    margin: 0rem auto;
    border-top: dotted 2px var(--primary-clr-5);
  }

  a,
  .clear-btn {
    cursor: pointer;
    background: none;
    border: none;
    text-transform: capitalize;
    margin: 1rem;
    transition: var(--transition);
    font-size: 1.2rem;
    &:hover {
      color: var(--primary-clr-5);
    }
  }

  .current {
    color: var(--primary-clr-5);
  }

  svg {
    transform: translate(3px, 3px);
    font-size: 1.2rem;
    color: var(--primary-clr-5);
  }

  @media screen and (min-width: 350px) {
    .title-container {
      padding: 3rem 2rem;
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
    display: grid;
    margin: 0 auto;
    gap: 3rem;
  }

  @media screen and (min-width: 350px) {
    .menu-item-desc-grid {
      width: 85vw;
    }
  }

  @media screen and (min-width: 450px) {
    .menu-item-desc-grid {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
  }

  @media screen and (min-width: 750px) {
    .menu-item-desc-grid {
      padding: 0 5rem;
    }
  }
`;

export default MenuItems;
