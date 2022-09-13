import bg from "../assets/slide_all.jpg";

const MenuHeroSlides = ({ mainSlide }) => {
  if (mainSlide?.attributes?.type === "összes" || mainSlide === undefined) {
    return (
      <div className="img-container">
        <img
          src={mainSlide?.attributes?.img?.data?.attributes?.url || bg}
          alt={mainSlide?.attributes?.type || "main"}
        />
      </div>
    );
  } else {
    return (
      <div className="img-container">
        <img
          src={mainSlide?.attributes?.img?.data?.attributes?.url}
          alt={mainSlide?.attributes?.type}
        />
      </div>
    );
  }
};

export default MenuHeroSlides;
