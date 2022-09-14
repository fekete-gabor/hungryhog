import styled from "styled-components";
import { MenuIngredients, MenuPrice } from "./index";

const MenuItemsGridView = ({ title, filteredMenuItems }) => {
  return filteredMenuItems.map((item, i) => {
    const { type, title: name, desc, price, ingredients } = item.attributes;

    const sortedIngredients = [
      ...new Set(ingredients.map((food) => food.ingredients)),
    ].sort((a, b) => a && a.localeCompare(b));

    if (title === type) {
      return (
        <Wrapper key={i}>
          <article className="menu-article">
            <header>
              <img
                src={item.attributes.img.data.attributes.url}
                alt={item.attributes.title}
              />
            </header>
            <footer>
              <h3>{`${i + 1}. ${name}`}</h3>
              <div className="price-container">
                {price.map((value) => {
                  return <MenuPrice key={value.id} value={value} />;
                })}
              </div>
              <div className="ingredient-container">
                {sortedIngredients.map((item, i) => {
                  return <MenuIngredients key={i} item={item} />;
                })}
              </div>
              <p className="menu-desc">{desc}</p>
            </footer>
          </article>
        </Wrapper>
      );
    } else {
      return null;
    }
  });
};

const Wrapper = styled.section`
  .menu-article {
    text-align: center;
  }

  footer {
    min-height: 300px;
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    align-items: center;
    h3 {
      text-decoration: underline darkgoldenrod;
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
    margin: 1rem auto 2rem;
    justify-content: center;
    align-self: flex-start;
    /* text-align: center; */
  }

  header {
    width: 100%;
    height: 400px;
    margin-bottom: 1rem;
    img {
      width: 100%;
      max-width: 700px;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 350px) {
    .title-container {
      padding: 3rem 2rem;
    }

    footer {
      padding: 1rem 0;
    }
  }
`;

export default MenuItemsGridView;
