const MenuItemsList = ({
  title,
  dispatch,
  filterByIngredient,
  filteredMenuItems,
}) => {
  return filteredMenuItems.map((item, i) => {
    const { type, title: name, desc, price, ingredients } = item.attributes;

    if (title === type) {
      return (
        <article key={i} className="menu-article">
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
                const { id, price, size } = value;
                return (
                  <p key={id} className="price">
                    {size ? `${size} cm - ${price} Ft` : `${price} Ft`}
                  </p>
                );
              })}
            </div>
            <p className="menu-desc">{desc}</p>
            <div className="ingredient-container">
              {ingredients.map((item) => {
                const { id, ingredients } = item;

                return (
                  <button
                    key={id}
                    className="menu-item-btn"
                    onClick={() => dispatch(filterByIngredient(ingredients))}
                  >
                    {ingredients}
                  </button>
                );
              })}
            </div>
          </footer>
        </article>
      );
    } else {
      return null;
    }
  });
};

export default MenuItemsList;
