import { useEffect } from "react";
import styled from "styled-components";
import { MenuHero, MenuItems, MenuSidebar } from "../components";
import { getMenuSlides } from "../features/menu/menuSlice";
import { useDispatch } from "react-redux/es/exports";

const MenuPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenuSlides());
    // eslint-disable-next-line
  }, []);

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
  background: var(--primary-white);
`;

export default MenuPage;
