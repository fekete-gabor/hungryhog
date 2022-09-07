const MenuHeroTitle = ({ mainSlide }) => {
  if (mainSlide?.attributes?.type === "összes" || mainSlide === undefined) {
    return (
      <div className="title-container">
        <h2 className="banner-title">
          Hungry<span>Hog</span>
        </h2>
        <p className="banner-text">
          since <span>1958.</span>
        </p>
      </div>
    );
  } else {
    return (
      <div className="title-container">
        <h2 className="banner-title">{mainSlide?.attributes?.type}</h2>
      </div>
    );
  }
};

export default MenuHeroTitle;
