import styled from "styled-components";
import { MenuIngredients, MenuPrice } from "./index";

const MenuItemsListView = ({ title, filteredMenuItems }) => {
  return filteredMenuItems.map((item, i) => {
    const { type, title: name, desc, price, ingredients } = item.attributes;

    const sortedIngredients = [
      ...new Set(ingredients.map((food) => food.ingredients)),
    ].sort((a, b) => a && a.localeCompare(b));

    if (title === type) {
      return (
        <Wrapper key={i}>
          <article className="menu-article-list">
            <header>
              <h3>{`${i + 1}. ${name}`}</h3>
              <div className="ingredient-container">
                {sortedIngredients.map((item, i) => {
                  return <MenuIngredients key={i} item={item} />;
                })}
              </div>
              <p className="menu-desc">{desc}</p>
            </header>
            <div className="price-container">
              {price.map((value) => {
                return <MenuPrice key={value.id} value={value} />;
              })}
            </div>
          </article>
        </Wrapper>
      );
    } else {
      return null;
    }
  });
};

const Wrapper = styled.section`
  .menu-article-list {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 1rem;
    gap: 2rem;
    border-bottom: solid 2px darkgoldenrod;
  }

  h3 {
    margin-bottom: 2rem;
  }

  .menu-desc {
    margin-bottom: 1rem;
  }

  .price-container {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    gap: 0.5rem;
    p {
      width: fit-content;
      border: none;
      border-radius: 25px;
      background: goldenrod;
      padding: 1rem;
      margin: 0.25rem auto;
      font-size: 0.9rem;
      color: var(--primary-white);
      box-shadow: 3px 3px 10px #222;
    }
  }

  @media screen and (min-width: 650px) {
    .menu-article-list {
      width: 70vw;
    }

    .price-container {
      margin: 0;
      flex-direction: column;
      p {
        font-size: 1.1rem;
      }
    }
  }

  @media screen and (min-width: 950px) {
    .menu-article-list {
      display: grid;
      grid-template-columns: 85% 15%;
      align-items: center;
    }
  }
`;

export default MenuItemsListView;
