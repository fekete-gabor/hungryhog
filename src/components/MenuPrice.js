const MenuPrice = ({ value }) => {
  const { price, size } = value;

  return (
    <p className="price">{size ? `${size} cm - ${price} Ft` : `${price} Ft`}</p>
  );
};

export default MenuPrice;
