import { useEffect } from "react";
import { setIndex } from "../features/menu/menuSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getUniqueValues } from "../utils/helpers";
import { gsap } from "gsap/dist/gsap";

const MenuHeroBtns = ({ changeSlide, menuSlides }) => {
  const { index } = useSelector((store) => store.menu);

  const dispatch = useDispatch();
  const menuBtns = getUniqueValues(menuSlides, "type");

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

  return (
    <div className="menu-btn-container">
      {menuBtns.map((btn, i) => {
        return (
          <div key={i}>
            <button
              onClick={() => {
                dispatch(setIndex(i));
                changeSlide(btn);
              }}
              className="menu-btn"
            >
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
