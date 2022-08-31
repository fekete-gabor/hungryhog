import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { gsap } from "gsap/dist/gsap";

const OpeningHours = () => {
  const { openingHours } = useSelector((store) => store.contacts);

  useEffect(() => {
    const btn = document.querySelector(".menu-btn");
    const target = btn.children[0];
    const tl = gsap.timeline({ paused: true });
    const anim = tl.fromTo(
      target,
      { width: "1px" },
      { duration: 0.75, width: "120%" }
    );

    btn.addEventListener("mouseover", () => {
      anim.play();
    });

    btn.addEventListener("mouseleave", () => {
      anim.reverse();
    });
  }, []);

  return openingHours.map((item) => {
    const { id, day_start, day_end, hour_start, hour_end } = item;

    return (
      <div key={id}>
        <p className="capitalize">
          {day_end !== null ? `${day_start} - ${day_end}:` : `${day_start}:`}
        </p>
        <p>
          {hour_end !== null
            ? `${hour_start} - ${hour_end}-ig`
            : `${hour_start}`}
        </p>
      </div>
    );
  });
};

export default OpeningHours;
