import styled from "styled-components";
import { MenuIngredients, MenuPrice } from "./index";

const MenuItemsList = ({ title, filteredMenuItems }) => {
  return filteredMenuItems.map((item, i) => {
    const { type, title: name, desc, price, ingredients } = item.attributes;

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
              <p className="menu-desc">{desc}</p>
              <div className="ingredient-container">
                {ingredients.map((item) => {
                  return <MenuIngredients key={item.id} item={item} />;
                })}
              </div>
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
    display: grid;
    grid-template-rows: auto auto auto 1fr;
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
    margin: 1rem auto 0;
    align-self: flex-end;
  }

  .menu-item-btn {
    margin: 1rem;
    border-bottom: solid 2px darkgoldenrod;
    &:hover {
      color: var(--primary-clr-5);
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
      padding: 0 5rem;
    }
  }
`;

export default MenuItemsList;
