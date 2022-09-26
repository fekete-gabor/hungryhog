import { useState, useEffect } from "react";
import useMediaQuery from "../utils/mediaQuery";
import styled from "styled-components";
import { History, Founder, Building, Owners } from "../components";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutUsPage = () => {
  const mediaQuery = useMediaQuery("(min-width: 1550px)");
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const tempArray = document.querySelectorAll(".reveal");
    setParagraphs(tempArray);
  }, []);

  useEffect(() => {
    paragraphs.forEach((paragraph) => {
      gsap.set(paragraph, { autoAlpha: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: paragraph,
          start: "top center",
          end: "bottom center",
        },
      });

      tl.to(paragraph, { duration: 1, autoAlpha: 1 });
    });
    // eslint-disable-next-line
  }, [paragraphs, mediaQuery]);

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
