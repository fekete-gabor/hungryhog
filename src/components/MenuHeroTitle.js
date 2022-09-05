const MenuHeroTitle = ({ mainSlide }) => {
  return (
    <div className="title-container">
      {mainSlide.attributes.type === "összes" ? (
        <>
          <h2 className="banner-title">
            Hungry<span>Hog</span>
          </h2>
          <p className="banner-text">
            since <span>1958.</span>
          </p>
        </>
      ) : (
        <h2 className="banner-title">{mainSlide.attributes.type}</h2>
      )}
    </div>
  );
};

export default MenuHeroTitle;
