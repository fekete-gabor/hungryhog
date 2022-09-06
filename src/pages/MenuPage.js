import styled from "styled-components";
import { MenuHero, MenuItems } from "../components";

const MenuPage = () => {
  return (
    <Wrapper>
      <MenuHero />
      <MenuItems />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
`;

export default MenuPage;
