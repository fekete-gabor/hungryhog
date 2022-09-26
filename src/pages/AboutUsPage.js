import { useEffect } from "react";
import useMediaQuery from "../utils/mediaQuery";
import styled from "styled-components";
import { History, Founder, Building, Owners } from "../components";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutUsPage = () => {
  const mediaQuery = useMediaQuery("(min-width: 1550px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".reveal").forEach((paragraph) => {
      gsap.set(paragraph, { autoAlpha: 0 });

      const tl = gsap.timeline({ paused: true });
      const anim = tl.to(paragraph, { duration: 1, autoAlpha: 1 });

      ScrollTrigger.create({
        trigger: paragraph,
        start: "top center",
        end: "bottom center",
        markers: true,
        onEnter: () => anim.play(),
      });
    });
    // eslint-disable-next-line
  }, [mediaQuery]);

  return (
    <Wrapper>
      <History />
      <Founder />
      <Building />
      <Owners />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
`;

export default AboutUsPage;
