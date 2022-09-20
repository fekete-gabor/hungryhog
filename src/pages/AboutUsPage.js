import { useEffect } from "react";
import styled from "styled-components";
import { History, Founder, Building, Owners } from "../components";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
