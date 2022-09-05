const MenuHeroSlides = ({ mainSlide }) => {
  return (
    <div className="img-container">
      <img
        src={mainSlide.attributes.img.data.attributes.url}
        alt={mainSlide.attributes.type}
      />
    </div>
  );
};

export default MenuHeroSlides;
