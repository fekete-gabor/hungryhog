import styled from "styled-components";
import { useSelector } from "react-redux/es/exports";

const Menu = () => {
  const { menuSlides } = useSelector((store) => store.menu);

  return <Wrapper></Wrapper>;
};

const Wrapper = styled.section`
  width: 100%;
`;

export default Menu;
