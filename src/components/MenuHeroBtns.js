import { useEffect } from "react";
import {
  changeMainSlide,
  setMenuBtnIndex,
  filterMenuItems,
} from "../features/menu/menuSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getUniqueValues } from "../utils/helpers";
import { gsap } from "gsap/dist/gsap";

const MenuHeroBtns = ({ menuItems }) => {
  const { menuBtnIndex } = useSelector((store) => store.menu);

  const dispatch = useDispatch();

  const menuBtns = getUniqueValues(menuItems, "type", true);

  useEffect(() => {
    gsap.set(".menu-btn-container", { autoAlpha: 0 });
  }, []);

  useEffect(() => {
    gsap.to(".menu-btn-container", { autoAlpha: 1 });

    gsap.utils.toArray(".menu-btn").forEach((btn, i) => {
      const tl = gsap.timeline();
      const underline = btn.nextElementSibling;

      if (i === menuBtnIndex) {
        tl.to(underline, { width: "100%" });
      } else {
        tl.to(underline, { width: "0" });
      }
    });
  }, [menuBtns, menuBtnIndex]);

  const handleChange = (btn, i) => {
    dispatch(setMenuBtnIndex(i));
    dispatch(filterMenuItems(btn));
    dispatch(changeMainSlide(btn));
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
