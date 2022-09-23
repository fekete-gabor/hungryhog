import { useEffect } from "react";
import useMediaQuery from "../utils/mediaQuery";
import styled from "styled-components";
import { History, Founder, Building, Owners } from "../components";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mediaQuery = useMediaQuery("(min-width: 1550px)");

  useEffect(() => {
    gsap.utils.toArray(".reveal").forEach((paragraph) => {
      gsap.set(paragraph, { autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: paragraph,
        start: "top 80%",
        end: "bottom center",
        onEnter: () => gsap.to(paragraph, { duration: 1, autoAlpha: 1 }),
      });
    });
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
  min-height: 100vh;
`;

export default AboutUsPage;
