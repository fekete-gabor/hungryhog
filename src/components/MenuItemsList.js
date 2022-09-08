const MenuItemsList = ({ title, filteredMenuItems }) => {
  return filteredMenuItems.map((item, i) => {
    const { type } = item.attributes;

    if (title === type) {
      return (
        <div key={i} className="q">
          <p>{item.attributes.title}</p>
          <p>{item.attributes.desc}</p>
          <img
            src={item.attributes.img.data.attributes.url}
            alt={item.attributes.title}
          />
        </div>
      );
    } else {
      return null;
    }
  });
};

export default MenuItemsList;
