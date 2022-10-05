import { useEffect } from "react";
import styled from "styled-components";
import { MenuHero, MenuItems, MenuSidebar } from "../components";
import { getMenuSlides, getMenuItems } from "../features/menu/menuSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";

const MenuPage = () => {
  const { menuSlides, menuItems } = useSelector((store) => store.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    if (menuSlides.length <= 0) dispatch(getMenuSlides());
    if (menuItems.length <= 0) dispatch(getMenuItems());
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
