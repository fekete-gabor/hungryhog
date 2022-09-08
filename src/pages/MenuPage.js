import { useEffect } from "react";
import styled from "styled-components";
import { MenuHero, MenuItems, MenuSidebar } from "../components";

const MenuPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <MenuHero />
      <MenuItems />
      <MenuSidebar />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
`;

export default MenuPage;
