import styled from "styled-components";
import { MenuItemsList } from "./index";
import { getUniqueValues } from "../utils/helpers";
import { filterByIngredient } from "../features/menu/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MenuItems = () => {
  const { filteredMenuItems } = useSelector((store) => store.menu);
  const dispatch = useDispatch();

  const titles = getUniqueValues(filteredMenuItems, "type");

  return (
    <Wrapper>
      <div>
        {titles.map((title, i) => {
          return (
            <div key={i} id={title} className="menu-item-container">
              <div
                className={
                  i !== 0 ? "title-border title-container" : "title-container"
                }
              >
                <h2>{title}</h2>
              </div>
              <div className="menu-item-desc">
                <MenuItemsList
                  title={title}
                  filterByIngredient={filterByIngredient}
                  filteredMenuItems={filteredMenuItems}
                  dispatch={dispatch}
                  key={i}
                />
              </div>
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
    padding: 2rem 0;
    color: var(--primary-black);
  }

  .title-border {
    max-width: 40%;
    margin: 0rem auto;
    border-top: dotted 2px var(--primary-clr-5);
  }

  .menu-item-desc {
    display: grid;
    margin: 0 auto;
    gap: 3rem;
  }

  .menu-article {
    text-align: center;
  }

  footer {
    display: grid;
    grid-template-rows: auto auto auto 1fr;
    align-items: center;

    h3 {
      text-decoration: underline darkgoldenrod;
    }
    p {
    }
  }

  .price-container {
    width: fit-content;
    margin: 0 auto;
    gap: 1rem;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
  }

  .price {
    font-size: 1.25rem;
    text-decoration: underline darkgoldenrod;
  }

  .ingredient-container {
    width: fit-content;
    height: fit-content;
    margin: 1rem auto 0;
    align-self: flex-end;
  }

  .menu-item-btn {
    cursor: pointer;
    background: none;
    border: none;
    text-transform: capitalize;
    margin: 1rem;
    transition: var(--transition);
    &:hover {
      color: darkgoldenrod;
    }
  }

  header {
    width: 100%;
    height: 400px;
    margin-bottom: 1rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 350px) {
    .title-container {
      padding: 3rem 2rem;
    }

    .menu-item-desc {
      width: 85vw;
    }

    footer {
      padding: 1rem;
    }
  }

  @media screen and (min-width: 450px) {
    .menu-item-desc {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
  }

  @media screen and (min-width: 750px) {
    .menu-item-desc {
      padding: 5rem;
    }
  }
`;

export default MenuItems;
