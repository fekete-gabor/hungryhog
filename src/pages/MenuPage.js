import styled from "styled-components";
import { MenuHero } from "../components";

const MenuPage = () => {
  return (
    <Wrapper>
      <MenuHero />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
`;

export default MenuPage;
