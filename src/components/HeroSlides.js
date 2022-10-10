import { useState, useEffect } from "react";
import useMediaQuery from "../utils/mediaQuery";
import { useSelector } from "react-redux";
import { gsap } from "gsap/dist/gsap";

const HeroSlides = () => {
  const { slides } = useSelector((store) => store.hero);
  const mediaQuery = useMediaQuery("(min-width: 620px)");
  const [mainImg, setMainImg] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setMainImg(slides[currentIndex]?.attributes?.url);

    if (!mediaQuery) {
      setTimeout(() => {
        let index = currentIndex + 1;
        if (index > slides.length - 1) {
          index = 0;
        }
        setCurrentIndex(index);
      }, 5000);
    }
    // eslint-disable-next-line
  }, [slides, mediaQuery, currentIndex]);

  useEffect(() => {
    if (mediaQuery) {
      gsap.utils.toArray(".slide").forEach((slide, i) => {
        const slideWidth = slide.getBoundingClientRect().width;
        gsap.set(slide, {
          x: (i * slideWidth) / 1.3,
          clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
        });

        const totalWidth = slideWidth * slides.length;
        const dirFromRight = "-=" + totalWidth;
        const mod = gsap.utils.wrap(-500, totalWidth / 1.519);

        gsap.timeline().to(slide, {
          x: dirFromRight,
          modifiers: {
            x: (x) => mod(parseFloat(x)) + "px",
          },
          duration: 100,
          ease: "none",
          repeat: -1,
        });
      });
    }
  }, [slides, mediaQuery]);

  if (!mediaQuery) {
    return <img src={mainImg} alt="slide" className="slide" />;
  }

  return slides.map((slide, i) => {
    const img = slide?.attributes?.url;

    return <img src={img} alt="slide" key={i} className="slide" />;
  });
};

export default HeroSlides;
