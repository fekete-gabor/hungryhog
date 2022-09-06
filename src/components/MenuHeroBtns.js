import { useEffect } from "react";
import { setIndex, filterMenuItems } from "../features/menu/menuSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getUniqueValues } from "../utils/helpers";
import { gsap } from "gsap/dist/gsap";

const MenuHeroBtns = ({ menuItems, menuSlides, changeSlide }) => {
  const { index } = useSelector((store) => store.menu);

  const dispatch = useDispatch();

  const result = menuSlides.find((item) => item.attributes.type === "összes");

  const menuBtns = getUniqueValues(menuItems, "type", true);

  useEffect(() => {
    gsap.set(".menu-btn-container", { autoAlpha: 0 });
  }, []);

  useEffect(() => {
    gsap.to(".menu-btn-container", { autoAlpha: 1 });

    gsap.utils.toArray(".menu-btn").forEach((btn, i) => {
      const tl = gsap.timeline();
      const underline = btn.nextElementSibling;

      if (i === index) {
        tl.to(underline, { width: "100%" });
      } else {
        tl.to(underline, { width: "0" });
      }
    });
  }, [menuBtns, index]);

  const handleChange = (btn, i) => {
    dispatch(setIndex(i));
    dispatch(filterMenuItems(btn));
    changeSlide(btn);
  };

  return (
    <div className="menu-btn-container">
      {menuBtns.map((btn, i) => {
        return (
          <div key={i}>
            <button onClick={() => handleChange(btn, i)} className="menu-btn">
              {btn}
            </button>
            <span></span>
          </div>
        );
      })}
    </div>
  );
};

export default MenuHeroBtns;
