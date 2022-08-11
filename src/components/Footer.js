import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <h2>footer</h2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  color: dodgerblue;
  background: var(--primary-clr-4);
  border-top: solid 2px var(--primary-white);
`;

export default Footer;
