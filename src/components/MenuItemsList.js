const MenuItemsList = ({ title, filteredMenuItems }) => {
  return filteredMenuItems.map((item, i) => {
    const { type } = item.attributes;

    if (title === type) {
      return (
        <div key={i}>
          <p>{item.attributes.title}</p>
          <p>{item.attributes.desc}</p>
          <img
            src={item.attributes.img.data.attributes.url}
            alt={item.attributes.title}
          />
        </div>
      );
    }
  });
};

export default MenuItemsList;
